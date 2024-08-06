---
title: Help:Autostart
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Autostart</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>			<!-- start content -->
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div class="thumb tright"><div class="thumbinner" style="width:182px;"><a href="images/LoginOptions.png" class="image"><img alt="(thumbnail)" src="images/180px-LoginOptions.png" width="180" height="113" class="thumbimage"/></a>  <div class="thumbcaption"><div class="magnify"><a href="images/LoginOptions.png" class="internal" title="Enlarge"><img src="{{site.baseurl}}/assets/images/magnify-clip.png" width="15" height="11" alt=""/></a></div>Figure 1: The "Openbox" session type at log in</div></div></div>
<p>When you log in with the "Openbox" session type, or launch Openbox with the <code>openbox-session</code> command, the <code>environment</code> script will be executed to set up your environment, and the <code>autostart</code> script can launch any applications you want to run at startup.
</p><p><i>When you run the <code>openbox</code> command on its own, the autostart scripts will not run.  They are run by <code>openbox-session</code> or when you log in graphically with the "Openbox" session type.</i>
</p><p><b>Note:</b> Some distributions ship an "openbox" session type (for display managers) that simply calls the openbox binary.  You want to select the entry that mentions "session."
</p><p>You can use the environment script to set up any custom environment variables you would like to use in your login session.
</p><p>You can use the autostart script to launch a panel, to set your desktop wallpaper, or anything else.
Once Openbox starts, the system-wide default script, located at <code>/etc/xdg/openbox/autostart</code>, will be run. Then the user script at <code>~/.config/openbox/autostart</code> is run afterward.
</p>
<h2> <span class="mw-headline" id="Setting_up_your_environment"> Setting up your environment </span></h2>
<p>If you would like to set environment variables that will affect everything run in your current session (including Openbox), you can place them in <code>~/.config/openbox/environment</code>.  Here's an example <code>~/.config/openbox/environment</code> file:
</p>
<code><pre>
# Set up my own path
export PATH=$HOME/bin:$PATH

# Change the language used from the system's default
export LC_CTYPE=ja_JP.utf8

# SCIM for typing non-english characters
export XMODIFIERS=@im=SCIM
export GTK_IM_MODULE=scim
export QT_IM_MODULE=scim
</pre></code>
<h2> <span class="mw-headline" id="Making_your_own_autostart"> Making your own autostart </span></h2>
<p>The system can provide applications that run automatically on login (see <code>/usr/libexec/openbox-xdg-autostart --list</code>), but you may wish to run others.
</p><p>To run commands for your user account only, create and edit a file called <code>~/.config/openbox/autostart</code>. Place any commands you want to run on startup in the file, each ending with a <code>&amp;</code> character.
</p><p>Here's an example <code>~/.config/openbox/autostart</code> file:
</p>
<code><pre>
# Programs that will run after Openbox has started

# Set the wallpaper
hsetroot ~/wallpaper.png &amp;

# Run a Composite manager
xcompmgr -c -t-5 -l-5 -r4.2 -o.55 &amp;

# SCIM support (for typing non-english characters)
scim -d &amp;

# A panel for good times
fbpanel &amp;
</pre></code>
<p>To run commands for all users system-wide, place them in a similar file in <code>/etc/xdg/openbox/autostart</code>.
</p><p>Make sure that you end any commands with "&amp;" so that they are run in the background, or any programs after it will not run.
</p><p>You do <i>not</i> need to run Openbox at the end of this script.  This script is run just after Openbox has finished setting up, and is launched by <code>openbox-session</code>.
</p>
</div>
