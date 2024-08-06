/* gcc -Wall -pedantic -o focus focus.c -lX11 `pkg-config --cflags --libs glib-2.0` -O2 -fno-strict-aliasing */

#include <X11/Xlib.h>
#include <glib.h> /* sorting, oh my */
#include <stdlib.h>
#include <stdio.h>
#include <X11/Xatom.h>

struct display {
	Display * display;
	Window root;
};

struct display * display_open(const char * string) {
	struct display * display = malloc(sizeof(struct display));
	display->display = XOpenDisplay(NULL);
	display->root = DefaultRootWindow(display->display);

	return display;
}

void display_close(struct display * display) {
	XCloseDisplay(display->display);
	free(display);
}

long display_get_current_desktop(struct display * display) {
	Atom actual_type_return;
	int actual_format_return = 0;
	unsigned long nitems_return = 0;
	unsigned long bytes_after_return = 0;
	long * desktop = 0;
	long ret;

	if (XGetWindowProperty(display->display, display->root, XInternAtom(display->display, "_NET_CURRENT_DESKTOP", False), 0, 1,
		False, XA_CARDINAL, &actual_type_return, &actual_format_return,
		&nitems_return, &bytes_after_return, (unsigned char**)&desktop) != Success) {
			return 0;
	}
	if (actual_type_return != XA_CARDINAL || nitems_return == 0) {
		return 0;
	}

	ret = desktop[0];
	XFree(desktop);

	return ret;
}

long window_get_desktop(struct display * display, Window window) {
	Atom actual_type_return;
	int actual_format_return = 0;
	unsigned long nitems_return = 0;
	unsigned long bytes_after_return = 0;
	long * desktop = 0;
	long ret = 0;

	if (XGetWindowProperty(display->display, window, XInternAtom(display->display, "_NET_WM_DESKTOP", False), 0, 1, False, XA_CARDINAL, &actual_type_return, &actual_format_return, &nitems_return, &bytes_after_return, (unsigned char**)(void*)&desktop) != Success) return 0;

	ret = desktop[0];
	XFree(desktop);

	return ret;

}

GArray * display_get_windows(struct display * display, long desktop) {
	Atom actual_type_return;
	int actual_format_return = 0;
	unsigned long nitems_return = 0;
	unsigned long bytes_after_return = 0;
	unsigned long count;
	Window * windows = NULL;

	GArray * array;

	if (XGetWindowProperty(display->display, display->root, XInternAtom(display->display, "_NET_CLIENT_LIST", False), 0, 0x7fffffff, False, XA_WINDOW, &actual_type_return, &actual_format_return, &nitems_return, &bytes_after_return, (unsigned char **)&windows) != Success) {
		return NULL;
	}

	array = g_array_new(FALSE, FALSE, sizeof(Window));
	for (count = 0; count < nitems_return; count++) {
		long w_desktop = window_get_desktop(display, windows[count]);
		if (w_desktop == desktop || w_desktop == ULONG_MAX) {
			g_array_append_val(array, windows[count]);
		}
	}

	XFree(windows);

	return array;
}

void window_get_position(struct display * display, Window window, int position[2]) {

	Window child;
	XTranslateCoordinates(display->display, window, display->root, 0, 0, position + 0, position + 1, &child);

}

gint sort(gconstpointer a, gconstpointer b, gpointer data) {
	int pos_a[2];
	int pos_b[2];

	gint result;

	window_get_position((struct display*)data, *(Window*)a, pos_a);
	window_get_position((struct display*)data, *(Window*)b, pos_b);

	if ((result = pos_a[1] - pos_b[1])) return result;

	return pos_a[0] - pos_b[0];
}

void window_activate(struct display * display, Window window) {
	XEvent event;
	long mask = SubstructureRedirectMask | SubstructureNotifyMask;

	event.xclient.type = ClientMessage;
	event.xclient.serial = 0;
	event.xclient.send_event = True;
	event.xclient.display = display->display;
	event.xclient.window = window;
	event.xclient.message_type = XInternAtom(display->display, "_NET_ACTIVE_WINDOW", False);

	event.xclient.format = 32;
	event.xclient.data.l[0] = 2;
	event.xclient.data.l[1] = CurrentTime;
	event.xclient.data.l[2] = 0;
	event.xclient.data.l[3] = 0;
	event.xclient.data.l[4] = 0;

	XSendEvent(display->display, display->root, False, mask, &event);
}

int main(int argc, char ** argv) {
	struct display * display;
	GArray * windows;
	long desktop;

	if (argc < 2) {
		fprintf(stderr, "Give me a window number to activate.\n");
		fprintf(stderr, "Window numbers are integers >= 0.\n");
		return 1;
	}

	display = display_open(NULL);

	desktop = display_get_current_desktop(display);
	windows = display_get_windows(display, desktop);

	g_array_sort_with_data(windows, sort, (gpointer)display);

	window_activate(display, g_array_index(windows, Window, atoi(argv[1])));
	XFlush(display->display);

	display_close(display);
	g_array_free(windows, TRUE);

	return 0;
}
