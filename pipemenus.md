---
title: Pipemenus
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Openbox:Pipemenus</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div class="thumb tright"><div class="thumbinner" style="width:322px;"><a href="{{site.baseurl}}/assets/images/pipemenus/Ob-chromium-scrot.png" class="image"><img alt="(thumbnail)" src="{{site.baseurl}}/assets/images/pipemenus/320px-Ob-chromium-scrot.png" width="320" height="230" class="thumbimage"/></a>  <div class="thumbcaption"><div class="magnify"><a href="{{site.baseurl}}/assets/images/pipemenus/Ob-chromium-scrot.png" class="internal" title="Enlarge"><img src="{{site.baseurl}}/assets/images/magnify-clip.png" width="15" height="11" alt=""/></a></div>Example of a pipe menu in action.</div></div></div>
<p>Pipe menus are generated at run time (on-the-fly) based on output of scripts. These are also called "dynamic menus," and are often used to provide added functionality to Openbox or integration with other software on the system. A number of scripts for generating pipe menus have been collected on this page. Please note many of these scripts have not been reviewed, and were not written by people directly involved with the project. 
</p><p>See the <a href="{{site.baseurl}}/help/Menus#Pipe_menus" title="Help:Menus">menu documentation</a> for how to use pipe menus in your Openbox installation.
</p>
<table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Application_Menus"><span class="tocnumber">1</span> <span class="toctext">Application Menus</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#Desktop_Environment_Integration"><span class="tocnumber">2</span> <span class="toctext">Desktop Environment Integration</span></a>
<ul>
<li class="toclevel-2 tocsection-3"><a href="#Personalisation"><span class="tocnumber">2.1</span> <span class="toctext">Personalisation</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-4"><a href="#Media_.26_Games"><span class="tocnumber">3</span> <span class="toctext">Media &amp; Games</span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#System_Integration"><span class="tocnumber">4</span> <span class="toctext">System Integration</span></a>
<ul>
<li class="toclevel-2 tocsection-6"><a href="#Devices_.26_Files"><span class="tocnumber">4.1</span> <span class="toctext">Devices &amp; Files</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-7"><a href="#Miscellaneous"><span class="tocnumber">5</span> <span class="toctext">Miscellaneous</span></a>
<ul>
<li class="toclevel-2 tocsection-8"><a href="#Internet"><span class="tocnumber">5.1</span> <span class="toctext">Internet</span></a></li>
<li class="toclevel-2 tocsection-9"><a href="#Utilities"><span class="tocnumber">5.2</span> <span class="toctext">Utilities</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-10"><a href="#Script_collections"><span class="tocnumber">6</span> <span class="toctext">Script collections</span></a>
<ul>
<li class="toclevel-2 tocsection-11"><a href="#External_links"><span class="tocnumber">6.1</span> <span class="toctext">External links</span></a></li>
</ul>
</li>
</ul>
</td></tr></table>
<h2> <span class="mw-headline" id="Application_Menus"> Application Menus </span></h2>
<table border="0" cellspacing="1" cellpadding="5" style="text-align: left; width: 100%;">

<tr style="padding: 1px;">
<td style="vertical-align: middle; width: 25%;"><b>Script</b>
</td>
<td style="vertical-align: middle; width: 10%;"><b>Implementation</b>
</td>
<td style="vertical-align: middle; width: *%;"><b>Description</b>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="https://launchpad.net/openbox-xdgmenu/+download">openbox-xdgmenu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>C
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Create an XDG menu</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:obam" title="Openbox:Pipemenus:obam">Openbox Application Menu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Perl
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Reads .desktop files from multiple directories to construct a flat menu. Useful if your system doesn't have working XDG or Debian menus.</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="http://rmoe.anukis.de/obamenu.html">obamenu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Automagically creates Openbox application menus by analyzing xdg information provided by desktop files.</i>
</p>
</td></tr></table>
<h2> <span class="mw-headline" id="Desktop_Environment_Integration"> Desktop Environment Integration </span></h2>
<table border="0" cellspacing="1" cellpadding="5" style="text-align: left; width: 100%;">

<tr style="padding: 1px;">
<td style="vertical-align: middle; width: 25%;"><b>Script</b>
</td>
<td style="vertical-align: middle; width: 10%;"><b>Implementation</b>
</td>
<td style="vertical-align: middle; width: *%;"><b>Description</b>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:gtk-bookmarks" title="Openbox:Pipemenus:gtk-bookmarks">gtk-bookmarks</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Bash
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Simple bash script to create a pipe menu from ~/.gtk-bookmarks by Mulberry</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="http://github.com/dbbolton/pipemenus/blob/master/thunar-bookmarks.pl">thunar-bookmarks</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Perl
</p>
</td>
<td style="vertical-align: middle;">
<p><i>A pipe menu that duplicates ~/.gtk-bookmarks (Nautilus, PCManFM, Thunar), by dbbolton</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle; width: 25%;">
<p><b><a rel="nofollow" class="external text" href="http://github.com/dbbolton/pipemenus/blob/master/dolphin-bookmarks.pl">dolphin-bookmarks</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Perl
</p>
</td>
<td style="vertical-align: middle;">
<p><i>A pipe menu that duplicates user-places.xbel (Dolphin, etc) by dbbolton</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:recentfilesxbel" title="Openbox:Pipemenus:recentfilesxbel">recentfilesxbel</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>UNIX sh
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Shows your recent documents using the newer xbel format. by davidbarr</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="{{site.baseurl}}/dist/pipemenus/bookmarks.py">rox-filer bookmarks</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Pipes the rox-filer bookmarks from ~/.config/rox..../bookmarks.xml into the Openbox menu. Running one opens the bookmark in rox-filer.</i>
</p>
</td></tr></table>
<h3> <span class="mw-headline" id="Personalisation">Personalisation</span></h3>
<p><span id="Background_Management"></span>
</p>
<table border="0" cellspacing="1" cellpadding="5" style="text-align: left; width: 100%;">

<tr style="padding: 1px;">
<td style="vertical-align: middle; width: 25%;"><b>Script</b>
</td>
<td style="vertical-align: middle; width: 10%;"><b>Implementation</b>
</td>
<td style="vertical-align: middle; width: *%;"><b>Description</b>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="http://www.gozer.org/my_stuff/c/c/ob3_theme.c">ob3_theme</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>C
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Openbox 3 theme changer by Mike Hokenson</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="http://www.gozer.org/programs/c/c/ob3_wall.c">ob3_wall</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>C
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Openbox 3 desktop wallpaper changer by Mike Hokenson</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;"><b><a rel="nofollow" class="external text" href="https://github.com/vapniks/ob-pipe-menus">show_ob_keybindings</a></b>
</td>
<td style="vertical-align: middle;">Python
</td>
<td style="vertical-align: middle;"><i>View/edit keybindings by Joe Bloggs</i>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:bmenu-1.0" title="Openbox:Pipemenus:bmenu-1.0">bmenu-1.0</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>A pipe menu which uses Feh to select the wallpaper from the chosen directory by Mulberry</i>
</p>
</td></tr></table>
<h2> <span class="mw-headline" id="Media_.26_Games"> Media &amp; Games </span></h2>
<table border="0" cellspacing="1" cellpadding="5" style="text-align: left; width: 100%;">

<tr style="padding: 1px;">
<td style="vertical-align: middle; width: 25%;"><b>Script</b>
</td>
<td style="vertical-align: middle; width: 10%;"><b>Implementation</b>
</td>
<td style="vertical-align: middle; width: *%;"><b>Description</b>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="https://github.com/Eli2/xmms2-OpenboxMenu">xmms2-OpenboxMenu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>xmms2 Pipe menu client</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:AudaciousControl" title="Openbox:Pipemenus:AudaciousControl">Audacious Control</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Bash
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Controls Audacious from a pipe menu by Matsuda Shinpei</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:Audacious_control_alternative" title="Openbox:Pipemenus:Audacious control alternative">Audacious Control (alternative)</a> </b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Perl
</p>
</td>
<td style="vertical-align: middle;">
<p><i>A menu to control Audacious. Uses a builtin client for Audacious and depends on wmctrl. By AaylaSecura</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:MPD_control" title="Openbox:Pipemenus:MPD control">MPD/MPC Control</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Perl
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Control MPD/MPC from a pipe menu. Depends on MPC and one of gtkdialog/matedialog/zenity. By AaylaSecura</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="http://www.gozer.org/programs/c/files/my_q3stat.c">my_q3stat</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>C
</p>
</td>
<td style="vertical-align: middle;">
<p><i>A script to query Quake 3 servers by Mike Hokenson</i>
</p>
</td></tr></table>
<h2> <span class="mw-headline" id="System_Integration"> System Integration </span></h2>
<table border="0" cellspacing="1" cellpadding="5" style="text-align: left; width: 100%;">

<tr style="padding: 1px;">
<td style="vertical-align: middle; width: 25%;"><b>Script</b>
</td>
<td style="vertical-align: middle; width: 10%;"><b>Implementation</b>
</td>
<td style="vertical-align: middle; width: *%;"><b>Description</b>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="{{site.baseurl}}/dist/pipemenus/ob-cpufreq-0.2.py">ob-cpufreq-0.2</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>See your CPU frequency by John McKnight</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="https://github.com/dbbolton/pipemenus/raw/master/ob-sysinfo.pl">ob-sysinfo</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Perl
</p>
</td>
<td style="vertical-align: middle;">
<p><i>A similar system information script written in Perl and easy to modify/extend by dbbolton</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:Date_Menu" title="Openbox:Pipemenus:Date Menu">date-menu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>UNIX sh
</p>
</td>
<td style="vertical-align: middle;">
<p><i>A simple date, time, and calendar.</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:obreboot" title="Openbox:Pipemenus:obreboot">Reboot Menu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Perl
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Allows you to reboot to the any of the options in your grub.conf.</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:battery" title="Openbox:Pipemenus:battery">battery</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Bash
</p>
</td>
<td style="vertical-align: middle;">
<p><i>A simple script to show acpi settings battery and temperature.</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:processes-python" title="Openbox:Pipemenus:processes-python">processes</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Reads out info from /proc and pipes it to a menu. Renice, kill or restart apps through the menu. Has a filter, so not all apps/daemons are shown in the menu. By Vlad George.</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="https://github.com/whiteinge/ob-randr">ob-randr</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Easily change resolution, rotation, scaling, panning, and other xrandr operations as well as quickly see the capabilities of connected displays.</i>
</p>
</td></tr></table>
<h3> <span class="mw-headline" id="Devices_.26_Files"> Devices &amp; Files </span></h3>
<table border="0" cellspacing="1" cellpadding="5" style="text-align: left; width: 100%;">

<tr style="padding: 1px;">
<td style="vertical-align: middle; width: 25%;"><b>Script</b>
</td>
<td style="vertical-align: middle; width: 10%;"><b>Implementation</b>
</td>
<td style="vertical-align: middle; width: *%;"><b>Description</b>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:mntmenu" title="Openbox:Pipemenus:mntmenu">mntmenu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Perl
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Pipe menu that parses /etc/fstab for user mountable filesystems and allows the user to mount them. By Matthew Fitzgibbons.</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:obdevicemenu" title="Openbox:Pipemenus:obdevicemenu">obdevicemenu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Bash
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Uses udisks to easily mount, unmount or eject removable devices. Extensive configuration allows notifications about success or failure of operation, &amp; modification of several other options. By Jamie Nguyen.</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:Dirsmenu" title="Openbox:Pipemenus:Dirsmenu">Directory Menu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Perl
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Pipe menu for recursive directory listings.</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="https://xyne.archlinux.ca/projects/obfilebrowser/">obfilebrowser</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Display files and directories and generates submenus with commands to open files with their associated applications. By Xyne</i>
</p>
</td></tr></table>
<h2> <span class="mw-headline" id="Miscellaneous"> Miscellaneous </span></h2>
<h3> <span class="mw-headline" id="Internet"> Internet </span></h3>
<table border="0" cellspacing="1" cellpadding="5" style="text-align: left; width: 100%;">

<tr style="padding: 1px;">
<td style="vertical-align: middle; width: 25%;"><b>Script</b>
</td>
<td style="vertical-align: middle; width: 10%;"><b>Implementation</b>
</td>
<td style="vertical-align: middle; width: *%;"><b>Description</b>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/User:Spoiledbroth/ob-chromium" title="User:Spoiledbroth/ob-chromium">Chromium bookmarks</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Perl
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Create a pipemenu of chromium/google-chrome bookmarks by Spoiledbroth</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:obm-mozilla" title="Openbox:Pipemenus:obm-mozilla">Firefox bookmarks</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Create a pipemenu of Firefox bookmarks by Manuel Colmenero.</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/Openbox:Pipemenus:feeder-python" title="Openbox:Pipemenus:feeder-python">feeder</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>A script to pipe RSS and Podcast feeds into the Openbox menu by Vlad George</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="https://bbs.archlinux.org/viewtopic.php?id=43432">Weather Pipe Menu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Shows the weather forecast of the city passed as argument.</i>
</p>
</td></tr></table>
<h3> <span class="mw-headline" id="Utilities"> Utilities </span></h3>
<table border="0" cellspacing="1" cellpadding="5" style="text-align: left; width: 100%;">

<tr style="padding: 1px;">
<td style="vertical-align: middle; width: 25%;"><b>Script</b>
</td>
<td style="vertical-align: middle; width: 10%;"><b>Implementation</b>
</td>
<td style="vertical-align: middle; width: *%;"><b>Description</b>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="https://github.com/vapniks/ob-pipe-menus/tree/master/clipboard_manager">clipboard_menu</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>Menu of recently copied text clips, selecting an item pastes it (requires parcellite or clipit) by Joe Bloggs</i>
</p>
</td></tr>
<tr style="background: #eee; padding: 1px;">
<td style="vertical-align: middle;">
<p><b><a rel="nofollow" class="external text" href="http://bitbucket.org/palobo/simpletasks/">Palobo's Openbox SimpleTasks Tasklist</a></b>
</p>
</td>
<td style="vertical-align: middle;">
<p>Python
</p>
</td>
<td style="vertical-align: middle;">
<p><i>A simple task list in the form of a pipe menu. Simple features are supported for the time being. Adding tasks. Clicking on a task renders it completed and is therefore removed from the list.</i>
</p>
</td></tr></table>
<h2> <span class="mw-headline" id="Script_collections"> Script collections </span></h2>
<ul><li> <a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/User:Baavgai" title="User:Baavgai">User:Baavgai</a>
</li><li> <a href="https://web.archive.org/web/20240318182250/http://openbox.org/wiki/User:Spoiledbroth" title="User:Spoiledbroth">User:Spoiledbroth</a>
</li></ul>
<h3> <span class="mw-headline" id="External_links"> External links </span></h3>
<ul><li> <a rel="nofollow" class="external text" href="https://wiki.archlinux.org/index.php/Openbox#Pipes">ArchWiki Openbox Pipes</a>
</li><li> <a rel="nofollow" class="external text" href="https://bbs.archlinux.org/search.php?action=search&amp;keywords=openbox+pipe+menu&amp;author=&amp;forums=27&amp;search_in=0&amp;sort_by=0&amp;sort_dir=DESC&amp;show_as=topics">Arch Linux Forums pipe menus</a>
</li><li> <a rel="nofollow" class="external text" href="http://zhar.net/projects/openbox/">zhar.net Openbox stuff</a>
</li><li> <a rel="nofollow" class="external text" href="http://david.chalkskeletons.com/scripts/">Mulberry's Openbox Pipe menu scripts</a>
</li><li> <a rel="nofollow" class="external text" href="http://obmenu.sourceforge.net/">Manuel Colmenero's Openbox Menu Editor</a> 
</li><li> <a rel="nofollow" class="external text" href="https://github.com/BunsenLabs/bunsen-pipemenus">BunsenLabs Pipe menus repository</a> 
</li><li> <a rel="nofollow" class="external text" href="https://github.com/antonio-malcolm/corgi-scripts">Antonio Malcolm's Corgi Scripts repository</a> 
</li><li> <a rel="nofollow" class="external text" href="http://dev.yeuxdelibad.net/coolrepo/Scripts/Openbox/">yeuxdelibad.net Openbox repo</a>
</li><li> <a rel="nofollow" class="external text" href="http://www.murga-linux.com/puppy/viewtopic.php?t=87588">Nathan F's obpipes</a>
</li></ul>
</div>
