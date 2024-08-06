---
title: Debian-menu
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Menus/Debian-menu</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div class="thumb tright"><div class="thumbinner" style="width:202px;"><a href="images/NewMoreMenu.png" class="image"><img alt="(thumbnail)" src="images/200px-NewMoreMenu.png" width="200" height="91" class="thumbimage"/></a>  <div class="thumbcaption"><div class="magnify"><a href="images/NewMoreMenu.png" class="internal" title="Enlarge"><img src="{{site.baseurl}}/assets/images/magnify-clip.png" width="15" height="11" alt=""/></a></div>Example of Debian menu</div></div></div>
<p>Source installs or prepackaged .debs from openbox.org will not configure your setup to show the Debian menu. There are a few simple steps to get it working.
</p>
<h2> <span class="mw-headline" id="If_you_have_already_installed_openbox_with_a_working_Debian_menu"> If you have already installed openbox with a working Debian menu </span></h2>
<p>Add the following line to your "<code>~/.config/openbox/menu.xml</code>" file (if it isn't there, copy it from "<code>/etc/xdg/openbox/menu.xml</code>" file):
</p>
<pre> &lt;menu id="/Debian" /&gt;
</pre>
<p>You should place the line, where you would like it to appear in the root menu. Location matters!
</p><p>Add one of following lines to your "<code>~/.config/openbox/rc.xml</code>" file between the "<code>&lt;menu&gt;</code>" and "<code>&lt;/menu&gt;</code>" tags, before the code "<code>&lt;file&gt;menu.xml&lt;/file&gt;</code>":
</p>
<pre> &lt;file&gt;/var/lib/openbox/debian-menu.xml&lt;/file&gt;
 &lt;file&gt;debian-menu.xml&lt;/file&gt;
</pre>
<p>The second line allows you to copy the "<code>debian-menu.xml</code>" file from "<code>/var/lib/openbox</code>" to your local "<code>~/.config/openbox</code>" directory, where it becomes static (command <code>update-menus</code> will not affect it). You can then edit it by hand and your changes will be permanent.
</p><p>That's all you should have to do, though it's a good idea to run command <code>update-menus</code> (from package "<code>menu</code>") as root every now and then, if you don't have a cron job assigned. It refreshes the list of currently installed apps.
</p><p>Then choose "<code>reconfigure</code>" on your root menu, and you should get a Debian submenu within the root menu.
</p>
<h2> <span class="mw-headline" id="If_you_haven.27t_had_a_working_debian_menu"> If you haven't had a working debian menu </span></h2>
<p>This is a little trickier, but no big deal.
</p><p>Then there's this little humdinger: you'll need to get a copy of an executable script named "openbox" and copy it to "<code>/etc/menu-methods</code>" directory. The script actually creates the Debian menu, when you run "<code>update-menus</code>.
</p>
<dl><dt> Method 1
</dt></dl>
<p>The easiest way is to install Openbox from official debian repository using "<code>apt</code>", "<code>aptitude</code>", "<code>synaptic</code>" or other program. This will normally ensure, that you have all the packages required to create and use the Debian menu. 
</p><p>After installation copy the script (from "<code>/etc/menu-methods</code>" directory) in a known directory (your home directory will fine), then uninstall the official openbox (with "<code>apt</code>", "<code>aptitude</code>", "<code>synaptic</code>" or other). 
</p><p>Then, copy the script back to "<code>/etc/menu-methods</code>" directory and finally, issue the command <code>update-menus</code> as root.
</p>
<dl><dt> Method 2
</dt></dl>
<p>If you don't want to do that, download an official Openbox package (.deb) from debian.org, create a dummy directory in "<code>/tmp</code>" and type the command
</p>
<pre> dpkg-deb -x /path/to/official-openbox.deb &lt; /tmp/dummy_dir
</pre>
<p>This will unpack a mini-filesystem, that includes the script you need, in "<code>/tmp/dummy_dir/etc/menu-methods</code>" directory. Set its execution permissions, copy the script to "<code>/etc</code>" directory and issue the command <code>update-menus</code> as root. The latter command will create the file "<code>/var/lib/openbox/debian-menu.xml</code>".
</p><p>To set the execution permissions type:
</p>
<pre> chmod ug+x /tmp/dummy_dir/etc/openbox
</pre>
<p>The reason to create a dummy directory is that running the <code>dpkg-deb -x</code> command will change the ownership of the directory to root. These could become a bit of a problem later; putting it in a subdirectory of "<code>/tmp</code>" makes that issue, inoffensive.
</p><p>Also, you should make sure you have the following packages installed before running <code>update-menus</code>:
</p>
<ul><li> menu;
</li><li> menu-xdg.
</li></ul>
<p>Now follow the instructions, listed <a href="#If_you_have_already_installed_openbox_with_a_working_Debian_menu">above</a>.
</p>
</div>
