---
title: Help:Power management
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Power management</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><p>Openbox does not load power management by default - you must load it, or configure it to load in <a href="Autostart" title="Help:Autostart">autostart</a>.
</p><p>There are various options you may have available, depending on your distribution. 
</p>
<table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#pm-utils"><span class="tocnumber">1</span> <span class="toctext">pm-utils</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#acpid"><span class="tocnumber">2</span> <span class="toctext">acpid</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#gnome-power-manager"><span class="tocnumber">3</span> <span class="toctext">gnome-power-manager</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#xfce4-power-manager"><span class="tocnumber">4</span> <span class="toctext">xfce4-power-manager</span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#Notify_area_icons"><span class="tocnumber">5</span> <span class="toctext">Notify area icons</span></a></li>
<li class="toclevel-1 tocsection-6"><a href="#See_also"><span class="tocnumber">6</span> <span class="toctext">See also</span></a></li>
</ul>
</td></tr></table>
<h2> <span class="mw-headline" id="pm-utils"> pm-utils </span></h2>
<p><a rel="nofollow" class="external text" href="http://pm-utils.freedesktop.org/wiki/">pm-utils</a> gives shell commands such as pm-hibernate and pm-suspend.
</p><p><a rel="nofollow" class="external text" href="https://wiki.archlinux.org/index.php/Pm-utils">pm-utils on the Arch wiki</a> has configuration details.
</p>
<h2> <span class="mw-headline" id="acpid"> acpid </span></h2>
<p><a rel="nofollow" class="external text" href="http://acpid.sourceforge.net/">acpid</a> is a flexible and extensible daemon for delivering ACPI events, including events triggered by:
</p>
<ul><li> Pressing the power button 
</li><li> Pressing a sleep/suspend button
</li><li> Closing a laptop/notebook lid
</li><li> Plugging or unplugging an AC power adapter from a laptop
</li></ul>
<p>See also <a rel="nofollow" class="external text" href="https://wiki.archlinux.org/index.php/Acpid">acpid on the Arch Wiki</a>.
</p>
<h2> <span class="mw-headline" id="gnome-power-manager"> gnome-power-manager </span></h2>
<p>If you have GNOME installed on the same installation of Linux that you are using with Openbox (or if you don't mind installing a few GNOME dependencies) you can run <a rel="nofollow" class="external text" href="http://projects.gnome.org/gnome-power-manager/">gnome-power-manager</a> - simply type or paste at the command prompt:
</p>
<dl><dd>gnome-power-manager
</dd></dl>
<p>Gnome power preferences provides a notify area icon, and lets you adjust the power managment settings used my gnome-power-manager. run:
</p>
<dl><dd>gnome-power-preferences
</dd></dl>
<p><br/>
</p>
<h2> <span class="mw-headline" id="xfce4-power-manager"> xfce4-power-manager </span></h2>
<p>xfce4-power-manager appears to require fewer dependencies than gnome-power-manager.
</p>
<h2> <span class="mw-headline" id="Notify_area_icons"> Notify area icons </span></h2>
<p>Both the Gnome and the Xfce4 place icons in the notify area - this will hopefully work in most or all panels, including tint2 and LXPanel.
</p>
<h2> <span class="mw-headline" id="See_also"> See also </span></h2>
<ul><li> <a href="Suspend_and_hibernate" title="Help:Suspend and hibernate">Suspend and hibernate</a>
</li></ul>
</div>
