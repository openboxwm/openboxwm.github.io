---
title: Help:Installing
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Installing</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Dependencies"><span class="tocnumber">1</span> <span class="toctext">Dependencies</span></a>
<ul>
<li class="toclevel-2 tocsection-2"><a href="#Dependencies_in_Ubuntu_and_Debian"><span class="tocnumber">1.1</span> <span class="toctext">Dependencies in Ubuntu and Debian</span></a></li>
<li class="toclevel-2 tocsection-3"><a href="#Dependencies_in_Fedora"><span class="tocnumber">1.2</span> <span class="toctext">Dependencies in Fedora</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-4"><a href="#Building_and_installing_the_program"><span class="tocnumber">2</span> <span class="toctext">Building and installing the program</span></a>
<ul>
<li class="toclevel-2 tocsection-5"><a href="#For_64-bit_distributions"><span class="tocnumber">2.1</span> <span class="toctext">For 64-bit distributions</span></a></li>
<li class="toclevel-2 tocsection-6"><a href="#For_CentOS_5.3"><span class="tocnumber">2.2</span> <span class="toctext">For CentOS 5.3</span></a></li>
<li class="toclevel-2 tocsection-7"><a href="#Tips_for_Developing_and_Using_Openbox_at_the_Same_Time"><span class="tocnumber">2.3</span> <span class="toctext">Tips for Developing and Using Openbox at the Same Time</span></a></li>
</ul>
</li>
</ul>
</td></tr></table>
<h2> <span class="mw-headline" id="Dependencies"> Dependencies </span></h2>
<p>Compiling Openbox should be a relatively painless experience. You will need the following packages:
</p>
<ul><li> C compiler (such as GCC)
</li><li> Libc library and headers (development package)
</li><li> Xlib library and headers (development package)
</li><li> Xext and Xrandr library and headers (development package) - <i>optional but recommended</i>
</li></ul>
<ul><li> Glib-2 library and headers (development package)
</li><li> LibXML-2 library and headers (development package)
</li><li> Pango library and headers (development package)
</li><li> Imlib2 (development package) - <i>optional but recommended</i>
</li><li> Startup-notification library and headers (development package) - <i>optional but recommended</i>
</li><li> XCursor library and headers (development package) - <i>optional but recommended</i>
</li><li> Pkg-config
</li></ul>
<p>These should all be available through your distribution.
</p>
<h3> <span class="mw-headline" id="Dependencies_in_Ubuntu_and_Debian"> Dependencies in Ubuntu and Debian </span></h3>
<p>In Ubuntu and Debian, install the following packages:
</p>
<ul><li> build-essential
</li><li> pkg-config
</li><li> libpango1.0-dev
</li><li> libglib2.0-dev
</li><li> libxml2-dev
</li><li> libxcursor-dev
</li><li> libimlib2-dev
</li><li> libstartup-notification0-dev
</li><li> xlibs-dev
</li><li> libxext-dev
</li><li> x11proto-randr-dev
</li></ul>
<p>Note: 'xlibs-dev' is no longer available in in Ubuntu 8.04 LTS 'Hardy' repositories, but 'xlibs-static-dev' is.
</p><p>If you want to hook in the Debian menu, you'll also want:
</p>
<ul><li> menu
</li><li> menu-xdg
</li></ul>
<h3> <span class="mw-headline" id="Dependencies_in_Fedora"> Dependencies in Fedora </span></h3>
<p>In Fedora Core 6 or Fedora 7, install the following packages:
</p>
<ul><li> gcc
</li><li> autoconf
</li><li> automake
</li><li> glib2-devel
</li><li> pango-devel
</li><li> imlib2-devel
</li><li> startup-notification-devel
</li><li> libXcursor-devel
</li><li> libXfixes-devel
</li><li> libSM-devel
</li><li> libxml2-devel
</li></ul>
<h2> <span class="mw-headline" id="Building_and_installing_the_program"> Building and installing the program </span></h2>
<p>Once you have the above dependancies installed, you are ready to build Openbox. 
</p><p>You can obtain the source code from github.com (or as through tar archives (eg. linux from scratch)):
</p>
<code><pre>
 &#160;% git clone https://github.com/Mikachu/openbox.git
</pre></code>
<p>Run bootstrap script to obtain configuration scripts
</p>
<code><pre>
 &#160;% ./bootstrap
</pre></code>
<p>Then run:
</p>
<code><pre>
 &#160;% ./configure --prefix=/usr --sysconfdir=/etc
    ...configure detects the build evironment...
 &#160;% make
    ...openbox builds...
 &#160;% sudo make install
    ...openbox installs...
</pre></code>
<p>If you do <i>not</i> want to install to <code>/usr</code>, then you should use <code>./configure --prefix=&lt;whatever you want&gt; --sysconfdir=/etc --datarootdir=/usr/share</code>. If you don't do this, the Openbox log in options will not be available, because they need to be installed to <code>/usr/share/xsessions</code>.
</p><p>If the configure command fails and the reason is not obvious, you should look in the generated <code>config.log</code> file to discover the cause of the problem.
</p>
<h3> <span class="mw-headline" id="For_64-bit_distributions"> For 64-bit distributions </span></h3>
<p>When building Openbox on the 64-bit versions of Debian or Fedora, use:
</p>
<code><pre>
 &#160;% ./configure --prefix=/usr --sysconfdir=/etc --libdir=/usr/lib64
 &#160;% make
 &#160;% sudo make install
</pre></code>
<h3> <span class="mw-headline" id="For_CentOS_5.3"> For CentOS 5.3 </span></h3>
<code><pre>
# yum install automake autoconf glib2-devel pango-devel startup-notification-devel libXcursor-devel libXfixes-devel libSM-devel libxml2-devel gcc-c++.i386 gcc.i386

# ./configure --prefix=/usr --sysconfdir=/etc 

# make

# make install
</pre></code>
<h3> <span class="mw-headline" id="Tips_for_Developing_and_Using_Openbox_at_the_Same_Time"> Tips for Developing and Using Openbox at the Same Time </span></h3>
<p>There are several ways of having two xserver sessions at once.
</p><p>One of these is using Xephyr to create a nested window:
</p>
<code><pre>
 &#160;% Xephyr -br -ac -noreset -screen 640x320&#160;:1
</pre></code>
<p>And then running your second ammended openbox in this display:
</p>
<code><pre>
 &#160;% DISPLAY=:1 ./openbox 
</pre></code>
<p>(the line above assumes you're in the directory of where the openbox binaries lie)
</p>
</div>
