---
title: Help:Contents
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Contents</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr">

<p>
Welcome to the community maintained documentation for Openbox! Please help out and add your own articles or improve the ones that are already here.
</p>
<p>
To make changes: fork, make changes, and submit a Pull Request to the <a href="http://github.com/openboxwm/openboxwm.github.io" class="external text">http://github.com/openboxwm/openboxwm.github.io</a> repository. Modify or add new articles under the <code>help/</code> directory. This website used to be maintained as a wiki, but it has since moved to a git repository.
</p>

<table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#rc.xml"><span class="tocnumber">1</span> <span class="toctext">rc.xml</span></a>
<ul>
<li class="toclevel-2 tocsection-2"><a href="#Configuration"><span class="tocnumber">1.1</span> <span class="toctext">Configuration</span></a></li>
<li class="toclevel-2 tocsection-3"><a href="#Application_settings"><span class="tocnumber">1.2</span> <span class="toctext">Application settings</span></a></li>
<li class="toclevel-2 tocsection-4"><a href="#Mouse_.26_keybindings"><span class="tocnumber">1.3</span> <span class="toctext">Mouse &amp; keybindings</span></a>
<ul>
<li class="toclevel-3 tocsection-5"><a href="#Binding_documentation"><span class="tocnumber">1.3.1</span> <span class="toctext">Binding documentation</span></a></li>
<li class="toclevel-3 tocsection-6"><a href="#Actions"><span class="tocnumber">1.3.2</span> <span class="toctext">Actions</span></a></li>
</ul>
</li>
</ul>
</li>
<li class="toclevel-1 tocsection-7"><a href="#Menus"><span class="tocnumber">2</span> <span class="toctext">Menus</span></a>
<ul>
<li class="toclevel-2 tocsection-8"><a href="#Menu_documentation"><span class="tocnumber">2.1</span> <span class="toctext">Menu documentation</span></a></li>
<li class="toclevel-2 tocsection-9"><a href="#Actions_2"><span class="tocnumber">2.2</span> <span class="toctext">Actions</span></a></li>
<li class="toclevel-2 tocsection-10"><a href="#Pipe_menus"><span class="tocnumber">2.3</span> <span class="toctext">Pipe menus</span></a></li>
<li class="toclevel-2 tocsection-11"><a href="#Generating_an_applications_menu"><span class="tocnumber">2.4</span> <span class="toctext">Generating an applications menu</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-12"><a href="#Themes"><span class="tocnumber">3</span> <span class="toctext">Themes</span></a>
<ul>
<li class="toclevel-2 tocsection-13"><a href="#Theme_specification"><span class="tocnumber">3.1</span> <span class="toctext">Theme specification</span></a></li>
<li class="toclevel-2 tocsection-14"><a href="#Openbox_3.4_theme_file_changes"><span class="tocnumber">3.2</span> <span class="toctext">Openbox 3.4 theme file changes</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-15"><a href="#Desktop_Environments"><span class="tocnumber">4</span> <span class="toctext">Desktop Environments</span></a>
<ul>
<li class="toclevel-2 tocsection-16"><a href="#Openbox_in_GNOME"><span class="tocnumber">4.1</span> <span class="toctext">Openbox in GNOME</span></a></li>
<li class="toclevel-2 tocsection-17"><a href="#Openbox_in_KDE"><span class="tocnumber">4.2</span> <span class="toctext">Openbox in KDE</span></a></li>
<li class="toclevel-2 tocsection-18"><a href="#Openbox_in_XFCE"><span class="tocnumber">4.3</span> <span class="toctext">Openbox in XFCE</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-19"><a href="#Custom_Desktop_Environments"><span class="tocnumber">5</span> <span class="toctext">Custom Desktop Environments</span></a>
<ul>
<li class="toclevel-2 tocsection-20"><a href="#openbox-session"><span class="tocnumber">5.1</span> <span class="toctext">openbox-session</span></a></li>
<li class="toclevel-2 tocsection-21"><a href="#Autostart"><span class="tocnumber">5.2</span> <span class="toctext">Autostart</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-22"><a href="#Miscellaneous"><span class="tocnumber">6</span> <span class="toctext">Miscellaneous</span></a>
<ul>
<li class="toclevel-2 tocsection-23"><a href="#rc.xml_Configuration_examples"><span class="tocnumber">6.1</span> <span class="toctext">rc.xml Configuration examples</span></a></li>
<li class="toclevel-2 tocsection-24"><a href="#Feature_list"><span class="tocnumber">6.2</span> <span class="toctext">Feature list</span></a></li>
<li class="toclevel-2 tocsection-25"><a href="#Frequently_asked_questions"><span class="tocnumber">6.3</span> <span class="toctext">Frequently asked questions</span></a></li>
<li class="toclevel-2 tocsection-26"><a href="#Compiling_from_source"><span class="tocnumber">6.4</span> <span class="toctext">Compiling from source</span></a></li>
<li class="toclevel-2 tocsection-27"><a href="#Using_Git"><span class="tocnumber">6.5</span> <span class="toctext">Using Git</span></a></li>
<li class="toclevel-2 tocsection-28"><a href="#ObConf"><span class="tocnumber">6.6</span> <span class="toctext">ObConf</span></a></li>
<li class="toclevel-2 tocsection-29"><a href="#Upgrading_to_3.4"><span class="tocnumber">6.7</span> <span class="toctext">Upgrading to 3.4</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-30"><a href="#Other_resources"><span class="tocnumber">7</span> <span class="toctext">Other resources</span></a></li>
</ul>
</td></tr></table>
<h2> <span class="mw-headline" id="rc.xml">rc.xml</span></h2>
<h3> <span class="mw-headline" id="Configuration"><a href="Configuration" title="Help:Configuration">Configuration</a></span></h3>
<ul><li>The configuration documentation has details on the various options you can set in <i>rc.xml</i>.
</li></ul>
<h3> <span class="mw-headline" id="Application_settings"><a href="Applications" title="Help:Applications"> Application settings</a></span></h3>
<ul><li>Customize properties such as borders, geometry, workspace presence, layering etc. on a per-application basis.
</li></ul>
<h3> <span class="mw-headline" id="Mouse_.26_keybindings"> Mouse &amp; keybindings </span></h3>
<h4> <span class="mw-headline" id="Binding_documentation"><a href="Bindings" title="Help:Bindings"> Binding documentation</a></span></h4>
<ul><li>Improve productivity and customize the function of your desktop by binding actions to key/mouse buttons (commonly called hot keys).
</li></ul>
<h4> <span class="mw-headline" id="Actions"><a href="Actions" title="Help:Actions"> Actions</a></span></h4>
<ul><li>Comprehensive documentation of all actions available for key and mouse bindings and the options which can affect their behavior.
</li></ul>
<h2> <span class="mw-headline" id="Menus"> Menus </span></h2>
<h3> <span class="mw-headline" id="Menu_documentation"> <a href="Menus" title="Help:Menus">Menu documentation</a></span></h3>
<ul><li>Describes how to set up your own menus in Openbox.
</li></ul>
<h3> <span class="mw-headline" id="Actions_2"><a href="Actions#Introduction" title="Help:Actions">Actions</a></span></h3>
<ul><li>The actions documentation lists all of the actions available for use in Openbox menus.
</li></ul>
<h3> <span class="mw-headline" id="Pipe_menus"><a href="Menus#Pipe_menus" title="Help:Menus">Pipe menus</a></span></h3>
<ul><li>The pipe menu documentation explains basic use of pipe menus in Openbox. If you're looking for scripts there are many available <a href="{{site.baseurl}}/pipemenus" title="Openbox:Pipemenus">on the community page</a>.
</li></ul>
<h3> <span class="mw-headline" id="Generating_an_applications_menu">Generating an applications menu</span></h3>
<ul><li>Scripts may be used to generate an application menu based on the contents of <code>/usr/share/applications</code> or other directories. See <a href="{{site.baseurl}}/pipemenus#Application_Menus" title="Openbox:Pipemenus">this section</a> for a complete list. 
</li><li>There are also instructions available for getting a <a href="Debian-menu" title="Help:Menus/Debian-menu">working Debian menu</a>, if yours is not.
</li></ul>
<h2> <span class="mw-headline" id="Themes"> Themes </span></h2>
<h3> <span class="mw-headline" id="Theme_specification"><a href="Themes" title="Help:Themes">Theme specification</a></span></h3>
<ul><li>Comprehensive detail and documentation all of the elements found in an Openbox theme.
</li></ul>
<h3> <span class="mw-headline" id="Openbox_3.4_theme_file_changes"><a href="Upgrading_to_3.4#Themes" title="Help:Upgrading to 3.4">Openbox 3.4 theme file changes</a></span></h3>
<ul><li>Details differences between 3.3-&gt;3.4 theme files
</li><li>A tool to help with <a rel="nofollow" class="external text" href="{{site.baseurl}}/dist/tools/themeupdate.py">converting blackbox/fluxbox themes</a> to Openbox themes. (For non-xpm-based themes.)
</li></ul>
<h2> <span class="mw-headline" id="Desktop_Environments"> Desktop Environments </span></h2>
<h3> <span class="mw-headline" id="Openbox_in_GNOME"> <a href="Using_Openbox_in_GNOME" title="Help:Using Openbox in GNOME">Openbox in GNOME</a></span></h3>
<ul><li>Instructions for running Openbox in the GNOME desktop environment and getting things to work how you want.
</li></ul>
<h3> <span class="mw-headline" id="Openbox_in_KDE"><a href="Using_Openbox_in_KDE" title="Help:Using Openbox in KDE">Openbox in KDE</a></span></h3>
<ul><li>Instructions for running Openbox in K Desktop Environment.
</li></ul>
<h3> <span class="mw-headline" id="Openbox_in_XFCE"><a href="Openbox_in_XFCE" title="Help:Openbox_in_XFCE">Openbox in XFCE</a></span></h3>
<ul><li>Instructions for running Openbox in the XFCE desktop enviroment.
</li></ul>
<h2> <span class="mw-headline" id="Custom_Desktop_Environments"> Custom Desktop Environments </span></h2>
<h3> <span class="mw-headline" id="openbox-session"><a href="Openbox-session" title="Help:Openbox-session">openbox-session</a></span></h3>
<ul><li>Running Openbox as a stand-alone window manager in part of a custom desktop environment.
</li></ul>
<h3> <span class="mw-headline" id="Autostart"><a href="Autostart" title="Help:Autostart">Autostart</a></span></h3>
<ul><li>The autostart documentation gives instructions on how to launch programs with Openbox at startup (not applicable unless openbox-session is called from the Desktop Manager/<code>xinit</code>)
</li></ul>
<h2> <span class="mw-headline" id="Miscellaneous"> Miscellaneous </span></h2>
<h3> <span class="mw-headline" id="rc.xml_Configuration_examples"> rc.xml Configuration examples </span></h3>
<ul><li><a href="DefaultConfiguration" title="Help:DefaultConfiguration">rc.xml Configuration reference</a> - Lists all default key bindings and default configuration.
</li><li><a href="MouseFocusExample" title="Help:MouseFocusExample"> Focus-follows-mouse</a> - This configuration is similar to the default configuration, but has more suitable mouse bindings for focus-follows-mouse that won't interfere with your windows' stacking order.
</li><li><a href="ClaysViStyleSpatial" title="Help:ClaysViStyleSpatial">Vi-styled bindings</a> - Two examples of Vi-style keybindings (by Clay Barnes).
</li><li><a href="WindowsInteractionWithWindowsKey" title="Help:WindowsInteractionWithWindowsKey"> "Windows"/Super key control</a> - Example of using the "Windows" AKA. Super key to control windows (by Deters).
</li><li><a href="IrssiStyleFocus" title="Help:IrssiStyleFocus">Irssi-style window switching</a>
</li></ul>
<h3> <span class="mw-headline" id="Feature_list"><a href="Features" title="Help:Features">Feature list</a></span></h3>
<ul><li>A list of features found in the Openbox windowmanager.
</li></ul>
<h3> <span class="mw-headline" id="Frequently_asked_questions"><a href="FAQ" title="Help:FAQ"> Frequently asked questions</a></span></h3>
<h3> <span class="mw-headline" id="Compiling_from_source"><a href="Installing" title="Help:Installing">Compiling from source</a></span></h3>
<ul><li>Details what you need to build the latest version of Openbox, and how to install it correctly.
</li></ul>
<h3> <span class="mw-headline" id="Using_Git"><a href="UsingGit" title="Help:UsingGit">Using Git</a></span></h3>
<ul><li>Explains how to get bleeding-edge Openbox code for testing or developing with.
</li></ul>
<h3> <span class="mw-headline" id="ObConf"><a href="{{site.baseurl}}/obconf" title="ObConf:About"> ObConf</a></span></h3>
<ul><li>Obconf provides a simple graphical user interface to ease configuration for new Openbox users.
</li></ul>
<h3> <span class="mw-headline" id="Upgrading_to_3.4"> <a href="Upgrading_to_3.4" title="Help:Upgrading to 3.4">Upgrading to 3.4</a> </span></h3>
<ul><li>Walks through all the changes made since version 3.3, and there is a lot of them. Some of them mean new configuration options and features available to you, that you need to update your configuration to access.
</li></ul>
<h2> <span class="mw-headline" id="Other_resources"> Other resources </span></h2>
<ul><li><a rel="nofollow" class="external text" href="http://wiki.archlinux.org/index.php/Openbox">The Arch wiki</a> has a lot of great information on setting up and using Openbox.
</li></ul>
<ul><li>Many Openbox questions have been answered in forums around the internet. Trying a search may be fruitful.
</li></ul>
<ul><li>See <a href="{{site.baseurl}}/community_portal" title="Openbox:Community portal">community portal</a> for other community resources and <b>related projects</b>.
</li></ul>
<p><br/>
</p>
</div>
