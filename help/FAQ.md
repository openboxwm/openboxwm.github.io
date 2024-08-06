---
title: Help:FAQ
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:FAQ</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#How_do_I_set_my_desktop_background.3F"><span class="tocnumber">1</span> <span class="toctext">How do I set my desktop background?</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#How_do_I_put_my_desktops_into_a_grid_layout_instead_of_a_single_row.3F"><span class="tocnumber">2</span> <span class="toctext">How do I put my desktops into a grid layout instead of a single row?</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#What_is_this_dock_I_hear_so_much_about.3F"><span class="tocnumber">3</span> <span class="toctext">What is this dock I hear so much about?</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#Does_anyone_know_of_a_taskbar_that_works_well_with_openbox.3F"><span class="tocnumber">4</span> <span class="toctext">Does anyone know of a taskbar that works well with openbox?</span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#How_do_I_make_things_start_when_I_start_Openbox.3F"><span class="tocnumber">5</span> <span class="toctext">How do I make things start when I start Openbox?</span></a></li>
<li class="toclevel-1 tocsection-6"><a href="#How_do_I_run_SCIM_when_I_start_Openbox.3F"><span class="tocnumber">6</span> <span class="toctext">How do I run SCIM when I start Openbox?</span></a></li>
<li class="toclevel-1 tocsection-7"><a href="#How_do_I_make_my_dockapps_appear_in_order_when_I_start_Openbox.3F"><span class="tocnumber">7</span> <span class="toctext">How do I make my dockapps appear in order when I start Openbox?</span></a></li>
<li class="toclevel-1 tocsection-8"><a href="#I.27m_using_rxvt-unicode_or_aterm.2C_and_transparency_is_leaving_artifacts.21"><span class="tocnumber">8</span> <span class="toctext">I'm using rxvt-unicode or aterm, and transparency is leaving artifacts!</span></a></li>
<li class="toclevel-1 tocsection-9"><a href="#How_do_I_get_true_32-bit_transparent_windows.3F"><span class="tocnumber">9</span> <span class="toctext">How do I get true 32-bit transparent windows?</span></a></li>
<li class="toclevel-1 tocsection-10"><a href="#How_do_I_remove_the_decorations_from_all_my_windows.3F"><span class="tocnumber">10</span> <span class="toctext">How do I remove the decorations from all my windows?</span></a></li>
<li class="toclevel-1 tocsection-11"><a href="#Where_did_my_Debian_menu_go.3F"><span class="tocnumber">11</span> <span class="toctext">Where did my Debian menu go?</span></a></li>
<li class="toclevel-1 tocsection-12"><a href="#How_do_I_disable_the_popup_when_switching_desktops.3F"><span class="tocnumber">12</span> <span class="toctext">How do I disable the popup when switching desktops?</span></a></li>
<li class="toclevel-1 tocsection-13"><a href="#How_do_I_run_Openbox_across_multiple_X_screens.3F"><span class="tocnumber">13</span> <span class="toctext">How do I run Openbox across multiple X screens?</span></a></li>
<li class="toclevel-1 tocsection-14"><a href="#How_do_I_make_Tweetdeck.2FOther_Adobe_Air_apps_work_under_Openbox.3F"><span class="tocnumber">14</span> <span class="toctext">How do I make Tweetdeck/Other Adobe Air apps work under Openbox?</span></a></li>
</ul>
</td></tr></table>
<h2> <span class="mw-headline" id="How_do_I_set_my_desktop_background.3F"> How do I set my desktop background? </span></h2>
<p>The example in the <a href="Autostart" title="Help:Autostart"> autostart guide</a> sets the background to a solid color.
</p><p>You can use any number of programs to set your background.  A few commonly used programs are <a rel="nofollow" class="external text" href="http://www.xfree86.org/current/xsetroot.1.html">xsetroot</a> , <a rel="nofollow" class="external text" href="http://www.jnrowe.ukfsn.org/projects/esetroot.html">esetroot</a>, <a rel="nofollow" class="external text" href="http://thegraveyard.org/hsetroot.php">hsetroot</a> and <a rel="nofollow" class="external text" href="http://l3ib.org/nitrogen/">nitrogen</a>.  They each have their own set of features.  You can use any of these programs in your autostart to set your wallpaper when you log in.
</p><p>There are also <a href="{{site.baseurl}}/pipemenus#Background_Management" title="Openbox:Pipemenus">pipe menus</a> designed for choosing and setting your wallpaper.
</p>
<h2> <span class="mw-headline" id="How_do_I_put_my_desktops_into_a_grid_layout_instead_of_a_single_row.3F"> How do I put my desktops into a grid layout instead of a single row? </span></h2>
<p>Your pager is responsible for doing this, and communicates with Openbox to make sure they agree on it.
Any pager which complies with the EWMH specification should be able to do this. Examples are the gnome-panel pager and rox-pager.
</p><p>If your pager does not comply with the spec, or you don't use a pager, you can use <a rel="nofollow" class="external text" href="{{site.baseurl}}/dist/tools/setlayout.c">this small program</a> to set the layout at startup, for example setlayout 0 2 2 0 for a 2x2 grid.
</p>
<h2> <span class="mw-headline" id="What_is_this_dock_I_hear_so_much_about.3F"> What is this dock I hear so much about? </span></h2>
<p>The dock is where your dockapps go, if you don't have any, you don't need it. There are some dockapps available in linux distributions such as <a rel="nofollow" class="external text" href="https://wiki.archlinux.org/index.php/Window_Maker#Dockapps">wiki.archlinux.org/index.php/Window_Maker</a> for Arch. Or via thid parties such as <a rel="nofollow" class="external text" href="http://www.cs.mun.ca/~gstarkes/wmaker/dockapps/other.html">www.cs.mun.ca/~gstarkes/wmaker/dockapps/other.html</a>.
</p>
<h2> <span class="mw-headline" id="Does_anyone_know_of_a_taskbar_that_works_well_with_openbox.3F"> Does anyone know of a taskbar that works well with openbox? </span></h2>
<p>There are many taskbar/panels around. Some examples are: fbpanel, pypanel, perlpanel, xfce4-panel (from XFCE), gnome-panel (from GNOME) and kicker (from KDE).
</p><p>There are many programs <a href="Openbox-session" title="Help:Openbox-session">listed here</a> that you can use with Openbox, including taskbars and other things.
</p>
<h2> <span class="mw-headline" id="How_do_I_make_things_start_when_I_start_Openbox.3F"> How do I make things start when I start Openbox? </span></h2>
<p>If you are using a desktop environment - and therefore a session manager - you just need to save your session with the programs running.  GNOME and KDE's session managers also both provide a way to run things on startup that aren't a part of the session, see their documentation for details.
</p><p>If you run Openbox without a desktop environment and session manager, see the <a href="Autostart" title="Help:Autostart"> autostart guide</a>.
</p>
<h2> <span class="mw-headline" id="How_do_I_run_SCIM_when_I_start_Openbox.3F"> How do I run SCIM when I start Openbox? </span></h2>
<p>See the <a href="Autostart" title="Help:Autostart">autostart documentation</a> for details on how to do this and an example that launches SCIM.
</p>
<h2> <span class="mw-headline" id="How_do_I_make_my_dockapps_appear_in_order_when_I_start_Openbox.3F"> How do I make my dockapps appear in order when I start Openbox? </span></h2>
<p>You can use this in your <a href="Autostart" title="Help:Autostart">autostart file</a> to launch your dockapps and have them show up in the same order every time:
</p>
<code><pre>
DELAY=.75
APPS='/home/mwilson/bin/clock \
      /home/mwilson/bin/weather \
      /home/mwilson/bin/grabimage \
      /home/mwilson/bin/awmcpuload \
      /home/mwilson/bin/temp \
      /home/mwilson/bin/net \
      /home/mwilson/bin/i-net0 \
      /home/mwilson/bin/i-net1 \
      wmsysmon \
      wmix'
(for X in $APPS&#160;; do ($X &amp;)&#160;; sleep $DELAY&#160;; done) &amp;
</pre></code>
<p>Replace each of the commands in <code>APPS</code> with the dockapps you want to run, and they will appear in the dock in the order they are listed.  Take care of having a <code>\</code> at the end of each line, except for the last line.
</p>
<h2> <span class="mw-headline" id="I.27m_using_rxvt-unicode_or_aterm.2C_and_transparency_is_leaving_artifacts.21"> I'm using rxvt-unicode or aterm, and transparency is leaving artifacts! </span></h2>
<p>This will work in Openbox 3.4. If you are running an older version or have this problem with another wm, here's what to do:
By default these terminals use a transparency mode that only works by chance. They support a more proper one too. If you use aterm you have to give -sh 99 or -sh 101, with urxvt you have to give -tint white (ie in urxvt you can use -sh 100 and the proper mode). If this doesn't use the correct background image you have to use a background setting program that sets the correct hint, for example Hsetroot and Esetroot.
</p>
<h2> <span class="mw-headline" id="How_do_I_get_true_32-bit_transparent_windows.3F"> How do I get true 32-bit transparent windows? </span></h2>
<p>True 32-bit transparency is made possible through the Composite extension. You need to have this extension enabled in your Xserver. Use this command in a terminal to make sure it is enabled:
</p>
<code><pre>xdpyinfo|grep Composite</pre></code>
<p>It will list "Composite" if it is enabled.
</p><p>As well, you need to run a composite manager for applications to access the Composite extension. You can use the <code>xcompmgr</code> with a command like this:
</p>
<code><pre>xcompmgr -c -t-5 -l-5 -r4.2 -o.55 &amp;</pre></code>
<p>Run it without any arguments if you don't want any extras like drop shadows.
</p><p>You could put this command in your <a href="Autostart" title="Help:Autostart"> autostart file</a> to make it run automatically at log in.
</p><p>Lastly, you need an application which supports it, such as rxvt-unicode:
</p>
<code><pre>urxvt -depth 32 -fg white -bg rgba:0000/0000/0000/bbbb</pre></code>
<p>You can use the <code>transset</code> program to give transparency to any window, with a command such as this:
</p>
<code><pre>transset 0.8  # then click on the window you want to make transparent</pre></code>
<h2> <span class="mw-headline" id="How_do_I_remove_the_decorations_from_all_my_windows.3F"> How do I remove the decorations from all my windows? </span></h2>
<p>You can use the per-app settings to remove decorations from all your windows, or any group of them.  The per-app settings are in the &lt;applications&gt; section of your <code>~/.config/openbox/rc.xml</code> (or the system-wide <code>/etc/xdg/openbox/rc.xml</code>).
</p><p>Here is an example that would remove decorations from all of your windows except Firefox:
</p>
<code><pre>
&lt;applications&gt;

  &lt;!-- match all windows, and remove their decorations --&gt;
  &lt;application class=&quot;*&quot;&gt;
    &lt;decor&gt;no&lt;/decor&gt;
  &lt;/application&gt;

  &lt;!-- but give decorations back to Firefox --&gt;
  &lt;application name=&quot;Firefox*&quot;&gt;
    &lt;decor&gt;yes&lt;/decor&gt;
  &lt;/application&gt;

&lt;/applications&gt;
</pre></code>
<p>There is a more complicated example showing many of the things you can do with per-app settings in the <a href="Upgrading_to_3.4#Example_of_per-app_settings" title="Help:Upgrading to 3.4"> upgrading to 3.4 guide</a>.
</p>
<h2> <span class="mw-headline" id="Where_did_my_Debian_menu_go.3F"> Where did my Debian menu go? </span></h2>
<p>The short answer is: nowhere. If you previously had an official Debian Openbox .deb installed and saw the Debian Menu in the root menu, the files are all still present on your system. Openbox.org .debs and/or source installs don't include them in your root menu -- that's done by Debian developer magic. You can do it with a few simple steps in <a href="Menus#The_Debian_menu" title="Help:Menus"> these instructions</a>.
</p>
<h2> <span class="mw-headline" id="How_do_I_disable_the_popup_when_switching_desktops.3F"> How do I disable the popup when switching desktops? </span></h2>
<p>Please see the <a href="Upgrading_to_3.4#Desktop_cycling_dialog" title="Help:Upgrading to 3.4"> upgrading to 3.4 guide</a>.
</p>
<h2> <span class="mw-headline" id="How_do_I_run_Openbox_across_multiple_X_screens.3F"> How do I run Openbox across multiple X screens? </span></h2>
<p>In order to have Openbox manage multiple X screens (this is not the same as multi-monitor TwinView or Xinerama), you need to run an instance of Openbox directly on each screen.  We've put work into making Openbox work well with other instances of itself, for this type of configuration.
</p><p>In order to run Openbox on two screens, use commands such as these:
</p>
<code><pre>
# run openbox on the second screen (they start from 0)
DISPLAY=:0.1 openbox &amp;
# by default openbox will run on the first screen (screen number 0)
exec openbox-session
</pre></code>
<h2> <span class="mw-headline" id="How_do_I_make_Tweetdeck.2FOther_Adobe_Air_apps_work_under_Openbox.3F"> How do I make Tweetdeck/Other Adobe Air apps work under Openbox? </span></h2>
<p>Just put: 
</p>
<code><pre>
export GNOME_DESKTOP_SESSION_ID=&quot;openbox&quot;
</pre></code>
<p>in your autostart.sh or .xinitrc (the "openbox" part can be any word). You can then run tweetdeck/twhirl etc. without any problems, although you might needs some gnome keyring elements installed.
</p>
</div>
