---
title: IrssiStyleFocus
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:IrssiStyleFocus</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><p>Irssi-style window switching is the use of a modifier key + a number key to switch to a specific window. For example, one could set up W-3 to switch to the third open window. This is easily accomplished in Openbox by setting up keybindings to execute this little <a rel="nofollow" class="external text" href="{{site.baseurl}}/dist/tools/irssi-focus.c">external focus-switching program</a> like so:
</p>
<pre>
&lt;keybind key=&quot;W-1&quot;&gt;
  &lt;action name=&quot;execute&quot;&gt;
    &lt;execute&gt;irssi-focus 0&lt;/execute&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
&lt;keybind key=&quot;W-2&quot;&gt;
  &lt;action name=&quot;execute&quot;&gt;
    &lt;execute&gt;irssi-focus 1&lt;/execute&gt;
  &lt;/action&gt;
&lt;/keybind&gt;
</pre>
<p>and so on.
</p>
</div>
