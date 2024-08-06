<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Actions</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Older_versions"><span class="tocnumber">1</span> <span class="toctext">Older versions</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#Introduction"><span class="tocnumber">2</span> <span class="toctext">Introduction</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#Action_syntax"><span class="tocnumber">3</span> <span class="toctext">Action syntax</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#Global_actions"><span class="tocnumber">4</span> <span class="toctext">Global actions</span></a>
<ul>
<li class="toclevel-2 tocsection-5"><a href="#Execute"><span class="tocnumber">4.1</span> <span class="toctext">Execute</span></a>
<ul>
<li class="toclevel-3 tocsection-6"><a href="#Startup_notification"><span class="tocnumber">4.1.1</span> <span class="toctext">Startup notification</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-7"><a href="#ShowMenu"><span class="tocnumber">4.2</span> <span class="toctext">ShowMenu</span></a></li>
<li class="toclevel-2 tocsection-8"><a href="#NextWindow"><span class="tocnumber">4.3</span> <span class="toctext">NextWindow</span></a></li>
<li class="toclevel-2 tocsection-9"><a href="#PreviousWindow"><span class="tocnumber">4.4</span> <span class="toctext">PreviousWindow</span></a></li>
<li class="toclevel-2 tocsection-10"><a href="#DirectionalCycleWindows"><span class="tocnumber">4.5</span> <span class="toctext">DirectionalCycleWindows</span></a></li>
<li class="toclevel-2 tocsection-11"><a href="#DirectionalTargetWindow"><span class="tocnumber">4.6</span> <span class="toctext">DirectionalTargetWindow</span></a></li>
<li class="toclevel-2 tocsection-12"><a href="#GoToDesktop"><span class="tocnumber">4.7</span> <span class="toctext">GoToDesktop</span></a></li>
<li class="toclevel-2 tocsection-13"><a href="#AddDesktop"><span class="tocnumber">4.8</span> <span class="toctext">AddDesktop</span></a></li>
<li class="toclevel-2 tocsection-14"><a href="#RemoveDesktop"><span class="tocnumber">4.9</span> <span class="toctext">RemoveDesktop</span></a></li>
<li class="toclevel-2 tocsection-15"><a href="#ToggleShowDesktop"><span class="tocnumber">4.10</span> <span class="toctext">ToggleShowDesktop</span></a></li>
<li class="toclevel-2 tocsection-16"><a href="#ToggleDockAutohide"><span class="tocnumber">4.11</span> <span class="toctext">ToggleDockAutohide</span></a></li>
<li class="toclevel-2 tocsection-17"><a href="#Reconfigure"><span class="tocnumber">4.12</span> <span class="toctext">Reconfigure</span></a></li>
<li class="toclevel-2 tocsection-18"><a href="#Restart"><span class="tocnumber">4.13</span> <span class="toctext">Restart</span></a></li>
<li class="toclevel-2 tocsection-19"><a href="#Exit"><span class="tocnumber">4.14</span> <span class="toctext">Exit</span></a></li>
<li class="toclevel-2 tocsection-20"><a href="#SessionLogout"><span class="tocnumber">4.15</span> <span class="toctext">SessionLogout</span></a></li>
<li class="toclevel-2 tocsection-21"><a href="#Debug"><span class="tocnumber">4.16</span> <span class="toctext">Debug</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-22"><a href="#Window_actions"><span class="tocnumber">5</span> <span class="toctext">Window actions</span></a>
<ul>
<li class="toclevel-2 tocsection-23"><a href="#Focus"><span class="tocnumber">5.1</span> <span class="toctext">Focus</span></a></li>
<li class="toclevel-2 tocsection-24"><a href="#Raise"><span class="tocnumber">5.2</span> <span class="toctext">Raise</span></a></li>
<li class="toclevel-2 tocsection-25"><a href="#Lower"><span class="tocnumber">5.3</span> <span class="toctext">Lower</span></a></li>
<li class="toclevel-2 tocsection-26"><a href="#RaiseLower"><span class="tocnumber">5.4</span> <span class="toctext">RaiseLower</span></a></li>
<li class="toclevel-2 tocsection-27"><a href="#Unfocus"><span class="tocnumber">5.5</span> <span class="toctext">Unfocus</span></a></li>
<li class="toclevel-2 tocsection-28"><a href="#FocusToBottom"><span class="tocnumber">5.6</span> <span class="toctext">FocusToBottom</span></a></li>
<li class="toclevel-2 tocsection-29"><a href="#Iconify"><span class="tocnumber">5.7</span> <span class="toctext">Iconify</span></a></li>
<li class="toclevel-2 tocsection-30"><a href="#Close"><span class="tocnumber">5.8</span> <span class="toctext">Close</span></a></li>
<li class="toclevel-2 tocsection-31"><a href="#ToggleShade"><span class="tocnumber">5.9</span> <span class="toctext">ToggleShade</span></a></li>
<li class="toclevel-2 tocsection-32"><a href="#Shade"><span class="tocnumber">5.10</span> <span class="toctext">Shade</span></a></li>
<li class="toclevel-2 tocsection-33"><a href="#Unshade"><span class="tocnumber">5.11</span> <span class="toctext">Unshade</span></a></li>
<li class="toclevel-2 tocsection-34"><a href="#ToggleOmnipresent"><span class="tocnumber">5.12</span> <span class="toctext">ToggleOmnipresent</span></a></li>
<li class="toclevel-2 tocsection-35"><a href="#ToggleMaximize"><span class="tocnumber">5.13</span> <span class="toctext">ToggleMaximize</span></a></li>
<li class="toclevel-2 tocsection-36"><a href="#Maximize"><span class="tocnumber">5.14</span> <span class="toctext">Maximize</span></a></li>
<li class="toclevel-2 tocsection-37"><a href="#Unmaximize"><span class="tocnumber">5.15</span> <span class="toctext">Unmaximize</span></a></li>
<li class="toclevel-2 tocsection-38"><a href="#ToggleFullscreen"><span class="tocnumber">5.16</span> <span class="toctext">ToggleFullscreen</span></a></li>
<li class="toclevel-2 tocsection-39"><a href="#ToggleDecorations"><span class="tocnumber">5.17</span> <span class="toctext">ToggleDecorations</span></a></li>
<li class="toclevel-2 tocsection-40"><a href="#Decorate"><span class="tocnumber">5.18</span> <span class="toctext">Decorate</span></a></li>
<li class="toclevel-2 tocsection-41"><a href="#Undecorate"><span class="tocnumber">5.19</span> <span class="toctext">Undecorate</span></a></li>
<li class="toclevel-2 tocsection-42"><a href="#SendToDesktop"><span class="tocnumber">5.20</span> <span class="toctext">SendToDesktop</span></a></li>
<li class="toclevel-2 tocsection-43"><a href="#Move"><span class="tocnumber">5.21</span> <span class="toctext">Move</span></a></li>
<li class="toclevel-2 tocsection-44"><a href="#Resize"><span class="tocnumber">5.22</span> <span class="toctext">Resize</span></a></li>
<li class="toclevel-2 tocsection-45"><a href="#MoveResizeTo"><span class="tocnumber">5.23</span> <span class="toctext">MoveResizeTo</span></a></li>
<li class="toclevel-2 tocsection-46"><a href="#MoveRelative"><span class="tocnumber">5.24</span> <span class="toctext">MoveRelative</span></a></li>
<li class="toclevel-2 tocsection-47"><a href="#ResizeRelative"><span class="tocnumber">5.25</span> <span class="toctext">ResizeRelative</span></a></li>
<li class="toclevel-2 tocsection-48"><a href="#MoveToEdge"><span class="tocnumber">5.26</span> <span class="toctext">MoveToEdge</span></a></li>
<li class="toclevel-2 tocsection-49"><a href="#GrowToEdge"><span class="tocnumber">5.27</span> <span class="toctext">GrowToEdge</span></a></li>
<li class="toclevel-2 tocsection-50"><a href="#GrowToFill"><span class="tocnumber">5.28</span> <span class="toctext">GrowToFill</span></a></li>
<li class="toclevel-2 tocsection-51"><a href="#ShrinkToEdge"><span class="tocnumber">5.29</span> <span class="toctext">ShrinkToEdge</span></a></li>
<li class="toclevel-2 tocsection-52"><a href="#If"><span class="tocnumber">5.30</span> <span class="toctext">If</span></a></li>
<li class="toclevel-2 tocsection-53"><a href="#ForEach"><span class="tocnumber">5.31</span> <span class="toctext">ForEach</span></a></li>
<li class="toclevel-2 tocsection-54"><a href="#Stop"><span class="tocnumber">5.32</span> <span class="toctext">Stop</span></a></li>
<li class="toclevel-2 tocsection-55"><a href="#ToggleAlwaysOnTop"><span class="tocnumber">5.33</span> <span class="toctext">ToggleAlwaysOnTop</span></a></li>
<li class="toclevel-2 tocsection-56"><a href="#ToggleAlwaysOnBottom"><span class="tocnumber">5.34</span> <span class="toctext">ToggleAlwaysOnBottom</span></a></li>
<li class="toclevel-2 tocsection-57"><a href="#SendToLayer"><span class="tocnumber">5.35</span> <span class="toctext">SendToLayer</span></a></li>
</ul>
</li>
</ul>
</td></tr></table>
<h1> <span class="mw-headline" id="Older_versions"> Older versions </span></h1>
<p>This page describes Openbox 3.6. If you have an older config that doesn't work in 3.6, please let us know.
</p>
<h1> <span class="mw-headline" id="Introduction"> Introduction </span></h1>
<p>Actions are used both in <a href="Bindings" title="Help:Bindings">key and mouse bindings</a> and in <a href="Menus" title="Help:Menus">menus</a>.
</p>
<h1> <span class="mw-headline" id="Action_syntax"> Action syntax </span></h1>
<p>Actions are specified with the &lt;action&gt; tag as follows:
</p>
<code><pre>&lt;action name=&quot;NAME&quot;&gt;
OPTIONS
&lt;/action&gt;</pre></code>
<p>NAME is the name of the action as listed below, OPTIONS is a set of tags specific to each action also defined below.
</p>
<h1> <span class="mw-headline" id="Global_actions"> Global actions </span></h1>
<p>These actions are not used to manipulate windows.  As such, they work whether a window is currently focused or not.
</p>
<h3> <span class="mw-headline" id="Execute"> Execute </span></h3>
<p>Runs a program.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;command&gt;
</td>
<td style="text-align:center">""
</td>
<td>A string which is the command to be executed, along with any arguments to be passed to it.  The "~" tilde character will be expanded to your home directory, but no other shell expansions or scripting syntax may be used in the command unless they are passed to the <code>sh</code> command.  Also, the <code>&amp;</code> character must be written as <code>&amp;amp;</code> in order to be parsed correctly. &lt;execute&gt; is a deprecated name for &lt;command&gt;.
</td></tr>
<tr>
<td>&lt;prompt&gt;
</td>
<td style="text-align:center">none
</td>
<td>A string which Openbox will display in a popup dialog, along with "Yes" and "No" buttons.  The execute action will only be run if you choose the "Yes" button in the dialog.
</td></tr></table>
<h4> <span class="mw-headline" id="Startup_notification"> Startup notification </span></h4>
<p>You can use the startup notification protocol to tell everyone that an application is starting up.  This can be used with most applications, but should <b>not</b> be used with old-style xterminals such as xterm, urxvt, aterm, etc, unless you include the command <b><code>unset DESKTOP_STARTUP_ID</code></b> in your shell's <code>~/.zshrc</code>, <code>~/.bashrc</code> or equivalent startup script.
</p><p>Startup notification has these options, which are included inside the Execute action, in a &lt;startupnotify&gt; tag:
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;enabled&gt;
</td>
<td style="text-align:center">no
</td>
<td>A boolean (yes/no) which says if the startup notification protocol should be used to notify other programs that an application is launching.  This is disabled by default to avoid it being used for old-style xterminals.
</td></tr>
<tr>
<td>&lt;wmclass&gt;
</td>
<td style="text-align:center">none
</td>
<td>A string specifying one of the values that will be in the application window's WM_CLASS property when the window appears.  This is not needed for applications that support the startup-notification protocol.
</td></tr>
<tr>
<td>&lt;name&gt;
</td>
<td style="text-align:center">none
</td>
<td>The name of the application which is launching.  If this option is not used, then the command itself will be used for the name.
</td></tr>
<tr>
<td>&lt;icon&gt;
</td>
<td style="text-align:center">none
</td>
<td>The icon of the application which is launching.  If this option is not used, then the command itself will be used to pick the icon.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-t&quot;&gt;
  &lt;action name=&quot;Execute&quot;&gt;
    &lt;command&gt;urxvt&lt;/command&gt;
  &lt;/action&gt;
&lt;/keybind&gt;

&lt;keybind key=&quot;W-space&quot;&gt;
  &lt;action name=&quot;Execute&quot;&gt;
    &lt;startupnotify&gt;
      &lt;enabled&gt;yes&lt;/enabled&gt;
      &lt;name&gt;Terminal&lt;/name&gt;
      &lt;icon&gt;konsole&lt;/icon&gt;
    &lt;/startupnotify&gt;
    &lt;command&gt;gnome-terminal&lt;/command&gt;
  &lt;/action&gt;
  &lt;action name=&quot;Execute&quot;&gt;
    &lt;prompt&gt;Are you sure you want to run a calculator!?&lt;/prompt&gt;
    &lt;startupnotify&gt;
      &lt;enabled&gt;yes&lt;/enabled&gt;
      &lt;name&gt;Calculator&lt;/name&gt;
      &lt;wmclass&gt;xcalc&lt;/wmclass&gt;
    &lt;/startupnotify&gt;
    &lt;command&gt;xcalc&lt;/command&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ShowMenu"> ShowMenu </span></h3>
<p>Shows a menu by name.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;menu&gt;
</td>
<td style="text-align:center">""
</td>
<td>The name of the menu to be shown.  Names of menus are specified in the menu file, in the <b>id</b> attribute of the &lt;menu&gt; tag.
</td></tr>
<tr>
<td>&lt;position&gt;
</td>
<td>
</td>
<td>Show the menu in the specified position on the specified monitor, see below.
</td></tr></table>
<p>The position tag has three sub-tags that are similar to how the per-application position tag works. &lt;x&gt; and &lt;y&gt; specify a position and take either a pixel value, the string "center" which will center the menu in that dimension, or a relative value specified either as a percentage or ratio. A relative value is interpreted in terms of the monitor the menu will be shown on, and will be relative to the left/top edge of the menu window and monitor for positive values, and to the right/bottom edge for negative values. The &lt;monitor&gt; tag can take one of the following values: <i>default</i> which is the default, this is also the same as specifying <i>primary</i> at present, and means the menu will show up on the primary monitor; <i>mouse</i> is the monitor containing the mouse pointer; <i>active</i> is the monitor containing the focused client, or the primary monitor if no client has focus; <i>all</i> will make the positions be relative to the full workspace area; any integer between 1 and the number of monitors you have will place the menu on the monitor with that number.
</p><p>Openbox provides a number of built-in menus:
</p>
<ul><li> <code>client-list-combined-menu</code> - A list of all windows, across all desktops
</li><li> <code>client-list-menu</code> - A list of all windows, separated into sub menus by desktop
</li><li> <code>client-menu</code> - A menu to control a window, such as to maximize or iconify it
<ul><li> This menu will only show with a key binding if an application window is focused, and for mouse bindings if the mouse event was on an application window (or its decorations).
</li></ul>
</li><li> <code>client-send-to-menu</code> - A list of desktops. When one is selected, the window is sent to the desktop.
<ul><li> This menu will only show with a key binding if an application window is focused, and for mouse bindings if the mouse event was on an application window (or its decorations).
</li></ul>
</li><li> <code>client-layer-menu</code> - A menu for selecting the stacking layer for a window, to put it "always on top" for example.
<ul><li> This menu will only show with a key binding if an application window is focused, and for mouse bindings if the mouse event was on an application window (or its decorations).
</li></ul>
</li></ul>
<p>In addition, the default configuration provides this menu in the <code>menu.xml</code> file:
</p>
<ul><li> <code>root-menu</code> - An example menu containing some applications and options for controlling Openbox
</li></ul>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;A-space&quot;&gt;
  &lt;action name=&quot;ShowMenu&quot;&gt;
    &lt;menu&gt;client-menu&lt;/menu&gt;
  &lt;/action&gt;
&lt;/keybind&gt;

&lt;mousebind button=&quot;Right&quot; action=&quot;Press&quot;&gt;
  &lt;action name=&quot;Activate&quot;/&gt;
  &lt;action name=&quot;ShowMenu&quot;&gt;
    &lt;menu&gt;client-menu&lt;/menu&gt;
  &lt;/action&gt;
&lt;/mousebind&gt;

&lt;mousebind button=&quot;Middle&quot; action=&quot;Press&quot;&gt;
  &lt;action name=&quot;ShowMenu&quot;&gt;
    &lt;menu&gt;client-list-combined-menu&lt;/menu&gt;
  &lt;/action&gt;
&lt;/mousebind&gt;

&lt;mousebind button=&quot;Right&quot; action=&quot;Press&quot;&gt;
  &lt;action name=&quot;ShowMenu&quot;&gt;
    &lt;menu&gt;root-menu&lt;/menu&gt;
  &lt;/action&gt;
&lt;/mousebind&gt;

&lt;keybind key=&quot;W-x&quot;&gt;
  &lt;action name=&quot;ShowMenu&quot;&gt;
    &lt;menu&gt;programs&lt;/menu&gt;
    &lt;position&gt;
      &lt;x&gt;center&lt;/x&gt;
      &lt;y&gt;center&lt;/y&gt;
      &lt;monitor&gt;1&lt;/monitor&gt;
    &lt;/position&gt;
  &lt;/action&gt;
&lt;/keybind&gt;

</pre></code>
<h3> <span class="mw-headline" id="NextWindow"> NextWindow </span></h3>
<p>Cycles focus to the next window.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;dialog&gt;
</td>
<td style="text-align:center">list
</td>
<td>Specifies the type of dialog to be shown on screen with icons for all the windows which can be focused.  Choices are "list", "icons", or "none".  If "none" is selected then no dialog will be shown.
</td></tr>
<tr>
<td>&lt;bar&gt;
</td>
<td style="text-align:center">yes
</td>
<td>A boolean (yes/no) which specifies if the focus indicator is shown which highlights the window that will be focused.
</td></tr>
<tr>
<td>&lt;raise&gt;
</td>
<td style="text-align:center">no
</td>
<td>A boolean (yes/no) which specifies if windows are temporarily raised to the front while cycling through them.
</td></tr>
<tr>
<td>&lt;allDesktops&gt;
</td>
<td style="text-align:center">no
</td>
<td>A boolean (yes/no) which when enabled lets you cycle focus between windows on all desktops, instead of only on the current desktop.
</td></tr>
<tr>
<td>&lt;panels&gt;
</td>
<td style="text-align:center">no
</td>
<td>A boolean (yes/no) which when enabled lets you cycle focus to/between panel windows such as your taskbar.  This can be combined with &lt;desktop&gt;.
</td></tr>
<tr>
<td>&lt;desktop&gt;
</td>
<td style="text-align:center">no
</td>
<td>A boolean (yes/no) which when enabled lets you cycle focus to the desktop window, if one exists (such as in GNOME or KDE).  This can be combined with &lt;panels&gt;.
</td></tr>
<tr>
<td>&lt;linear&gt;
</td>
<td style="text-align:center">no
</td>
<td>A boolean (yes/no) which when enabled causes focus to cycle in a fixed ordering, rather than in the order which windows have been last focused.
</td></tr>
<tr>
<td>&lt;interactive&gt;
</td>
<td style="text-align:center">yes
</td>
<td>A boolean (yes/no) which when disabled causes the action to immediately switch focus to the next target.
</td></tr>
<tr>
<td>&lt;finalactions&gt;
</td>
<td style="text-align:center"><a href="#Focus">Focus</a>, <a href="#Raise">Raise</a>, <a href="#Unshade">Unshade</a>
</td>
<td>A list of actions to run on the window which the user finally selects using this action.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;A-Tab&quot;&gt;
  &lt;action name=&quot;NextWindow&quot;/&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;C-A-Tab&quot;&gt;
  &lt;action name=&quot;NextWindow&quot;&gt;
    &lt;panels&gt;yes&lt;/panels&gt;
    &lt;desktop&gt;yes&lt;/desktop&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-Tab&quot;&gt;
  &lt;action name=&quot;NextWindow&quot;&gt;
    &lt;finalactions&gt;
      &lt;action name=&quot;Focus&quot;/&gt;
      &lt;action name=&quot;Raise&quot;/&gt;
      &lt;action name=&quot;Unshade&quot;/&gt;
      &lt;action name=&quot;MoveResizeTo&quot;&gt;  &lt;!-- center the window which we're focusing --&gt;
        &lt;x&gt;center&lt;/x&gt;
        &lt;y&gt;center&lt;/y&gt;
      &lt;/action&gt;
    &lt;/finalactions&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="PreviousWindow"> PreviousWindow </span></h3>
<p>Cycles focus to the previous window.
Takes the same options as <a href="#NextWindow">NextWindow</a>.
</p>
<h3> <span class="mw-headline" id="DirectionalCycleWindows"> DirectionalCycleWindows </span></h3>
<p>Cycles focus to the window in the direction specified of the currently focused window.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;direction&gt;
</td>
<td style="text-align:center">north
</td>
<td>Which direction to cycle focus in. Can be "north", "northeast", "east", "southeast", "south", "southwest", "west" or "northwest".
</td></tr>
<tr>
<td>&lt;dialog&gt;
</td>
<td style="text-align:center">yes
</td>
<td>A boolean (yes/no) which specifies if a dialog is shown on screen with the name and icon of the window which will be focused.
</td></tr>
<tr>
<td>&lt;bar&gt;
</td>
<td style="text-align:center">yes
</td>
<td>A boolean (yes/no) which specifies if the focus indicator is shown which highlights the window that will be focused.
</td></tr>
<tr>
<td>&lt;raise&gt;
</td>
<td style="text-align:center">no
</td>
<td>A boolean (yes/no) which specifies if windows are temporarily raised to the front while cycling through them.
</td></tr>
<tr>
<td>&lt;finalactions&gt;
</td>
<td style="text-align:center"><a href="#Focus">Focus</a>, <a href="#Raise">Raise</a>, <a href="#Unshade">Unshade</a>
</td>
<td>A list of actions to run on the window which the user finally selects using this action.
</td></tr>
<tr>
<td>&lt;panels&gt;
</td>
<td style="text-align:center">no
</td>
<td>A boolean (yes/no) which specifies whether panel windows are to be selectable.
</td></tr>
<tr>
<td>&lt;desktops&gt;
</td>
<td style="text-align:center">no
</td>
<td>A boolean (yes/no) which specifies whether desktop windows are to be selectable.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-Up&quot;&gt;
  &lt;action name=&quot;DirectionalalCycleWindows&quot;&gt;&lt;direction&gt;north&lt;/direction&gt;&lt;dialog&gt;yes&lt;/dialog&gt;&lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-S-Down&quot;&gt;
  &lt;action name=&quot;DirectionalFocus&quot;&gt;
    &lt;direction&gt;south&lt;/direction&gt;
    &lt;finalactions&gt;
      &lt;action name=&quot;Focus&quot;&gt; &lt;!-- give focus without raising the window --&gt;
      &lt;action name=&quot;Unshade&quot;&gt;
    &lt;/finalactions&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="DirectionalTargetWindow"> DirectionalTargetWindow </span></h3>
<p>Moves focus to the window in the direction specified of the currently focused window.  This is similar to the <a href="#DirectionalFocusCycle">DirectionalFocusCycle</a> action, but it moves focus instantly instead of letting you interactively choose a window. Takes the same options except for &lt;dialog&gt; and &lt;bar&gt;.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-Up&quot;&gt;
  &lt;action name=&quot;DirectionalTargetWindow&quot;&gt;&lt;direction&gt;north&lt;/direction&gt;&lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-S-Down&quot;&gt;
  &lt;action name=&quot;DirectionalTargetWindow&quot;&gt;
    &lt;direction&gt;south&lt;/direction&gt;
    &lt;finalactions&gt;
      &lt;action name=&quot;Focus&quot;&gt; &lt;!-- give focus without raising the window --&gt;
      &lt;action name=&quot;Unshade&quot;&gt;
    &lt;/finalactions&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="GoToDesktop"> GoToDesktop </span></h3>
<p>Changes the visible desktop.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;to&gt;
</td>
<td style="text-align:center">current
</td>
<td>The desktop to switch to, starting from 1, or one of the following special values: "current", "next", "previous", "last", "north" or "up", "south" or "down", "west" or "left", "east" or "right".
</td></tr>
<tr>
<td>&lt;wrap&gt;
</td>
<td style="text-align:center">yes
</td>
<td>A boolean (yes/no) which when enabled lets you wrap around from the last desktop to the first, west to east, north to south, etc, and vice versa.
</td></tr></table>
<p>The value "last" for the &lt;to&gt; option goes to the desktop you were on before the current one. Only one desktop is remembered, but there is a timeout so that if you go past a few desktops, you will go to the one you were really on before. This is useful if you switch between two desktops by going to the next or previous desktop several times, for example with the scroll wheel. The timeout is 750ms and cannot be configured currently.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-F1&quot;&gt;
  &lt;action name=&quot;GoToDesktop&quot;&gt;&lt;to&gt;1&lt;/to&gt;&lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-BackSpace&quot;&gt;
  &lt;action name=&quot;GoToDesktop&quot;&gt;&lt;to&gt;last&lt;/to&gt;&lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-A&quot;&gt;
  &lt;action name=&quot;GoToDesktop&quot;&gt;&lt;to&gt;next&lt;/to&gt;&lt;wrap&gt;no&lt;/wrap&gt;&lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="AddDesktop"> AddDesktop </span></h3>
<p>Create a new desktop in the location specified.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;where&gt;
</td>
<td style="text-align:center">last
</td>
<td>Can be "current" (add a new desktop in front of the current one and shuffle the desktops after it over) or "last" (add a new desktop after the last one).
</td></tr></table>
<p>Example
</p>
<code><pre>
&lt;keybind key=&quot;W-F12&quot;&gt;
  &lt;action name=&quot;AddDesktop&quot;&gt;
     &lt;where&gt;current&lt;/where&gt;
  &lt;/action
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="RemoveDesktop"> RemoveDesktop </span></h3>
<p>Remove the a desktop in the location specified and move the windows on it to the one after it (or before if the removed desktop is the last one).
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;where&gt;
</td>
<td style="text-align:center">last
</td>
<td>Can be "current" (remove the current desktop and shuffle the desktops after it over) or "last" (remove the last desktop).
</td></tr></table>
<p>Example
</p>
<code><pre>
&lt;keybind key=&quot;W-F11&quot;&gt;
  &lt;action name=&quot;RemoveDesktop&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ToggleShowDesktop"> ToggleShowDesktop </span></h3>
<p>Hides all windows so that the desktop is visible, and gives focus to the desktop window if one exists (such as in GNOME and KDE).  You can also use the action again to show the windows again, if no windows have become visible yet.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;strict&gt;
</td>
<td style="text-align:center">"no"
</td>
<td>A boolean (yes/no) which specifies if windows are allowed to show themselves while in Show Desktop mode. In strict mode, they cannot.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-d&quot;&gt;
  &lt;action name=&quot;ToggleShowDesktop&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ToggleDockAutohide"> ToggleDockAutohide </span></h3>
<p>Toggles the autohide setting on the dock temporarily.  This effectively means you can show/hide the dock with a keybinding.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;C-A-d&quot;&gt;
  &lt;action name=&quot;ToggleDockAutohide&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Reconfigure"> Reconfigure </span></h3>
<p>Prompts Openbox to reload its config file, menu and theme.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-F11&quot;&gt;
  &lt;action name=&quot;Reconfigure&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Restart"> Restart </span></h3>
<p>Restarts Openbox.  This starts a new copy of Openbox, and can be used to upgrade to a newly installed version without logging out of your X session. It can also be used to start another window manager.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;command&gt;
</td>
<td style="text-align:center">""
</td>
<td>A string which is the command to be executed as the new window manager, along with any arguments to be passed to it.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-F12&quot;&gt;
  &lt;action name=&quot;Restart&quot;/&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-F11&quot;&gt;
  &lt;action name=&quot;Restart&quot;&gt;&lt;command&gt;firebox&lt;/command&gt;&lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Exit"> Exit </span></h3>
<p>Exits Openbox.
</p><p>If Openbox is built with session support and is running inside a session manager (such as gnome-session, ksmserver), then Openbox will ask the session manager to log out.  Otherwise, Openbox will simply exit, ending the current X session.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;prompt&gt;
</td>
<td style="text-align:center">true
</td>
<td>A boolean (yes/no) which specifies if Openbox should display a prompt dialog asking if you really want to exit before it actually exits.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;C-A-S-F12&quot;&gt;
  &lt;action name=&quot;Exit&quot;&gt;
    &lt;prompt&gt;yes&lt;/prompt&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="SessionLogout"> SessionLogout </span></h3>
<p>This is a synonym for the <a href="#Exit"> Exit</a> action.
</p>
<h3> <span class="mw-headline" id="Debug"> Debug </span></h3>
<p>Prints out a string in Openbox's output for debugging purposes.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;string&gt;
</td>
<td style="text-align:center">""
</td>
<td>The string to be printed out.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-F10&quot;&gt;
  &lt;action name=&quot;Debug&quot;&gt;
   &lt;string&gt;-------------------------------&lt;/string&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h1> <span class="mw-headline" id="Window_actions"> Window actions </span></h1>
<p>These actions are used to control windows.  For key bindings, they operate on the currently focused window.  For mouse bindings they operate on the window being clicked/dragged on.
</p>
<h3> <span class="mw-headline" id="Focus"> Focus </span></h3>
<p>Focuses a window.
</p><p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;A-Left&quot; action=&quot;Press&quot;&gt;
  &lt;action name=&quot;Focus&quot;/&gt;
  &lt;action name=&quot;Raise&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Raise"> Raise </span></h3>
<p>Raises a window above other windows in its layer.
</p><p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;A-Left&quot; action=&quot;Press&quot;&gt;
  &lt;action name=&quot;Focus&quot;/&gt;
  &lt;action name=&quot;Raise&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Lower"> Lower </span></h3>
<p>Lowers a window below other windows in its layer.
</p><p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;A-Middle&quot; action=&quot;Press&quot;&gt;
  &lt;action name=&quot;Lower&quot;/&gt;
  &lt;action name=&quot;FocusToBottom&quot;/&gt;
  &lt;action name=&quot;Unfocus&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="RaiseLower"> RaiseLower </span></h3>
<p>Raises the window if it is currently behind any other windows in its layer.  Lowers the window if it is above all other windows in its layer.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;C-A-r&quot;&gt;
  &lt;action name=&quot;RaiseLower&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Unfocus"> Unfocus </span></h3>
<p>Move focus off of the window.  Usually used in conjuction with <a href="#FocusToBottom">FocusToBottom</a>.
</p><p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;A-Middle&quot; action=&quot;Press&quot;&gt;
  &lt;action name=&quot;Lower&quot;/&gt;
  &lt;action name=&quot;FocusToBottom&quot;/&gt;
  &lt;action name=&quot;Unfocus&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="FocusToBottom"> FocusToBottom </span></h3>
<p>Move the window to the bottom of the recently-used-windows list.  This means that other windows will be given preference when selecting which window to focus.  Usually used in conjuction with <a href="#Unfocus">Unfocus</a>.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;A-Escape&quot;&gt;
  &lt;action name=&quot;Lower&quot;/&gt;
  &lt;action name=&quot;FocusToBottom&quot;/&gt;
  &lt;action name=&quot;Unfocus&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Iconify"> Iconify </span></h3>
<p>Iconify (a.k.a. minimize) the window.
</p><p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;Left&quot; action=&quot;Click&quot;&gt;
  &lt;action name=&quot;Iconify&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Close"> Close </span></h3>
<p>Close the window.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;A-F4&quot;&gt;
  &lt;action name=&quot;Close&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ToggleShade"> ToggleShade </span></h3>
<p>Shade (a.k.a. Roll up) the window, so only its titlebar is visible.  If the window is already shaded, then Unshade (a.k.a. Roll down) the window.
</p><p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;Left&quot; action=&quot;Click&quot;&gt;
  &lt;action name=&quot;ToggleShade&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Shade"> Shade </span></h3>
<p>Shade (a.k.a. Roll up) the window, so only its titlebar is visible.
</p><p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;Up&quot; action=&quot;Click&quot;&gt;
  &lt;action name=&quot;Shade&quot;/&gt;
  &lt;action name=&quot;FocusToBottom&quot;/&gt;
  &lt;action name=&quot;Unfocus&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Unshade"> Unshade </span></h3>
<p>Unshade (a.k.a. Roll down) the window, when it has been <a href="#Shade">shaded</a>.
</p><p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;A-Left&quot; action=&quot;Click&quot;&gt;
  &lt;action name=&quot;Unshade&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ToggleOmnipresent"> ToggleOmnipresent </span></h3>
<p>Make the window visible on all desktops, if it is not already.  Otherwise, make it visible only on the current desktop.
</p><p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;Left&quot; action=&quot;Click&quot;&gt;
  &lt;action name=&quot;ToggleOmnipresent&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ToggleMaximize"> ToggleMaximize </span></h3>
<p>Maximize the window to fill the entire screen in the directions specified.  If it is already maximized, return it to its original dimensions.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;direction&gt;
</td>
<td style="text-align:center">both
</td>
<td>The direction to maximize the window, can be "both", "horizontal" or "vertical".
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;Left&quot; action=&quot;Click&quot;&gt;
  &lt;action name=&quot;ToggleMaximize&quot;/&gt;
&lt;/mousebind&gt;
&lt;mousebind button=&quot;Middle&quot; action=&quot;DoubleClick&quot;&gt;
  &lt;action name=&quot;ToggleMaximize&quot;&gt;&lt;direction&gt;horizontal&lt;/direction&gt;&lt;/action&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Maximize"> Maximize </span></h3>
<p>Maximize the window to fill the entire screen in the directions specifed.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;direction&gt;
</td>
<td style="text-align:center">both
</td>
<td>The direction to maximize the window, can be "both", "horizontal" or "vertical".
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;A-F6&quot;&gt;
  &lt;action name=&quot;Maximize&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Unmaximize"> Unmaximize </span></h3>
<p>Unmaximizes the window in the directions specified, and return it to its pre-maximized dimensions.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;direction&gt;
</td>
<td style="text-align:center">both
</td>
<td>The direction to maximize the window, can be "both", "horizontal" or "vertical".
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;A-F7&quot;&gt;
  &lt;action name=&quot;Unmaximize&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ToggleFullscreen"> ToggleFullscreen </span></h3>
<p>Makes the window fullscreen, filling the entire monitor, without any decorations.  If the window is already fullscreened, then it returns it to its pre-fullscreen dimensions.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;A-F12&quot;&gt;
  &lt;action name=&quot;ToggleFullscreen&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ToggleDecorations"> ToggleDecorations </span></h3>
<p>Removes the window's decorations.  If the &lt;keepBorder&gt; configuration option is enabled (as in the default configuraton), then a border will be left as the only decorations around the window.  If the window has already had its decorations removed, then this will restore them.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;A-S-d&quot;&gt;
  &lt;action name=&quot;ToggleDecorations&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Decorate"> Decorate </span></h3>
<p>Gives a window its normal decorations.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;C-S-d&quot;&gt;
  &lt;action name=&quot;Decorate&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Undecorate"> Undecorate </span></h3>
<p>Removes decorations from a window.  If the &lt;keepBorder&gt; configuration option is enabled (as in the default configuraton), then a border will be left as the only decorations around the window.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;C-S-d&quot;&gt;
  &lt;action name=&quot;Undecorate&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="SendToDesktop"> SendToDesktop </span></h3>
<p>Moves the window to another desktop.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;to&gt;
</td>
<td style="text-align:center">current
</td>
<td>The desktop to send the window to, starting from 1, or one of the following special values: "current", "next", "previous", "last", "north" or "up", "south" or "down", "west" or "left", "east" or "right".
</td></tr>
<tr>
<td>&lt;wrap&gt;
</td>
<td style="text-align:center">yes
</td>
<td>A boolean (yes/no) which when enabled lets you wrap around from the last desktop to the first, west to east, north to south, etc, and vice versa.
</td></tr>
<tr>
<td>&lt;follow&gt;
</td>
<td style="text-align:center">yes
</td>
<td>A boolean (yes/no) which when enabled will also switch to the specified desktop.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-S-F1&quot;&gt;
  &lt;action name=&quot;SendToDesktop&quot;&gt;&lt;to&gt;1&lt;/to&gt;&lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-S-BackSpace&quot;&gt;
  &lt;action name=&quot;SendToDesktop&quot;&gt;&lt;to&gt;last&lt;/to&gt;&lt;/action&gt;
&lt;/keybind&gt;
&lt;!-- Cycle through all windows and focus the selected one on the current desktop --&gt;
&lt;keybind key=&quot;W-S-Tab&quot;&gt;
  &lt;action name=&quot;NextWindow&quot;&gt;
    &lt;allDesktops&gt;yes&lt;/allDesktops&gt;
    &lt;finalactions&gt;
      &lt;action name=&quot;SendToDesktop&quot;&gt;&lt;to&gt;current&lt;/to&gt;&lt;/action&gt;
      &lt;action name=&quot;focus&quot;/&gt;
      &lt;action name=&quot;raise&quot;/&gt;
    &lt;/finalactions&gt;
  &lt;/action
&lt;/keybind&gt;
</pre></code>
<p>See also <a href="#GoToDesktop">GoToDesktop</a>.
</p>
<h3> <span class="mw-headline" id="Move"> Move </span></h3>
<p>Begin interactively moving the window.  Once a move has begun, you can move the window either by moving the mouse pointer, or by using the arrow keys.  The move will complete when you release a mouse button, or press the Enter key.  Pressing Escape will cancel the move.
</p><p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;A-Left&quot; action=&quot;Drag&quot;&gt;
  &lt;action name=&quot;Move&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="Resize"> Resize </span></h3>
<p>Begin interactively resizing the window.  Once a resize has begun, you can resize the window either by moving the mouse pointer, or by using the arrow keys.  The move will complete when you release a mouse button, or press the Enter key.  Pressing Escape will cancel the move.
</p><p>If the resize is bound to a mouse button, then the corner/edge of the window that is resized is chosen by which is nearest to the mouse pointer.  You can use the &lt;edge&gt; option to override this and specify which corner/edge should be resized.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;edge&gt;
</td>
<td style="text-align:center">none
</td>
<td>One of: "top", "left", "right", "bottom", "topleft", "topright", "bottomleft", "bottomright".  This specifies which corner/edge should be resized, and overrides having the edge determined dynamically by which is closest to the mouse pointer.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;mousebind button=&quot;A-Right&quot; action=&quot;Drag&quot;&gt;
  &lt;action name=&quot;Resize&quot;/&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="MoveResizeTo"> MoveResizeTo </span></h3>
<p>Move and/or resize a window.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;x&gt;
</td>
<td style="text-align:center">current
</td>
<td>The position to move the window to.  <b>current</b> specifies the window's current x-position.  <b>center</b> moves the window to the center of the screen, horizontally.  A number gives the absolute position to move the window to.  A negative value specifies the distance from the right edge of the screen (e.g. -2 is 2 pixels in from the right edge).  Use +- to specify a negative position relative to the left edge (e.g. +-10 is 10 pixels off the screen on the left side), and -- to specify a negative position relative to the right edge (e.g. --5 is 5 pixels off the screen on the right side).
</td></tr>
<tr>
<td>&lt;y&gt;
</td>
<td style="text-align:center">current
</td>
<td>The position to move the window to.  <b>current</b> specifies the window's current y-position.  <b>center</b> moves the window to the center of the screen, vertically.  A number gives the absolute position to move the window to.  A negative value specifies the distance from the bottom edge of the screen (e.g. -2 is 2 pixels in from the bottom edge).  Use +- to specify a negative position relative to the top edge (e.g. +-10 is 10 pixels off the top of the screen), and -- to specify a negative position relative to the bottom edge (e.g. --5 is 5 pixels off the bottom of the screen).
</td></tr>
<tr>
<td>&lt;width&gt;
</td>
<td style="text-align:center">current
</td>
<td>The width to resize the window to.  <b>current</b> specifies the window's current width.  A number specifies the desired width of the window. You may also specify the width as a fraction or a percentage, eg <b>50%</b> or <b>7/8</b>. If <b>client="yes"</b> is specified as an attribute, then the size determines the size of the application window inside the decorations. The default includes the decorations in the size.
</td></tr>
<tr>
<td>&lt;height&gt;
</td>
<td style="text-align:center">current
</td>
<td>The height to resize the window to.  <b>current</b> specifies the window's current height.  A number specifies the desired height of the window. You may also specify the width as a fraction or a percentage, eg <b>50%</b> or <b>7/8</b>. If <b>client="yes"</b> is specified as an attribute, then the size determines the size of the application window inside the decorations. The default includes the decorations in the size.
</td></tr>
<tr>
<td>&lt;monitor&gt;
</td>
<td style="text-align:center">current
</td>
<td>The monitor to move the window to (in Xinerama/TwinView setups with multiple monitors).  <b>current</b> specifies the window's current monitor.  <b>all</b> specifies to use all monitors together.  <b>next</b> specifies to move the window to the next monitor relative to the one it is currently on.  <b>prev</b> specifies to move the window to the previous monitor relative to the one it is currently on.  A number specifies the desired monitor (starting from 1).
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-2&quot;&gt;
  &lt;action name=&quot;MoveResizeTo&quot;&gt;
    &lt;!-- move the window to the second monitor --&gt;
    &lt;monitor&gt;2&lt;/monitor&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-F10&quot;&gt;
  &lt;action name=&quot;MoveResizeTo&quot;&gt;
    &lt;!-- put the window in the bottom right corner --&gt;
    &lt;x&gt;-0&lt;/x&gt;
    &lt;y&gt;-0&lt;/y&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-c&quot;&gt;
  &lt;action name=&quot;MoveResizeTo&quot;&gt;
    &lt;!-- center the window on the first monitor --&gt;
    &lt;x&gt;center&lt;/x&gt;
    &lt;y&gt;center&lt;/y&gt;
    &lt;monitor&gt;1&lt;/monitor&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;C-A-1&quot;&gt;
  &lt;action name=&quot;MoveResizeTo&quot;&gt;
    &lt;!-- adjust a window's height --&gt;
    &lt;width client=&quot;yes&quot;&gt;1/2&lt;/width&gt;
    &lt;height&gt;300&lt;/height&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="MoveRelative"> MoveRelative </span></h3>
<p>Move the window by an incremental amount, relative to its current position
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;x&gt;
</td>
<td style="text-align:center">0
</td>
<td>The amount to move the window in the horizontal direction.  A positive value moves it to the right, and a negative value moves it to the left.
</td></tr>
<tr>
<td>&lt;y&gt;
</td>
<td style="text-align:center">0
</td>
<td>The amount to move the window in the vertial direction.  A positive value moves it down, and a negative value moves it up.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-Right&quot;&gt;
  &lt;action name=&quot;MoveRelative&quot;&gt;
    &lt;x&gt;5&lt;/x&gt;
    &lt;y&gt;0&lt;/y&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-Up&quot;&gt;
  &lt;action name=&quot;MoveRelative&quot;&gt;
    &lt;x&gt;0&lt;/x&gt;
    &lt;y&gt;-5&lt;/y&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ResizeRelative"> ResizeRelative </span></h3>
<p>Resize the window by an incremental amount, relative to its current size.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;left&gt;
</td>
<td style="text-align:center">0
</td>
<td>The amount to resize the left edge of the window by.  A positive value moves the left edge to the left, growing the window.  A negative value moves the edge to the right, shrinking the window.
</td></tr>
<tr>
<td>&lt;right&gt;
</td>
<td style="text-align:center">0
</td>
<td>The amount to resize the right edge of the window by.  A positive value moves the right edge to the right, growing the window.  A negative value moves the edge to the left, shrinking the window.
</td></tr>
<tr>
<td>&lt;top&gt;
</td>
<td style="text-align:center">0
</td>
<td>The amount to resize the top edge of the window by.  A positive value moves the top edge up, growing the window.  A negative value moves the edge down, shrinking the window.
</td></tr>
<tr>
<td>&lt;bottom&gt;
</td>
<td style="text-align:center">0
</td>
<td>The amount to resize the bottom edge of the window by.  A positive value moves the bottom edge down, growing the window.  A negative value moves the edge up, shrinking the window.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-Down&quot;&gt;
  &lt;action name=&quot;ResizeRelative&quot;&gt;
    &lt;bottom&gt;5&lt;/bottom&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-S-Down&quot;&gt;
  &lt;action name=&quot;ResizeRelative&quot;&gt;
    &lt;bottom&gt;-5&lt;/bottom&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="MoveToEdge"> MoveToEdge </span></h3>
<p>Moves the window to the nearest edge in the direction specified.  Edges are the outer edges of other windows, monitor edges in multi-monitor setups, or the desktop boundaries.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;direction&gt;
</td>
<td style="text-align:center">north
</td>
<td>The direction to move the window, can be "north", "south", "west" or "east".
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-Left&quot;&gt;
  &lt;action name=&quot;MoveToEdge&quot;&gt;&lt;direction&gt;west&lt;/direction&gt;&lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="GrowToEdge"> GrowToEdge </span></h3>
<p>Grows the window until it touches the nearest edge in the direction specified.  Edges are the outer edges of other windows, monitor edges in multi-monitor setups, or the desktop boundaries.  If the window edge is at the screen edge already, it is <a href="#ShrinkToEdge">shrunk</a> instead.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;direction&gt;
</td>
<td style="text-align:center">north
</td>
<td>The direction to grow the window, can be "north", "south", "west" or "east".
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;C-Right&quot;&gt;
  &lt;action name=&quot;GrowToEdge&quot;&gt;&lt;direction&gt;west&lt;/direction&gt;&lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="GrowToFill"> GrowToFill </span></h3>
<p>Grows the window in every direction but doesn't go across any edges until all edges touch something else.
</p>
<h3> <span class="mw-headline" id="ShrinkToEdge"> ShrinkToEdge </span></h3>
<p>Shrinks the window until it touches the nearest edge in the direction specified.  Edges are the outer edges of other windows, monitor edges in multi-monitor setups, or the desktop boundaries.  If no edge is found, the window is halved in size.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;direction&gt;
</td>
<td style="text-align:center">north
</td>
<td>The direction to shrink the window, can be "north", "south", "west" or "east".
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;C-Right&quot;&gt;
  &lt;action name=&quot;GrowToEdge&quot;&gt;&lt;direction&gt;west&lt;/direction&gt;&lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="If"> If </span></h3>
<p>This action allows you to do different things depending on various conditions. The basic structure is:
</p>
<code><pre>
&lt;action name=&quot;If&quot;&gt;
  &lt;query target=&quot;default&quot;&gt;
    &lt;somecondition&gt;value of condition&lt;/somecondition&gt;
    &lt;someothercondition&gt;value of condition&lt;/someothercondition&gt;
  &lt;/query&gt;
  &lt;then&gt;
    ... list of &lt;action&gt;s to run when true
  &lt;/then&gt;
  &lt;else&gt;
    ... list of &lt;action&gt;s to run when false
  &lt;/else&gt;
&lt;/action&gt;
</pre></code>
<p>The query tag's target can be either "default" or "focus", and multiple query tags can be present in one If action. "default" means to check the conditions against whatever window the actions would normally act on, while "focus" always checks against the window that currently has focus. These differ for example during focus cycling actions, or when the ForEach action is being used.
</p><p>The list of conditions is:
</p>
<table>
<tr>
<th>Condition
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;shaded&gt;
</td>
<td>yes/no: if the window is rolled up or not.
</td></tr>
<tr>
<td>&lt;maximized&gt;
</td>
<td>yes/no
</td></tr>
<tr>
<td>&lt;maximizedhorizontal&gt;
</td>
<td>yes/no
</td></tr>
<tr>
<td>&lt;maximizedvertical&gt;
</td>
<td>yes/no
</td></tr>
<tr>
<td>&lt;iconified&gt;
</td>
<td>yes/no: if the window is minimized or not.
</td></tr>
<tr>
<td>&lt;focused&gt;
</td>
<td>yes/no: the window is the focused window. This may not be true while focus cycling or in the finalactions of focus cycling.
</td></tr>
<tr>
<td>&lt;urgent&gt;
</td>
<td>yes/no: the window has the urgent flag set (also known as DEMANDS_ATTENTION).
</td></tr>
<tr>
<td>&lt;undecorated&gt;
</td>
<td>yes/no: if the window decorations are hidden or not.
</td></tr>
<tr>
<td>&lt;omnipresent&gt;
</td>
<td>yes/no: if the window is visible on all desktops or not
</td></tr>
<tr>
<td>&lt;activedesktop&gt;
</td>
<td>The desktop that is currently active. This can only be a number.
</td></tr>
<tr>
<td>&lt;desktop&gt;
</td>
<td>The desktop the client is currently on. This can be the number of a desktop or the special values "current" or "other".
</td></tr>
<tr>
<td>&lt;monitor&gt;
</td>
<td>Matches the monitor the client is currently on (most area wins if spanning several).
</td></tr>
<tr>
<td>&lt;title&gt; or &lt;title type="pattern"&gt;
</td>
<td>A wildcard pattern to match against the window title, like "* - Mozilla Firefox".
</td></tr>
<tr>
<td>&lt;title type="regex"&gt;
</td>
<td>As above, but use regex instead of wildcard pattern, eg "- Mozilla Firefox$".
</td></tr>
<tr>
<td>&lt;title type="exact"&gt;
</td>
<td>As above, but the string must match exactly (case sensitive).
</td></tr>
<tr>
<td>&lt;class&gt;, &lt;name&gt;, &lt;role&gt;, &lt;type&gt;
</td>
<td>Works like the &lt;title&gt; tag and takes the type parameter, but matches against the window class, name, role and type respectively.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;!-- this corresponds to the ShadeLower and UnshadeRaise actions from 3.4 --&gt;
&lt;mousebind button=&quot;Up&quot; action=&quot;Click&quot;&gt;
  &lt;action name=&quot;If&quot;&gt;
    &lt;query&gt;
      &lt;shaded&gt;yes&lt;/shaded&gt;
    &lt;/query&gt;
    &lt;then&gt;
      &lt;action name=&quot;Lower&quot;/&gt;
    &lt;/then&gt;
    &lt;else&gt;
      &lt;action name=&quot;Shade&quot;/&gt;
    &lt;/else&gt;
  &lt;/action&gt;
&lt;/mousebind&gt;
&lt;mousebind button=&quot;Down&quot; action=&quot;Click&quot;&gt;
  &lt;action name=&quot;If&quot;&gt;
    &lt;query&gt;
      &lt;shaded&gt;no&lt;/shaded&gt;
    &lt;/query&gt;
    &lt;then&gt;
      &lt;action name=&quot;Raise&quot;/&gt;
    &lt;/then&gt;
    &lt;else&gt;
      &lt;action name=&quot;Unshade&quot;/&gt;
    &lt;/else&gt;
  &lt;/action&gt;
&lt;/mousebind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ForEach"> ForEach </span></h3>
<p>This action has the same syntax as the If action, but runs for every client window on every desktop, not just the current window.
</p>
<h3> <span class="mw-headline" id="Stop"> Stop </span></h3>
<p>As of Openbox 3.6.1:  Stop will end execution only of the parent element that directly contains the Stop.  If a grandparent element exists (via hierarchical nesting via If or ForEach), execution of that grandparent element will (surprisingly!) continue.  Additionally, if a ForEach contains an If (or several nested Ifs), and if one of those Ifs contains a Stop, then that Stop will cause that ForEach to exit once the current iteration completes.
</p><p>As of Openbox 3.6.1:  If a parent ForEach contains a child ForEach that contains a Stop, Openbox may permanently lock up and freeze.  This is a bug.
</p><p>Stop takes no arguments.
</p><p>One pattern is to use a Stop at the end of a ForEach.  In this pattern, the actions in the ForEach will be applied only to the first client that matches the ForEach's query.
</p>
<h3> <span class="mw-headline" id="ToggleAlwaysOnTop"> ToggleAlwaysOnTop </span></h3>
<p>Makes the window always above other windows, in the "always on top" layer.  If the window is already set to be above other windows, this puts the window back in the stacking order with normal windows.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-F8&quot;&gt;
  &lt;action name=&quot;ToggleAlwaysOnTop&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="ToggleAlwaysOnBottom"> ToggleAlwaysOnBottom </span></h3>
<p>Makes the window always below other windows, in the "always on bottom" layer.  If the window is already set to be below other windows, this puts the window back in the stacking order with normal windows.
</p><p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-F5&quot;&gt;
  &lt;action name=&quot;ToggleAlwaysOnBottom&quot;/&gt;
&lt;/keybind&gt;
</pre></code>
<h3> <span class="mw-headline" id="SendToLayer"> SendToLayer </span></h3>
<p>Moves the window to the specified layer.
</p>
<table>
<tr>
<th>Option
</th>
<th>Default Value
</th>
<th>Description
</th></tr>
<tr>
<td>&lt;layer&gt;
</td>
<td style="text-align:center">normal
</td>
<td>The layer to put the window in. It can be the "top" layer, which appears over all other windows except fullscreen windows, the "normal" layer, or the "bottom" layer, which appears below all other windows.
</td></tr></table>
<p>Example:
</p>
<code><pre>
&lt;keybind key=&quot;W-F7&quot;&gt;
  &lt;action name=&quot;SendToLayer&quot;&gt;&lt;layer&gt;top&lt;/layer&gt;&lt;/action&gt;
&lt;/keybind&gt;
</pre></code>
</div
