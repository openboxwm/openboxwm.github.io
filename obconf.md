---
title: ObConf
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">ObConf:About</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><p>This page is about the Openbox configuration tool, ObConf 2.0.
</p>
<table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Installing_and_distributing_Openbox_themes"><span class="tocnumber">1</span> <span class="toctext">Installing and distributing Openbox themes</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#Screenshots"><span class="tocnumber">2</span> <span class="toctext">Screenshots</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#Download"><span class="tocnumber">3</span> <span class="toctext">Download</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#Installing_ObConf"><span class="tocnumber">4</span> <span class="toctext">Installing ObConf</span></a>
<ul>
<li class="toclevel-2 tocsection-5"><a href="#Dependencies"><span class="tocnumber">4.1</span> <span class="toctext">Dependencies</span></a></li>
<li class="toclevel-2 tocsection-6"><a href="#Building_ObConf"><span class="tocnumber">4.2</span> <span class="toctext">Building ObConf</span></a></li>
</ul>
</li>
</ul>
</td></tr></table>
<h2> <span class="mw-headline" id="Installing_and_distributing_Openbox_themes"> Installing and distributing Openbox themes </span></h2>
<p>ObConf now easily installs new themes which use the <code>.obt</code> Openbox theme archive format for distribution.  Just open any <code>.obt</code> theme archive in your file browser, or use the interface provided inside ObConf.
</p><p>You can also use ObConf to create <code>.obt</code> Openbox theme archives for distributing your own themes.
</p>
<h2> <span class="mw-headline" id="Screenshots"> Screenshots </span></h2>
<table>
<tr>
<td> <div class="thumb tright"><div class="thumbinner" style="width:182px;"><a href="{{site.baseurl}}/assets/images/obconf/ObConfTheme.png" class="image"><img alt="(thumbnail)" src="{{site.baseurl}}/assets/images/obconf/180px-ObConfTheme.png" width="180" height="242" class="thumbimage"/></a>  <div class="thumbcaption"><div class="magnify"><a href="{{site.baseurl}}/assets/images/obconf/ObConfTheme.png" class="internal" title="Enlarge"><img src="{{site.baseurl}}/assets/images/magnify-clip.png" width="15" height="11" alt=""/></a></div>Theme options</div></div></div>
</td>
<td> <div class="thumb tright"><div class="thumbinner" style="width:182px;"><a href="{{site.baseurl}}/assets/images/obconf/ObConfAppearance.png" class="image"><img alt="(thumbnail)" src="{{site.baseurl}}/assets/images/obconf/180px-ObConfAppearance.png" width="180" height="242" class="thumbimage"/></a>  <div class="thumbcaption"><div class="magnify"><a href="{{site.baseurl}}/assets/images/obconf/ObConfAppearance.png" class="internal" title="Enlarge"><img src="{{site.baseurl}}/assets/images/magnify-clip.png" width="15" height="11" alt=""/></a></div>Appearance options</div></div></div>
</td>
<td> <div class="thumb tright"><div class="thumbinner" style="width:182px;"><a href="{{site.baseurl}}/assets/images/obconf/ObConfBehavior.png" class="image"><img alt="(thumbnail)" src="{{site.baseurl}}/assets/images/obconf/180px-ObConfBehavior.png" width="180" height="242" class="thumbimage"/></a>  <div class="thumbcaption"><div class="magnify"><a href="{{site.baseurl}}/assets/images/obconf/ObConfBehavior.png" class="internal" title="Enlarge"><img src="{{site.baseurl}}/assets/images/magnify-clip.png" width="15" height="11" alt=""/></a></div>Behavior options</div></div></div>
</td></tr>
<tr>
<td> <div class="thumb tright"><div class="thumbinner" style="width:182px;"><a href="{{site.baseurl}}/assets/images/obconf/ObConfDesktops.png" class="image"><img alt="(thumbnail)" src="{{site.baseurl}}/assets/images/obconf/180px-ObConfDesktops.png" width="180" height="242" class="thumbimage"/></a>  <div class="thumbcaption"><div class="magnify"><a href="{{site.baseurl}}/assets/images/obconf/ObConfDesktops.png" class="internal" title="Enlarge"><img src="{{site.baseurl}}/assets/images/magnify-clip.png" width="15" height="11" alt=""/></a></div>Desktop options</div></div></div>
</td>
<td> <div class="thumb tright"><div class="thumbinner" style="width:182px;"><a href="{{site.baseurl}}/assets/images/obconf/ObConfDock.png" class="image"><img alt="(thumbnail)" src="{{site.baseurl}}/assets/images/obconf/180px-ObConfDock.png" width="180" height="242" class="thumbimage"/></a>  <div class="thumbcaption"><div class="magnify"><a href="{{site.baseurl}}/assets/images/obconf/ObConfDock.png" class="internal" title="Enlarge"><img src="{{site.baseurl}}/assets/images/magnify-clip.png" width="15" height="11" alt=""/></a></div>Dock options</div></div></div>
</td></tr>
</table>
<h2> <span class="mw-headline" id="Download"> Download </span></h2>
<p>ObConf is available for <a href="{{site.baseurl}}/download#ObConf_-_Openbox_configuration_tool" title="Openbox:Download"> download here</a>.
</p><p>The current changelog is <a href="{{site.baseurl}}/obconf_changelog" title="ObConf:Changelog"> found here</a>.
</p>
<h2> <span class="mw-headline" id="Installing_ObConf"> Installing ObConf </span></h2>
<p>ObConf should be installed to the <code>/usr</code> prefix to have file associations function correctly.
</p><p>When ObConf is installed, upgraded or uninstalled, you need to run these commands to update the <code>.obt</code> file associations for GNOME:
</p>
<code><pre>
update-mime-database /usr/share/mime
update-desktop-database /usr/share/applications
</pre></code>
<p>These programs are a part of the <code>shared-mime-info</code> and <code>desktop-file-utils</code> packages.  They should be installed if GNOME is installed.
</p>
<h3> <span class="mw-headline" id="Dependencies"> Dependencies </span></h3>
<p>Compiling ObConf requires the following packages:
</p>
<ul><li> GTK+ 2.x library and headers (development package)
</li><li> Glade 2.x library and headers (development package)
</li><li> Openbox 3.4 or above (the libraries development package if it is separate)
</li></ul>
<h3> <span class="mw-headline" id="Building_ObConf"> Building ObConf </span></h3>
<p>If you have installed Openbox into the <code>/usr/local</code> prefix, you will need to tell the ObConf configure script where to find the Openbox libraries:
</p>
<code><pre>
  PKG_CONFIG_PATH=/usr/local/lib/pkgconfig ./configure --prefix=/usr
</pre></code>
</div>
