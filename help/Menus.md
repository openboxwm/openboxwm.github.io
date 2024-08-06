---
title: Help:Menus
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Menus</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div class="thumb tright"><div class="thumbinner" style="width:202px;"><img alt="(thumbnail)" src="images/200px-Screenshot_of_menu_of_openbox_3.6.1_with_%22Bear2%22_theme.png" width="200" height="338" class="thumbimage"/>  <div class="thumbcaption">Example of openbox menu</div></div></div>
<p>With regard to Openbox menus, there are two types: <i><a href="#Static_menus">static menus</a></i>, and <i><a href="#Pipe_menus">dynamic or "pipe menus"</a></i>.
</p><p>Both can be configured to extend the functionality of an Openbox installation. While static menus are built from XML files, pipe menus are written in various scripting/programming languages and can be used to provide dynamic menu content like weather, recently accessed files and RSS feeds. Pipe menus can even be combined with command-line ui toolkit utilities like zenity or kdialog to completely replicate the functionality of system tray applets like nm-applet.
</p><p>Menus can further be bound to keybindings to enable the use of multiple menus in an Openbox installation. The only real constraint on your desktop experience is your scripting ability.
</p>
<table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Static_menus"><span class="tocnumber">1</span> <span class="toctext">Static menus</span></a>
<ul>
<li class="toclevel-2 tocsection-2"><a href="#Syntax"><span class="tocnumber">1.1</span> <span class="toctext">Syntax</span></a>
<ul>
<li class="toclevel-3 tocsection-3"><a href="#Value_of_attribute_.22id.22"><span class="tocnumber">1.1.1</span> <span class="toctext">Value of attribute "id"</span></a></li>
<li class="toclevel-3 tocsection-4"><a href="#Value_if_attribute_.22title.22"><span class="tocnumber">1.1.2</span> <span class="toctext">Value if attribute "title"</span></a></li>
<li class="toclevel-3 tocsection-5"><a href="#Value_of_attribute_.22label.22"><span class="tocnumber">1.1.3</span> <span class="toctext">Value of attribute "label"</span></a>
<ul>
<li class="toclevel-4 tocsection-6"><a href="#Specifying_menu_shortcuts"><span class="tocnumber">1.1.3.1</span> <span class="toctext">Specifying menu shortcuts</span></a></li>
</ul>
</li>
<li class="toclevel-3 tocsection-7"><a href="#Value_of_attribute_.22icon.22"><span class="tocnumber">1.1.4</span> <span class="toctext">Value of attribute "icon"</span></a></li>
<li class="toclevel-3 tocsection-8"><a href="#Actions"><span class="tocnumber">1.1.5</span> <span class="toctext">Actions</span></a></li>
</ul>
</li>
</ul>
</li>
<li class="toclevel-1 tocsection-9"><a href="#Pipe_menus"><span class="tocnumber">2</span> <span class="toctext">Pipe menus</span></a>
<ul>
<li class="toclevel-2 tocsection-10"><a href="#Command"><span class="tocnumber">2.1</span> <span class="toctext">Command</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-11"><a href="#The_Debian_menu"><span class="tocnumber">3</span> <span class="toctext">The Debian menu</span></a></li>
</ul>
</td></tr></table>
<h2> <span class="mw-headline" id="Static_menus"> Static menus </span></h2>
<p>Static menus are built based on content of XML files, paths to which specified in configuration file "<code>rc.xml</code>". The default menu file, "<code>menu.xml</code>", located either at "<code>~/.config/openbox</code>" (user-specific directory) or at "<code>/etc/xdg/openbox</code>" (system-wide directory) is static by default. 
</p>
<h3> <span class="mw-headline" id="Syntax"> Syntax </span></h3>
<p>A menu file must be entirely enclosed within "<code>&lt;openbox_menu&gt;</code>" and "<code>&lt;/openbox_menu&gt;</code>" tags, as well as the appropriate XML declaration like so:
</p>
<pre>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;openbox_menu xmlns="http://openbox.org/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://openbox.org/ file:///usr/share/openbox/menu.xsd"&gt;
  ...menu stuff here...
&lt;/openbox_menu&gt;
</pre>
<p>Inside these tags, menus are specified as follows:
</p>
<pre>&lt;menu
  id="<a href="#ID">ID</a>"
  label="<a href="#TITLE">TITLE</a>"
  icon="<a href="#ICON">ICON</a>"
&gt;

  &lt;!-- this is a menu item, such as a program --&gt;
  &lt;item
    label="<a href="#LABEL">LABEL</a>"
    icon="<a href="#ICON">ICON</a>"
  &gt;
    <a href="#Actions">ACTIONS</a>
  &lt;/item&gt;

  &lt;!-- this is a menu header --&gt;
  &lt;separator
    label="Header"
  /&gt;

  &lt;!-- this links to a sub menu --&gt;
  &lt;menu
    id="<a href="#ID">ID</a>"
  /&gt;

  &lt;!-- this is a horizontal line --&gt;
  &lt;separator /&gt;

  &lt;!-- this also links to a sub menu, which is defined inline --&gt;
  &lt;menu
    id="<a href="#ID">ID</a>"
    label="<a href="#TITLE">TITLE</a>"
    icon="<a href="#ICON">ICON</a>"
  &gt;
    &lt;item
      label="<a href="#LABEL">LABEL</a>"
      icon="<a href="#ICON">ICON</a>"
    &gt;
      <a href="#Actions">ACTIONS</a>
    &lt;/item&gt;
  &lt;/menu&gt;

  &lt;separator /&gt;

  &lt;!-- this is a menu item --&gt;
  &lt;item
    label="<a href="#LABEL">LABEL</a>"
    icon="<a href="#ICON">ICON</a>"
  &gt;
    <a href="#Actions">ACTIONS</a>
  &lt;/item&gt;

&lt;/menu&gt;
</pre>
<p>The example above shows how to put entries into a menu (with "<code>&lt;item&gt;</code>" and "<code>&lt;/item&gt;</code>" tags), and two methods to add submenus to a menu (with "<code>&lt;menu&gt;</code>" and "<code>&lt;/menu&gt;</code>" tags). It also shows how to put menu headers and separators (with "<code>&lt;separator /&gt;</code>" tag) into the menu to group items together without submenus.
</p><p><span id="ID"></span>
</p>
<h4> <span class="mw-headline" id="Value_of_attribute_.22id.22"> Value of attribute "id" </span></h4>
<p>Each menu must be given an <b><code>id</code></b>, which is a unique identifier of the menu. This <b><code>id</code></b> is used to refer to the menu in a <a href="Actions#ShowMenu" title="Help:Actions">ShowMenu</a> action.
</p><p><span id="TITLE"></span>
</p>
<h4> <span class="mw-headline" id="Value_if_attribute_.22title.22"> Value if attribute "title" </span></h4>
<p>The value of attribute <b><code>title</code></b> of the menu is shown, when you link to the menu as a submenu. The <b><code>title</code></b> will appear in its parent menu.
</p><p><span id="LABEL"></span>
</p>
<h4> <span class="mw-headline" id="Value_of_attribute_.22label.22"> Value of attribute "label" </span></h4>
<p>The value of attribute <b><code>label</code></b> of an "<code>item</code>" element is the visible name of the menu item. In the "<code>separator</code>" element, the <b><code>label</code></b> attribute transforms the separator from a small horizontal line to a menu header with the given text in it.
</p>
<h5> <span class="mw-headline" id="Specifying_menu_shortcuts"> Specifying menu shortcuts </span></h5>
<p>The first character in the label is used for a keyboard shortcut to directly use the menu item. This can be overridden by using the "<code>_</code>" character in front of the character, you wish to use for the shortcut. For example, "<code>The _shortcut</code>" would make "<code>s</code>" the shortcut key for this menu item. If you want a "<code>_</code>" character to appear in the string, you can use two underscores together, such as in "<code>An __ underscore</code>".
</p><p><span id="ICON"></span>
</p>
<h4> <span class="mw-headline" id="Value_of_attribute_.22icon.22"> Value of attribute "icon" </span></h4>
<p>The value of attribute <b><code>icon</code></b> is path to the image file. Image will be drawn left of menu item label or submenu label. Supported formats of images is the same, as formats, supported by libraries "<a rel="nofollow" class="external text" href="https://docs.enlightenment.org/api/imlib2/html/">Imlib2</a>" (xpm, gif, jpeg, png) and "<a rel="nofollow" class="external text" href="https://github.com/GNOME/librsvg">librsvg</a>" (svg). Example:
</p>
<pre>&lt;item
  label="Vim"
  icon="/usr/share/pixmaps/vim-32.xpm"
&gt;
  &lt;action
    name="<a href="Actions#Execute" title="Help:Actions">Execute</a>"
  &gt;
    &lt;execute&gt;x-terminal-emulator -T Vim -e vim&lt;/execute&gt;
  &lt;/action&gt;
&lt;/item&gt;
</pre>
<p>If user doesn't want to display icons in menus, he/she can disable icons inside "<code>menu</code>" element in "<code>rc.xml</code>" file:
</p>
<pre>
&lt;menu&gt;
  ...
  &lt;showIcons&gt;no&lt;/showIcons&gt;
  &lt;!-- Default value is &quot;yes&quot;. --&gt;
  ...
&lt;/menu&gt;
</pre>
<h4> <span class="mw-headline" id="Actions"> Actions </span></h4>
<p>The <b>ACTIONS</b> are zero or more <a href="Actions#Action_syntax" title="Help:Actions">actions</a>, which are executed in order, when you select the menu item. Typically, in menus, these are <a href="Actions#Execute" title="Help:Actions">Execute</a> actions, which run commands.
</p><p><span id="Pipe_menus"></span>
</p>
<h2> <span class="mw-headline" id="Pipe_menus"> Pipe menus </span></h2>
<p>Pipe menus are menus generated dynamically based on output of scripts, they are so-called since the script's output is piped to the given Openbox menu. A number of scripts used to generate pipe menus are available through the <a href="{{site.baseurl}}/pipemenus" title="Openbox:Pipemenus">pipe menus page</a>.
</p><p>A pipe menu can be created by placing the following code into a menu file, such as "<code>menu.xml</code>":
</p>
<pre>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;openbox_menu xmlns="http://openbox.org/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://openbox.org/ file:///usr/share/openbox/menu.xsd"&gt;
 ...menu stuff here...
 &lt;menu
   id="<a href="#ID">ID</a>"
   label="<a href="#TITLE">TITLE</a>"
   execute="<a href="#Command">COMMAND</a>"
 /&gt;
&lt;/openbox_menu&gt;
</pre>
<p>Thereafter the pipe menu can be referenced by <a href="#ID">ID</a> just like static menu.
</p>
<h3> <span class="mw-headline" id="Command"> Command </span></h3>
<p>The <b>COMMAND</b> is the command to be executed by Openbox. Each time action <a href="Actions#ShowMenu" title="Help:Actions">ShowMenu</a> is executed Openbox will do the following steps:
</p>
<ul><li> run specified command;
</li><li> read output of command;
</li><li> show the menu on the screen.
</li></ul>
<p>The stdout (output) of the script should be XML, something like:
</p>
<pre>&lt;openbox_pipe_menu&gt;
  &lt;item
    label="<a href="#LABEL">LABEL</a>"
    icon="<a href="#ICON">ICON</a>"
  &gt;
    <a href="#Actions">ACTIONS</a>
  &lt;/item&gt;
&lt;/openbox_pipe_menu&gt;
</pre>
<p>When writing your own scripts, make sure to escape xml special characters, such as "&amp;" ("<code>&amp;amp;</code>"), "&lt;" ("<code>&amp;lt;</code>"), "&gt;" ("<code>&amp;gt;</code>") and other (see more on <a rel="nofollow" class="external text" href="https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references">Wikipedia</a>).
</p>
<h1> <span class="mw-headline" id="The_Debian_menu"> The Debian menu </span></h1>
<p>Source installs or prepackaged .debs from openbox.org will not configure your setup to show the Debian menu. There are a few <a href="Debian-menu" title="Help:Debian-menu">simple steps</a> to get it working.
</p>
</div>
