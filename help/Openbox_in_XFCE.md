---
title: Help:Openbox in XFCE
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Openbox in XFCE</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><h2> <span class="mw-headline" id="Using_Openbox_in_XFCE_4"> Using Openbox in XFCE 4 </span></h2>
<p><b><font color="red">NOTE: You must have Openbox (and possibly ObConf) already installed to use this guide.</font></b>
</p><p>To use Openbox with XFCE, log into your normal XFCE session. Then, run this command in a terminal:
</p>
<code><pre>openbox --replace &amp; exit</pre></code>
<p>This command terminates the currently running window manager, runs Openbox, and closes the terminal. Now you must log out and log back in. When you go to log out, make sure  you check the box that says "Save session for future login" or something like that. When you log back in, XFCE will use Openbox.
</p><p>Note, if you don't use Xfwm4, this command could fail, depending on the abilities of the window manager. For example, Fluxbox doesn't accept to be replaced this way. In this case, you have to run the following command:
</p>
<code><pre>killall fluxbox&#160;; openbox &amp; exit</pre></code>
<p>To be able to exit the session using xfce4-session, open your file ~/.config/openbox/menu.xml (if it isn't there, copy it from /etc/xdg/openbox/menu.xml). Look for the entry 
</p>
<code><pre>
&lt;item label=&quot;Exit&quot;&gt;
    &lt;action name=&quot;Exit&quot;/&gt;
&lt;/item&gt;
</pre></code>
<p>and change it for the following
</p>
<code><pre>
&lt;item label=&quot;Exit&quot;&gt;
  &lt;action name=&quot;Execute&quot;&gt;
    &lt;command&gt;xfce4-session-logout&lt;/command&gt;
  &lt;/action&gt;
&lt;/item&gt;
</pre></code>
<p>Otherwise, using the "Exit" entry of the root-menu will cause Openbox to terminate its execution.
</p><p>Also, if you notice scrolling the wheel to change between virtual desktops skips one or another virtual desktop (and this bothers you and would like to fix it just for mental sake), open your ~/.config/openbox/rc.xml file and move the mouse binds with actions "DesktopPrevious" and "DesktopNext" from the context "Desktop" to the context "Root" (you may need to define the Root context).
</p>
If you want to use the Openbox root-menu instead of Xfce's, (right click over the desktop) you could terminate Xfdesktop by running the following command in a terminal: <pre>xfdesktop --quit</pre> The bad news is that Xfdesktop manages the wallpaper and desktop icons, so you should use other tools for that purpose (check the FAQ for some ideas). By terminating Xfdesktop, the former issue with the virtual desktops is no longer a problem.
</div>
