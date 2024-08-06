---
title: News
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Openbox:News</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div style="float: right; width:18ex" class="menu">
<!--
<p><img alt="RSS.png" src="{{site.baseurl}}/assets/images/RSS.png" width="14" height="14"/> <a rel="nofollow" class="external text" href="rss/news">RSS feed</a>
</p><p><img alt="Cia.gif" src="{{site.baseurl}}/assets/images/Cia.gif" width="16" height="16"/> <a rel="nofollow" class="external text" href="http://cia.vc/stats/project/Openbox/">Commit log</a>
</p>
-->
</div>
<div class="news" style="margin-right:19ex">
<table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#.7FUNIQ549e90284ec65a51-item-1--QINU.7F"><span class="tocnumber">1</span> <span class="toctext">Openbox 3.4.11 released</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#.7FUNIQ549e90284ec65a51-item-4--QINU.7F"><span class="tocnumber">2</span> <span class="toctext">Openbox 3.4.10 released</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#.7FUNIQ549e90284ec65a51-item-7--QINU.7F"><span class="tocnumber">3</span> <span class="toctext">Openbox 3.4.9 released</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#.7FUNIQ549e90284ec65a51-item-10--QINU.7F"><span class="tocnumber">4</span> <span class="toctext">Openbox 3.4.8 released</span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#.7FUNIQ549e90284ec65a51-item-13--QINU.7F"><span class="tocnumber">5</span> <span class="toctext">Openbox 3.4.7.1 released</span></a></li>
<li class="toclevel-1 tocsection-6"><a href="#.7FUNIQ549e90284ec65a51-item-16--QINU.7F"><span class="tocnumber">6</span> <span class="toctext">Openbox 3.4.6.1 released</span></a></li>
<li class="toclevel-1 tocsection-7"><a href="#.7FUNIQ549e90284ec65a51-item-19--QINU.7F"><span class="tocnumber">7</span> <span class="toctext">Openbox 3.4.6 and ObConf 2.0.3 released</span></a></li>
<li class="toclevel-1 tocsection-8"><a href="#.7FUNIQ549e90284ec65a51-item-22--QINU.7F"><span class="tocnumber">8</span> <span class="toctext">Openbox 3.4.5 released</span></a></li>
<li class="toclevel-1 tocsection-9"><a href="#.7FUNIQ549e90284ec65a51-item-25--QINU.7F"><span class="tocnumber">9</span> <span class="toctext">Openbox 3.4.4 released</span></a></li>
<li class="toclevel-1 tocsection-10"><a href="#.7FUNIQ549e90284ec65a51-item-28--QINU.7F"><span class="tocnumber">10</span> <span class="toctext">Openbox 3.4.3 and ObConf 2.0.2 released</span></a></li>
</ul>
</td></tr></table>
<h2> <span class="mw-headline" id=".7FUNIQ549e90284ec65a51-item-1--QINU.7F"><a rel="nofollow" class="external text" href="#Openbox_3.4.11_released">Openbox 3.4.11 released</a></span></h2>
<div class="date">Feb 08, 2010 - 7:49 pm UTC</div>
<div class="description"><p>
<p>In case you're going to be bored this valentines day, we've made another Openbox 3.4 release, so you can spend your day with Openbox.
</p>
  </p><p>
<p>There are a number of bug fixes in this release, and continued improvements to menu behaviour.  The coolest thing however, is changes to the the focus cycling (Alt-Tab) dialog.  It is now dynamic as windows appear/disappear while focus cycling.  We've got some more really cool changes coming up for in in the 3.5 series as well so stay tuned for those.
</p>
  </p><p>
<p>As you may have noticed, we are also moving our web hosting to a new site, which is allowing us to use the openbox.org domain fully.  As such, the http://icculus.org/openbox site has moved to http://openbox.org since a few weeks ago.
</p>
  </p><p>
<p>You can see the full changelog here: <a href="{{site.url}}{{site.baseurl}}/changelog">{{site.url}}{{site.baseurl}}/changelog</a>
And download the latest before it hits youre distribution here: <a href="{{site.url}}{{site.baseurl}}/download">{{site.url}}{{site.baseurl}}/download</a>
</p>
  </p></div>
<h2> <span class="mw-headline" id=".7FUNIQ549e90284ec65a51-item-4--QINU.7F"><a rel="nofollow" class="external text" href="#Openbox_3.4.10_released">Openbox 3.4.10 released</a></span></h2>
<div class="date">Jan 30, 2010 - 1:46 pm UTC</div>
<div class="description"><p>
<p>We just can't get enough of the Openbox 3.4 series.  Today we're happy to release version Openbox 3.4.10.
</p>
  </p><p>
<p>This is a minor bugfix + new features release, mostly focused on Openbox menu behaviours.  Here's the complete changelog:
</p>
  </p><p>
    <ul>
    <li>Improve keyboard navigation in Openbox menus.
    </li>
    <li>Add a --root option and a manpage for obxprop.
    </li>
    <li>Use a negative value for submenuShowDelay and submenuHideDelay to cause an infinite delay.  This means you have to click to show a submenu, rather than just hover over it.
    </li>
    <li>Improved code for submenu show/hide delay.  Added the submenuHideDelay config file option, under the "menu" section.
    </li>
    <li>Fixed bug #4464 (Typo in openbox-gnome-session script).
    </li>
    <li>Fixed bug #4436 (Focusing a window used to stop focus cycling).
    </li>
    <li>Renamed obprop to obxprop due to collision with Open Babel (See bug #4419).
    </li>
    </ul>
  </p><p>
<p>You can download the new release from here:
<a href="{{site.url}}{{site.baseurl}}/download">{{site.url}}{{site.baseurl}}/download</a>
</p>
  </p><p>
<p>p.s. Happy new year&#160;!
</p>
  </p></div>
<h2> <span class="mw-headline" id=".7FUNIQ549e90284ec65a51-item-7--QINU.7F"><a rel="nofollow" class="external text" href="#Openbox_3.4.9_released">Openbox 3.4.9 released</a></span></h2>
<div class="date">Dec 18, 2009 - 4:21 pm UTC</div>
<div class="description"><p>
<p>I present to you all Openbox version 3.4.9.
</p>
  </p><p>
<p>You can view all the detailed changes here:
<a href="{{site.url}}{{site.baseurl}}/download#3.4.9">{{site.url}}{{site.baseurl}}/download#3.4.9</a>
and download it from here:
<a href="{{site.url}}{{site.baseurl}}/download">{{site.url}}{{site.baseurl}}/download</a>
</p>
  </p><p>
<p>This release is expected to be the last of the 3.4 series, with some forward-looking changes coming in future releases.
</p>
  </p><p>
<p>We've improved interoperability with gnome-session so that GNOME/Openbox should work correcly "out of the box" on newer distributions again.
</p>
  </p><p>
<p>I got a second monitor, and so ended up spending a lot of time improving behaviour for multi-monitor setups.  This culminated in the primaryMonitor option in the rc.xml config file.  This option dictates where Openbox will show popups such as the one for cycling windows with Alt-Tab.
</p>
  </p><p>
<p>We've added _OB_ROLE, _OB_NAME, and _OB_CLASS hints on all windows, to help with making application rules in the rc.xml.  Also, we've added a new "obprop" command to help you read these properties off of a window.
</p>
  </p><p>
<p>And lastly, Openbox menus should be a little more friendly now, as submenus do not hide immediately anymore, allowing you to skip across items in a menu in order to reach the submenu.
</p>
  </p><p>
<p>Thank you to all the users who gave feedback in bug reports and tested things.  You all helped a lot in making this release.
</p>
  </p><p>
<p>Happy holidays, and happy Openboxing.
</p>
  </p><p>
  </p></div>
<h2> <span class="mw-headline" id=".7FUNIQ549e90284ec65a51-item-10--QINU.7F"><a rel="nofollow" class="external text" href="#Openbox_3.4.8_released">Openbox 3.4.8 released</a></span></h2>
<div class="date">Dec 08, 2009 - 9:04 pm UTC</div>
<div class="description"><p>
<p>It's been a while but we're pleased to announce a new Openbox release.
</p>
  </p><p>
<p>You can view all the detailed changes here:
<a href="{{site.url}}{{site.baseurl}}/changelog#3.4.8">{{site.url}}{{site.baseurl}}/changelog#3.4.8</a>
and download it from here:
<a href="{{site.url}}{{site.baseurl}}/download">{{site.url}}{{site.baseurl}}/download</a>
</p>
  </p><p>
<p>Largely this release fixes bugs reported by users, especially in terms of focusing new windows, or through the _NET_ACTIVE_WINDOW message used by pagers/panels etc.
</p>
  </p><p>
<p>GNOME/Openbox (aka openbox-gnome-session) should work out of the box again, with newer versions (&gt; 2.22) of GNOME.
</p>
  </p><p>
<p>Many translations have been updated, and three new translations are now included: Danish, Turkish, and Lithuanian.  (Thank you, translators!)
</p>
  </p><p>
<p>Google Chrome will now work correctly when you toggle it between using system borders or its own.
</p>
  </p><p>
<p>Struts with multiple monitors should work better now.  More changes will come, pending some discussion in the wm-spec mailing list.  We're working to make struts/panels as flexible as possible with multiple monitors.
</p>
  </p><p>
<p>We've added support for clicking through shaped windows.
</p>
  </p><p>
<p>We no longer will try hard to prevent focus from moving while a keyboard grab is in place.  In practice this should help make fewer surprises for our users, but may cause buggy applications to track their focus incorrectly.  We're hoping that the buggy apps are in the minority by this point.
</p>
  </p><p>
<p>And lastly, the Exit and SessionLogout actions have similar functionality, so we've decided to merge them together.  Both actions still exist but they both do the right thing based on how you are running Openbox.
</p>
  </p><p>
<p>Cheers.
</p>
  </p><p>
  </p><p>
  </p><p>
  </p></div>
<h2> <span class="mw-headline" id=".7FUNIQ549e90284ec65a51-item-13--QINU.7F"><a rel="nofollow" class="external text" href="#Openbox_3.4.7.1_released">Openbox 3.4.7.1 released</a></span></h2>
<div class="date">Apr 17, 2008 - 3:27 pm UTC</div>
<div class="description"><p>
<p>After three pre-releases I made some last minute breaking and released 3.4.7, soon after which I did some last minute unbreaking and released 3.4.7.1.
</p>
  </p><p>
<p>You can view all the detailed changes here:
<a href="{{site.url}}{{site.baseurl}}/changelog#3.4.7.1">{{site.url}}{{site.baseurl}}/changelog#3.4.7.1</a>
and download it from here:
<a href="{{site.url}}{{site.baseurl}}/download">{{site.url}}{{site.baseurl}}/download</a>
</p>
  </p><p>
<p>The change which I suspect will cause us the most trouble is that _NET_ACTIVE_WINDOW now shows the window on the current desktop, so pagers/panels should send a desktop change message first.  Probably some of them don't and people will send bug reports. Send them to the pager/panel author instead please&#160;:).
</p>
  </p><p>
<p>Other user noticable changes include a new default window icon and prompt windows that openbox will show on syntax errors. They can also be used to ask for confirmation before exiting or running an execute action.
</p>
  </p><p>
<p>The default menu.xml file has been updated to be a bit more sensible and hopefully includes more useful items now than before. Menus got some more theme settings too, you can now customize the look of separator lines, and the offset of submenus in the x- and y-dimension separately.
</p>
  </p><p>
<p>On the backend side, the Vertical, SplitVertical, Horizontal and Pyramid gradients got some speed impromevents, and an icon cache was introduced to reduce memory usage. Lots of small bugs were also fixed.
</p>
  </p><p>
<p>Have fun!
</p>
  </p><p>
  </p></div>
<h2> <span class="mw-headline" id=".7FUNIQ549e90284ec65a51-item-16--QINU.7F"><a rel="nofollow" class="external text" href="#Openbox_3.4.6.1_released">Openbox 3.4.6.1 released</a></span></h2>
<div class="date">Feb 06, 2008 - 4:50 am UTC</div>
<div class="description"><p>
<p>Openbox 3.4.6.1 has been released.  This is a small bug-fix release that fixes a number of issues found in version 3.4.6.
</p>
  </p><p>
<p>It also includes updates to the new Clearlooks theme, which improve the visual look of any openbox popup dialogs.
</p>
  </p><p>
<p>Two small new features have found their way into this release as well:
</p>
  </p><p>
<p>A new &lt;manageDesktops&gt; option in the menu portion of rc.xml, which allows you to enable or disable the "Manage Desktops" portion of the combined-client-list-menu (Middle-click on the desktop)
</p>
  </p><p>
<p>For per-app settings, the &lt;position&gt; tag has a new attribute called "force", which lets you force a window to be positioned at the given coordinates, even if it says you asked it to go somewhere else.  This gives you a way to work around buggy applications that always place themselves awkwardly without any option to do otherwise.
</p>
  </p><p>
<p>An example of this is:
</p>
<pre> &lt;position force="yes"&gt;
   &lt;x&gt;-0&lt;/x&gt;
   &lt;y&gt;0&lt;/y&gt;
 &lt;/position&gt;
</pre>
  </p><p>
<p>The full changelog is here: <a href="{{site.url}}{{site.baseurl}}/changelog#3.4.6.1">{{site.url}}{{site.baseurl}}/changelog#3.4.6.1</a>
</p>
  </p><p>
<p>And downloads are available here: <a href="{{site.url}}{{site.baseurl}}/download">{{site.url}}{{site.baseurl}}/download</a>
</p>
  </p><p>
<p>Cheers!
</p>
  </p></div>
<h2> <span class="mw-headline" id=".7FUNIQ549e90284ec65a51-item-19--QINU.7F"><a rel="nofollow" class="external text" href="#Openbox_3.4.6_and_ObConf_2.0.3_released">Openbox 3.4.6 and ObConf 2.0.3 released</a></span></h2>
<div class="date">Feb 02, 2008 - 5:53 pm UTC</div>
<div class="description"><p>
<p>Openbox 3.4.6 and ObConf 2.0.3 have been released for mass consumption!
</p>
  </p><p>
<p>This Openbox release introduces a new look!  The Clearlooks theme has been updated to match the latest GTK Clearlooks engine.  As well Openbox and ObConf are both sporting shiny new icons.
</p>
  </p><p>
<p>Translations have been updated for both Openbox and ObConf, as well as some new ones, including:
</p>
    <ul>
    <li>New Basque translation for Openbox
    </li>
    <li>New Norwegian translation for ObConf
    </li>
    <li>New Turkish translation for ObConf
    </li>
    </ul>
  </p><p>
<p>Also included in this Openbox release are a number of new features:
</p>
    <ul>
    <li>The "NextWindow", "PreviousWindow", and "DirectionalFocus*" actions have two new options: "raise" and "bar".  The "raise" option will temporarily raise windows to the front of the screenas you cycle through them, and the "bar" option allows you to turn off the focus cycling target indicator.  These options are described in the documentation here: http://icculus.org/openbox/index.php/Help:Actions#NextWindow
    </li>
    <li>A new &lt;monitor&gt; option for window placement, which gives you the option to place new windows on the active monitor, or the monitor where the mouse is, instead of on any monitor (for Xinerama/TwinView multi-monitor setups) 
    </li>
    <li>New options for placing the window move/resize coordinates window in a fixed position on screen, rather than relative to the window being moved or resized 
    </li>
    <li>Application windows which support the appropriate protocols will now show [Not Responding] in their titlebars when the application has frozen up.  By closing the window while the [Not Responding] message is visible, Openbox will kill the window's process, allowing you to kill frozen applications without dropping to the command line.  If the window still won't close after the first try, a further close attempt will use kill -9.
    </li>
    <li>We added a new &lt;wmclass&gt; option for the execute action's startup-notification. This lets you tell Openbox that the application will map a window with the specified class - for applications that do not support startup-notification natively. This new option is desribed in the documentation here: http://icculus.org/openbox/index.php/Help:Actions#Startup_notification
    </li>
    <li>A new --config-file command line option, which can be used to load an alternate configuration file.  ObConf 2.0.3 will automatically open the same configuration file.
    </li>
    </ul>
  </p><p>
<p>For Openbox 3.4.6, we have also made a large number of usability improvements under the hood, especially for Xinerama/TwinView desktops, and fixed a number of bugs.
</p>
  </p><p>
<p>The ObConf 2.0.3 release has a whole new look, with the tabs moved over to the side of the window.  This release adds support for all of the latest features introduced in Openbox 3.4.4, 3.4.5, and 3.4.6.
</p>
  </p><p>
<p>Full changelogs can be found here:
</p>
  </p><p>
<p>Openbox - <a href="{{site.url}}{{site.baseurl}}/changelog#3.4.6">{{site.url}}{{site.baseurl}}/changelog#3.4.6</a>
</p>
  </p><p>
<p>ObConf - <a href="{{site.url}}/obconf_changelog#2.0.3">{{site.url}}/obconf_changelog#2.0.3</a>
</p>
  </p><p>
<p>Downloads are available from the website:
<a href="{{site.url}}{{site.baseurl}}/download">{{site.url}}{{site.baseurl}}/download</a>
</p>
  </p></div>
<h2> <span class="mw-headline" id=".7FUNIQ549e90284ec65a51-item-22--QINU.7F"><a rel="nofollow" class="external text" href="#Openbox_3.4.5_released">Openbox 3.4.5 released</a></span></h2>
<div class="date">Jan 06, 2008 - 3:13 pm UTC</div>
<div class="description"><p>
<p>Openbox 3.4.5 released.
</p>
  </p><p>
<p>This release fixes some very minor memory leaks, updates Finnish, Russian, German and French translations, adds a new Hungarian translation, fixes a crash when trying to access the More... menu of client-list-combined-menu and some minor bug fixes.
</p>
  </p><p>
<p>Downloads are available from the website: <a href="{{site.url}}{{site.baseurl}}/download">{{site.url}}{{site.baseurl}}/download</a>
</p>
  </p></div>
<h2> <span class="mw-headline" id=".7FUNIQ549e90284ec65a51-item-25--QINU.7F"><a rel="nofollow" class="external text" href="#Openbox_3.4.4_released">Openbox 3.4.4 released</a></span></h2>
<div class="date">Aug 04, 2007 - 10:14 pm UTC</div>
<div class="description"><p>
<p>Openbox 3.4.4 is ready for action.
</p>
  </p><p>
<p>This release largely focuses on bug-fixes, with a few brand new things:
</p>
    <ul>
    <li>The vertical and horizontal padding sizes can now be specified independently in themes (See http://icculus.org/openbox/index.php/Help:Themes#window.client.padding.height)
    </li>
    <li>A notification is now displayed when you switch desktops, similar to the old desktop switching dialog.  You can configure how long it appears for, or turn it off if you want.  This option will be presented in the next ObConf release.
    </li>
    <li>New focus stealing prevention that doesn't suck.  It seemed like it couldn't be done, but now focus stealing prevention should only trigger if you are actually, actively, working in another window.
    </li>
    </ul>
  </p><p>
<p>On top of these, a large number of bug fixes and usability improvements have been added.  You can read the full changelog here: <a href="{{site.url}}{{site.baseurl}}/changelog#3.4.4">{{site.url}}{{site.baseurl}}/changelog#3.4.4</a>
</p>
  </p><p>
<p>Downloads are available from the website: <a href="{{site.url}}{{site.baseurl}}/download">{{site.url}}{{site.baseurl}}/download</a>
</p>
  </p></div>
<h2> <span class="mw-headline" id=".7FUNIQ549e90284ec65a51-item-28--QINU.7F"><a rel="nofollow" class="external text" href="#Openbox_3.4.3_and_ObConf_2.0.2_released">Openbox 3.4.3 and ObConf 2.0.2 released</a></span></h2>
<div class="date">Jul 22, 2007 - 3:31 pm UTC</div>
<div class="description"><p>
<p>Introducing the one and only fantabulous Openbox 3.4.3!
</p>
  </p><p>
<p>It's been just over a month since 3.4.2 was released, and we have a whole lot of new things for you all.
</p>
  </p><p>
<p>The full changelog is available on the website, here: http://openbox.org/index.php/Openbox:Changelog#3.4.3
</p>
  </p><p>
<p>It's a little bit long so we'll highlight some of the important stuff.  This might get long too.
</p>
  </p><p>
<p>First off, Openbox has now been translated to Ukrainian.  We now have Openbox available in 24 different languages/localizations!
</p>
  </p><p>
<p>New actions for what we're calling "dynamic desktops".  These actions let you add and remove desktops with actions.  What's especially new and interesting is the ability to insert and remove desktops in the middle instead of only at the end.  So if you want a new Desktop 2, you can just insert one, and all your other desktops will shuffle down one. These actions are AddDesktopLast, RemoveDesktopLast, AddDesktopCurrent, RemoveDesktopCurrent.  They are all listed on the website: http://openbox.org/index.php/Help:Actions
</p>
  </p><p>
<p>The client list menus (Middle click on the desktop background) have new entries for adding and removing desktops.
</p>
  </p><p>
<p>Smart window placement now comes with a "center" option, to have it center windows when it is placing them, rather than putting them in the top left corner.  ObConf 2.0.2 will let you change this option.
</p>
  </p><p>
<p>The new MoveResizeTo action.  This action lets you move or resize a window, and is very Xinerama-aware.  You can use it to move a window to any specific monitor.  As well, you can use it to move a window to any edge of any monitor!  See the documentation for details on how to use it: http://openbox.org/index.php/Help:Actions#MoveResizeTo
</p>
  </p><p>
<p>Windows will no longer be focused when they raise themselves.  This was a nice idea but it caused a lot of headaches for people, so it will no longer be there.
</p>
  </p><p>
<p>The MoveFromEdge actions have been rolled into the MoveToEdge actions, so you don't need two sets of bindings to move a window to any edge.
</p>
  </p><p>
<p>Themes can now specify all 4 colors used for SplitVertical gradients if they wish to.  See the theme specification for details: http://openbox.org/index.php/Help:Themes#SplitVertical_gradients
</p>
  </p><p>
<p>Openbox is now extremely clever with regard to partial struts.  This means, for instance, if you have a panal that doesn't cover the whole bottom of you screen, you will be able to fully use the areas to the sides of the panel.  This is especially important for Xinerama setups, where you have a panel that is on only one monitor.  Maximizing a window on a monitor without a panel will now work as expected - it can ignore the panel on the other monitor.
</p>
  </p><p>
<p>The MoveToCenter action has been improved for Xinerama support, but has been obsoleted by the MoveResizeTo action which can do this and more.  It will likely be removed in a future release.
</p>
  </p><p>
<p>A few deprecated actions have been removed:
</p>
    <ul>
    <li>ShowDesktop and UnshowDesktop (Use ToggleShowDesktop instead)
    </li>
    <li>ResizeRelativeVert and ResizeRelativeHorz (Use ResizeRelative instead)
    </li>
    </ul>
  </p><p>
<p>You can now drag a window between desktops.  When you are moving a window and drag it to the edge of the screen, Openbox will flip to the next desktop for you.
</p>
  </p><p>
<p>The desktop switching dialog has been removed in this release.  Many people were confused that Openbox didn't switch desktops instantly.  We'd like to find a way to bring the dialog back, maybe in a new form, in the future.
</p>
  </p><p>
<p>The DirectionalFocus actions have been changed.  You can now make intereactive actions that don't use a modifier key.  So if you used these actions in a non-interactive way, they will no longer behave as they used to.  The DirectionalTarget actions have been added which let you move focus in the same fashion, but non-interactively (i.e. it moves as soon as you run the action).
</p>
  </p><p>
<p>The NextWindow, PreviousWindow, DirectionalFocus and DirectionalTarget actions can now be customized if you don't like their default behavior.  By default, these actions will Focus, Raise, and Unshade the window you select with them.  Now, you can use the &lt;finalactions&gt; option to specify which actions you'd like to perform.  You can add more actions that the default 3 if you'd like to, or maybe just not have the window raise anymore.  See the documentation for mroe details on how to do this: http://openbox.org/index.php/Help:Actions#NextWindow
</p>
  </p><p>
<p>Keyboard moving has been greatly improved.  Now when moving a window with the keyboard, you can use Shift and Control to change how the window is moved:
</p>
    <ul>
    <li>Control-arrow will move the window by only 1 pixel at a time
    </li>
    <li>Shift-arrow will jump the window to the next edge (just as the MoveToEdge actions work).
    </li>
    </ul>
  </p><p>
<p>Keyboard resizing has also been greatly improved.  You can now resize any edge of a window instead of only the bottom/right edges:
</p>
    <ul>
    <li>The first arrow will choose an edge to resize (then you can grow or shrink the window on that edge)
    </li>
    <li>Hitting an arrow perpendicular to your selected edge will choose a different edge to resize
    </li>
    <li>Shift-arrow will grow/shrink the window to the next edge (just as GrowToEdge actions work)
    </li>
    <li>Control arrow will grow/shrink the window by only 1 pixel
    </li>
    </ul>
  </p><p>
<p>You can now specify the shortcut keys in your menus, instead of just using the first letter in the string.  Use an underscore to specify the shortcut in the label.  For example, label="XTe_rm" would make 'r' the shortcut key to run XTerm in your menu.
</p>
  </p><p>
<p>You can now specify margins in the Openbox config file.  These margins are areas of the screen which maximized windows will not cover, and where new windows will not be placed.  Use these if you want to keep a portion of your desktop background visible all the time - for instance, if you run Conky and want to always be able to see it.  ObConf 2.0.2 will let you configure these.
</p>
  </p><p>
<p>The Execute action has changed a little.  You can now specify the command to be run with the &lt;command&gt; option.  The default bindings and menu have been changed to use this.  However, the old &lt;execute&gt; option will still work too.
</p>
  </p><p>
<p>The Decorate and Undecorate actions have been added to compliment the ToggleDecorations action.
</p>
  </p><p>
<p>You can now use per-app settings to place a window on any edge of the screen.  The position options take values similar to -geometry for X applications.  "-n" uses the far edge, "+n" uses the near edge, so for example &lt;position&gt;&lt;x&gt;-0&lt;/x&gt;&lt;y&gt;-0&lt;/y&gt;&lt;/position&gt; would place the window in the bottom right corner.  You can use "--n" and "+-n" to specify negative numbers.
</p>
  </p><p>
<p>---------------------------------------
</p>
  </p><p>
<p>Along with this release comes ObConf 2.0.2, which includes bug fixes and support for the latest features added in Openbox 3.4.3.  This release also upgrades ObConf to the Openbox 3.4.3 libraries, and you will need to upgrade in order to use ObConf with Openbox 3.4.3.
</p>
  </p><p>
<p>The full changelog for ObConf 2.0.2 is available here: <a href="{{site.url}}/obconf_changelog#2.0.2">{{site.url}}/obconf_changelog#2.0.2</a>
</p>
  </p><p>
<p>---------------------------------------
</p>
  </p><p>
<p>You can download the new Openbox and ObConf releases from the Openbox website: <a href="{{site.url}}{{site.baseurl}}/download">{{site.url}}{{site.baseurl}}/download</a>
</p>
  </p><p>
<p>Cheers!
</p>
  </p></div>
</div>
</div>
