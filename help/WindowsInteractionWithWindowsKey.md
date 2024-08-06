---
title: Help:WindowsInteractionWithWindowsKey
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:WindowsInteractionWithWindowsKey</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><p>This proposal make use of the Super modifier key (aka Windows key) to interact with windows in common tasks like moving, expanding, focusing, minimizing...
</p><p><b>Window switching (Alt+Tab style)</b>
</p>
<pre> W-Tab       Next window (like A-Tab)
 W-S-Tab     Previous window (like A-S-Tab)
</pre>
<p><b>Directional window focus:</b>
</p>
<pre> W-Left      focus the window at the left of current window
 W-Right     focus the window at the right of current window
 W-Up        focus the window at the north of current window
 W-Down      focus the window at the south of current window
</pre>
<p><b>Directional window moving:</b>
</p>
<pre> W-C-Left    Move the window to left
 W-C-Right   Move the window to right
 W-C-Up      Move the window to north
 W-C-Down    Move the window to south
</pre>
<p><b>Directional window expanding:</b>
</p>
<pre> W-S-Left    expand the window to the left
 W-S-Right   expand the window to the right
 W-S-Up      expand the window to the north
 W-S-Down    expand the window to the south
</pre>
<p><b>Other util keys</b>
</p>
<pre> W-Space     maximize window
 W-Enter     toggle full screen
 W-Esc       minimize window
 W-B         toggle decorations (border of windows)
 W-d         show desktop
</pre>
<p><br/>
<b>And this is the configuration to enable the above described shortcuts:</b>
</p>
<pre>   &lt;keybind key="W-Tab"&gt;
     &lt;action name="NextWindow"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-S-Tab"&gt;
     &lt;action name="PreviousWindow"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-Up"&gt;
     &lt;action name="DirectionalFocusNorth"&gt;
       &lt;dialog&gt;yes&lt;/dialog&gt;
     &lt;/action&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-Down"&gt;
     &lt;action name="DirectionalFocusSouth"&gt;
       &lt;dialog&gt;yes&lt;/dialog&gt;
     &lt;/action&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-Left"&gt;
     &lt;action name="DirectionalFocusWest"&gt;
       &lt;dialog&gt;yes&lt;/dialog&gt;
     &lt;/action&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-Right"&gt;
     &lt;action name="DirectionalFocusEast"&gt;
       &lt;dialog&gt;yes&lt;/dialog&gt;
     &lt;/action&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-C-Up"&gt;
     &lt;action name="MoveToEdgeNorth"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-C-Down"&gt;
     &lt;action name="MoveToEdgeSouth"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-C-Left"&gt;
     &lt;action name="MoveToEdgeWest"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-C-Right"&gt;
     &lt;action name="MoveToEdgeEast"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-S-Up"&gt;
     &lt;action name="UnmaximizeFull"/&gt;
     &lt;action name="GrowToEdgeNorth"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-S-Down"&gt;
     &lt;action name="UnmaximizeFull"/&gt;
     &lt;action name="GrowToEdgeSouth"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-S-Left"&gt;
     &lt;action name="UnmaximizeFull"/&gt;
     &lt;action name="GrowToEdgeWest"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-S-Right"&gt;
     &lt;action name="UnmaximizeFull"/&gt;
     &lt;action name="GrowToEdgeEast"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-space"&gt;
     &lt;action name="ToggleMaximizeFull"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-Return"&gt;
     &lt;action name="ToggleFullscreen"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-Escape"&gt;
     &lt;action name="Iconify"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-B"&gt;
     &lt;action name="ToggleDecorations"/&gt;
   &lt;/keybind&gt;
   &lt;keybind key="W-d"&gt;
     &lt;action name="ToggleShowDesktop"/&gt;
   &lt;/keybind&gt;
</pre>
</div>
