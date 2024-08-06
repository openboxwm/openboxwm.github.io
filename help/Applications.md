---
title: Help:Applications
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Applications</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Settings_for_specific_windows_.28Per-application_settings.29"><span class="tocnumber">1</span> <span class="toctext">Settings for specific windows (Per-application settings)</span></a>
<ul>
<li class="toclevel-2 tocsection-2"><a href="#Syntax"><span class="tocnumber">1.1</span> <span class="toctext">Syntax</span></a></li>
<li class="toclevel-2 tocsection-3"><a href="#Finding_the_class.2C_name.2C_role.2C_title_and_type_parameters"><span class="tocnumber">1.2</span> <span class="toctext">Finding the class, name, role, title and type parameters</span></a></li>
<li class="toclevel-2 tocsection-4"><a href="#Matching_windows_with_wildcards"><span class="tocnumber">1.3</span> <span class="toctext">Matching windows with wildcards</span></a></li>
<li class="toclevel-2 tocsection-5"><a href="#Matching_against_multiple_rules"><span class="tocnumber">1.4</span> <span class="toctext">Matching against multiple rules</span></a></li>
<li class="toclevel-2 tocsection-6"><a href="#Example_of_per-app_settings"><span class="tocnumber">1.5</span> <span class="toctext">Example of per-app settings</span></a></li>
<li class="toclevel-2 tocsection-7"><a href="#Graphically_managing_per-application_settings"><span class="tocnumber">1.6</span> <span class="toctext">Graphically managing per-application settings</span></a></li>
</ul>
</li>
</ul>
</td></tr></table>
<h1> <span class="mw-headline" id="Settings_for_specific_windows_.28Per-application_settings.29"> Settings for specific windows (Per-application settings) </span></h1>
<p>Per-application settings are specified in the &lt;applications&gt; section of <code>rc.xml</code>
</p>
<h2> <span class="mw-headline" id="Syntax"> Syntax </span></h2>
<p>A per-app setting is specified as follows:
</p>
<code><pre>
&lt;applications&gt;
  ...
  &lt;application name=&quot;NAME&quot; class=&quot;CLASS&quot; role=&quot;ROLE&quot; title=&quot;TITLE&quot; type=&quot;TYPE&quot;&gt;
    ...PROPERTIES...
  &lt;/application&gt;
  ...
&lt;/applications&gt;
</pre></code>
<p>A complete list of possible properties to set is in the <a rel="nofollow" class="external text" href="http://git.icculus.org/?p=mikachu/openbox.git;a=blob_plain;f=data/rc.xml;hb=master">default rc.xml file</a>, which you can find in <code>/etc/xdg/openbox/rc.xml</code>.
</p>
<h2> <span class="mw-headline" id="Finding_the_class.2C_name.2C_role.2C_title_and_type_parameters"> Finding the class, name, role, title and type parameters </span></h2>
<p>Per-application settings let you match on what we call class, name, role, title and type. These can all be determined with the <code>obxprop</code> utility.  Run <code>obxprop | grep "^_OB_APP"</code> to see the value of these five properties. The output will look like
</p>
<code><pre>_OB_APP_TYPE(UTF8_STRING) = &quot;normal&quot;
_OB_APP_CLASS(UTF8_STRING) = &quot;Google-chrome&quot;
_OB_APP_NAME(UTF8_STRING) = &quot;google-chrome&quot;
_OB_APP_ROLE(UTF8_STRING) = 
_OB_APP_TITLE(UTF8_STRING) = &quot;Google Chrome&quot;
</pre></code>
<p>You have to specify at least one of class and name. Optionally, you may specify more than one, in which case they must all match for the rule to be applied. You may also optionally specify role and type. Note that the title matched is the one when the window was mapped. Many programs set the title just after mapping the window which means the value Openbox sees as it is determining which rules to apply is sometimes empty or something like "Untitled". The _OB_APP_TITLE property will show the value that Openbox used, not the current title.
</p>
<h2> <span class="mw-headline" id="Matching_windows_with_wildcards"> Matching windows with wildcards </span></h2>
<p>When specifying the name, class, or role for a rule, you can use simple wildcard matching with the "*" and "?" characters. A "*" matches any number of characters and a "?" matches any single character.
</p>
<h2> <span class="mw-headline" id="Matching_against_multiple_rules"> Matching against multiple rules </span></h2>
<p>As well, multiple rules can be applied to the same window.  This lets you do more with less writing.  For instance you could write one rule to match against all windows and then later rules could further change things for more specific windows.  The rules are matched in the order they appear in your configuration file, so later rules will override previous rules if they both specify the same setting for a window.
</p>
<h2> <span class="mw-headline" id="Example_of_per-app_settings"> Example of per-app settings </span></h2>
<p>Here's an example from rc.xml that uses wildcards, and matches multiple rules against windows:
</p>
<code><pre>
&lt;applications&gt;
  &lt;!-- match all windows, and remove their decorations --&gt;
  &lt;application class=&quot;*&quot;&gt;
    &lt;decor&gt;no&lt;/decor&gt;
  &lt;/application&gt;
  &lt;!-- orage does get decorations though.
       calender app, see http://www.xfce.org/projects/orage/ --&gt;
  &lt;application class=&quot;Orage&quot;&gt;
    &lt;decor&gt;yes&lt;/decor&gt;
  &lt;/application&gt;
  &lt;!-- my xterm with screen in it must always be on desktop 2,
       maximized and below everything else --&gt;
  &lt;application name=&quot;screen&quot;&gt;
    &lt;desktop&gt;2&lt;/desktop&gt;
    &lt;maximized&gt;yes&lt;/maximized&gt;
    &lt;layer&gt;below&lt;/layer&gt;
  &lt;/application&gt;
  &lt;!-- i want firefox on desktop 3 and maximized --&gt;
  &lt;application name=&quot;Firefox*&quot;&gt;
    &lt;desktop&gt;3&lt;/desktop&gt;
    &lt;maximized&gt;yes&lt;/maximized&gt;
  &lt;/application&gt;
  &lt;!-- MPlayer will follow me around when i switch desktop.
       that way i can always watch my vids when coding.
       same goes for Realplayer --&gt;
  &lt;application class=&quot;MPlayer&quot;&gt;
    &lt;desktop&gt;all&lt;/desktop&gt;
    &lt;layer&gt;above&lt;/layer&gt;
  &lt;/application&gt;
  &lt;application class=&quot;Realplay.bin&quot;&gt;
    &lt;desktop&gt;all&lt;/desktop&gt;
    &lt;layer&gt;above&lt;/layer&gt;
  &lt;/application&gt;
  &lt;!-- i want nwn always maximized, same for openttd --&gt;
  &lt;application name=&quot;Neverwinter Nights Client&quot;&gt;
    &lt;maximized&gt;yes&lt;/maximized&gt;
  &lt;/application&gt;
  &lt;application class=&quot;openttd&quot;&gt;
    &lt;maximized&gt;yes&lt;/maximized&gt;
  &lt;/application&gt;
  &lt;!-- A is for Amarok, A is the 1st letter in the alphabet, so
       move Amarok to the first desktop --&gt;
  &lt;application class=&quot;Amarokapp&quot;&gt;
    &lt;desktop&gt;1&lt;/desktop&gt;
    &lt;maximized&gt;yes&lt;/maximized&gt;
  &lt;/application&gt;
  &lt;!-- Easytag is obviously something which belongs on desktop 6, duh --&gt;
  &lt;application name=&quot;easytag&quot;&gt;
    &lt;desktop&gt;6&lt;/desktop&gt;
    &lt;maximized&gt;yes&lt;/maximized&gt;
  &lt;/application&gt;
&lt;/applications&gt;
</pre></code>
<h2> <span class="mw-headline" id="Graphically_managing_per-application_settings"> Graphically managing per-application settings </span></h2>
<p><a rel="nofollow" class="external text" href="http://sourceforge.net/projects/obapps/">OBApps</a> is a GUI tool for creating and editing per-application settings. It allows you to click on a window to create a matching rule and to easily set all the properties documented in the example configuration
</p>
</div>
