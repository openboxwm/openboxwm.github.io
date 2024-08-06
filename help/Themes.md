---
title: Help:Themes
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Themes</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><p>language:  gb | <a href="Themes_fr" title="Help:Themes fr">fr</a>
</p><p>Openbox 3 themes are written as an X resource database, in a file named <code>themerc</code>.  The format is quite simple to learn, but there are an enormous number of options available to you.
</p><p>Each and every option has been documented, with details such as their default values, and which values are or are not valid for them.  But to try make it a little more accessible, we'll start with an example theme, which uses every possible option within it.  Each of the options can be clicked to read the details about it.
</p>
<table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Theme_installation"><span class="tocnumber">1</span> <span class="toctext">Theme installation</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#Theme_selection"><span class="tocnumber">2</span> <span class="toctext">Theme selection</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#Theme_file_structure"><span class="tocnumber">3</span> <span class="toctext">Theme file structure</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#Example"><span class="tocnumber">4</span> <span class="toctext">Example</span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#Data_types"><span class="tocnumber">5</span> <span class="toctext">Data types</span></a>
<ul>
<li class="toclevel-2 tocsection-6"><a href="#Integers"><span class="tocnumber">5.1</span> <span class="toctext">Integers</span></a></li>
<li class="toclevel-2 tocsection-7"><a href="#Justification"><span class="tocnumber">5.2</span> <span class="toctext">Justification</span></a></li>
<li class="toclevel-2 tocsection-8"><a href="#Textures"><span class="tocnumber">5.3</span> <span class="toctext">Textures</span></a>
<ul>
<li class="toclevel-3 tocsection-9"><a href="#Parentrelative"><span class="tocnumber">5.3.1</span> <span class="toctext">Parentrelative</span></a></li>
<li class="toclevel-3 tocsection-10"><a href="#Solid"><span class="tocnumber">5.3.2</span> <span class="toctext">Solid</span></a></li>
<li class="toclevel-3 tocsection-11"><a href="#Gradients"><span class="tocnumber">5.3.3</span> <span class="toctext">Gradients</span></a>
<ul>
<li class="toclevel-4 tocsection-12"><a href="#SplitVertical_gradients"><span class="tocnumber">5.3.3.1</span> <span class="toctext">SplitVertical gradients</span></a></li>
</ul>
</li>
<li class="toclevel-3 tocsection-13"><a href="#Border"><span class="tocnumber">5.3.4</span> <span class="toctext">Border</span></a></li>
<li class="toclevel-3 tocsection-14"><a href="#Interlaced"><span class="tocnumber">5.3.5</span> <span class="toctext">Interlaced</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-15"><a href="#Colors"><span class="tocnumber">5.4</span> <span class="toctext">Colors</span></a>
<ul>
<li class="toclevel-3 tocsection-16"><a href="#Color_names"><span class="tocnumber">5.4.1</span> <span class="toctext">Color names</span></a></li>
<li class="toclevel-3 tocsection-17"><a href="#RGB_values"><span class="tocnumber">5.4.2</span> <span class="toctext">RGB values</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-18"><a href="#Text_shadow_strings"><span class="tocnumber">5.5</span> <span class="toctext">Text shadow strings</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-19"><a href="#Theme_elements"><span class="tocnumber">6</span> <span class="toctext">Theme elements</span></a>
<ul>
<li class="toclevel-2 tocsection-20"><a href="#Geometry"><span class="tocnumber">6.1</span> <span class="toctext">Geometry</span></a>
<ul>
<li class="toclevel-3 tocsection-21"><a href="#border.width"><span class="tocnumber">6.1.1</span> <span class="toctext">border.width</span></a></li>
<li class="toclevel-3 tocsection-22"><a href="#menu.border.width"><span class="tocnumber">6.1.2</span> <span class="toctext">menu.border.width</span></a></li>
<li class="toclevel-3 tocsection-23"><a href="#menu.separator.width"><span class="tocnumber">6.1.3</span> <span class="toctext">menu.separator.width</span></a></li>
<li class="toclevel-3 tocsection-24"><a href="#menu.separator.padding.width"><span class="tocnumber">6.1.4</span> <span class="toctext">menu.separator.padding.width</span></a></li>
<li class="toclevel-3 tocsection-25"><a href="#menu.separator.padding.height"><span class="tocnumber">6.1.5</span> <span class="toctext">menu.separator.padding.height</span></a></li>
<li class="toclevel-3 tocsection-26"><a href="#osd.border.width"><span class="tocnumber">6.1.6</span> <span class="toctext">osd.border.width</span></a></li>
<li class="toclevel-3 tocsection-27"><a href="#window.client.padding.width"><span class="tocnumber">6.1.7</span> <span class="toctext">window.client.padding.width</span></a></li>
<li class="toclevel-3 tocsection-28"><a href="#window.client.padding.height"><span class="tocnumber">6.1.8</span> <span class="toctext">window.client.padding.height</span></a></li>
<li class="toclevel-3 tocsection-29"><a href="#window.handle.width"><span class="tocnumber">6.1.9</span> <span class="toctext">window.handle.width</span></a></li>
<li class="toclevel-3 tocsection-30"><a href="#padding.width"><span class="tocnumber">6.1.10</span> <span class="toctext">padding.width</span></a></li>
<li class="toclevel-3 tocsection-31"><a href="#padding.height"><span class="tocnumber">6.1.11</span> <span class="toctext">padding.height</span></a></li>
<li class="toclevel-3 tocsection-32"><a href="#menu.overlap.x"><span class="tocnumber">6.1.12</span> <span class="toctext">menu.overlap.x</span></a></li>
<li class="toclevel-3 tocsection-33"><a href="#menu.overlap.y"><span class="tocnumber">6.1.13</span> <span class="toctext">menu.overlap.y</span></a></li>
<li class="toclevel-3 tocsection-34"><a href="#menu.overlap"><span class="tocnumber">6.1.14</span> <span class="toctext">menu.overlap</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-35"><a href="#Border_colors"><span class="tocnumber">6.2</span> <span class="toctext">Border colors</span></a>
<ul>
<li class="toclevel-3 tocsection-36"><a href="#window.active.border.color"><span class="tocnumber">6.2.1</span> <span class="toctext">window.active.border.color</span></a></li>
<li class="toclevel-3 tocsection-37"><a href="#window.active.title.separator.color"><span class="tocnumber">6.2.2</span> <span class="toctext">window.active.title.separator.color</span></a></li>
<li class="toclevel-3 tocsection-38"><a href="#window.inactive.border.color"><span class="tocnumber">6.2.3</span> <span class="toctext">window.inactive.border.color</span></a></li>
<li class="toclevel-3 tocsection-39"><a href="#window.inactive.title.separator.color"><span class="tocnumber">6.2.4</span> <span class="toctext">window.inactive.title.separator.color</span></a></li>
<li class="toclevel-3 tocsection-40"><a href="#border.color"><span class="tocnumber">6.2.5</span> <span class="toctext">border.color</span></a></li>
<li class="toclevel-3 tocsection-41"><a href="#window.active.client.color"><span class="tocnumber">6.2.6</span> <span class="toctext">window.active.client.color</span></a></li>
<li class="toclevel-3 tocsection-42"><a href="#window.inactive.client.color"><span class="tocnumber">6.2.7</span> <span class="toctext">window.inactive.client.color</span></a></li>
<li class="toclevel-3 tocsection-43"><a href="#menu.border.color"><span class="tocnumber">6.2.8</span> <span class="toctext">menu.border.color</span></a></li>
<li class="toclevel-3 tocsection-44"><a href="#osd.border.color"><span class="tocnumber">6.2.9</span> <span class="toctext">osd.border.color</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-45"><a href="#Titlebar_colors"><span class="tocnumber">6.3</span> <span class="toctext">Titlebar colors</span></a>
<ul>
<li class="toclevel-3 tocsection-46"><a href="#window.active.label.text.color"><span class="tocnumber">6.3.1</span> <span class="toctext">window.active.label.text.color</span></a></li>
<li class="toclevel-3 tocsection-47"><a href="#window.inactive.label.text.color"><span class="tocnumber">6.3.2</span> <span class="toctext">window.inactive.label.text.color</span></a></li>
<li class="toclevel-3 tocsection-48"><a href="#window.active.button.unpressed.image.color"><span class="tocnumber">6.3.3</span> <span class="toctext">window.active.button.unpressed.image.color</span></a></li>
<li class="toclevel-3 tocsection-49"><a href="#window.active.button.pressed.image.color"><span class="tocnumber">6.3.4</span> <span class="toctext">window.active.button.pressed.image.color</span></a></li>
<li class="toclevel-3 tocsection-50"><a href="#window.active.button.disabled.image.color"><span class="tocnumber">6.3.5</span> <span class="toctext">window.active.button.disabled.image.color</span></a></li>
<li class="toclevel-3 tocsection-51"><a href="#window.active.button.hover.image.color"><span class="tocnumber">6.3.6</span> <span class="toctext">window.active.button.hover.image.color</span></a></li>
<li class="toclevel-3 tocsection-52"><a href="#window.active.button.toggled.unpressed.image.color"><span class="tocnumber">6.3.7</span> <span class="toctext">window.active.button.toggled.unpressed.image.color</span></a></li>
<li class="toclevel-3 tocsection-53"><a href="#window.active.button.toggled.pressed.image.color"><span class="tocnumber">6.3.8</span> <span class="toctext">window.active.button.toggled.pressed.image.color</span></a></li>
<li class="toclevel-3 tocsection-54"><a href="#window.active.button.toggled.hover.image.color"><span class="tocnumber">6.3.9</span> <span class="toctext">window.active.button.toggled.hover.image.color</span></a></li>
<li class="toclevel-3 tocsection-55"><a href="#window.active.button.toggled.image.color"><span class="tocnumber">6.3.10</span> <span class="toctext">window.active.button.toggled.image.color</span></a></li>
<li class="toclevel-3 tocsection-56"><a href="#window.inactive.button.unpressed.image.color"><span class="tocnumber">6.3.11</span> <span class="toctext">window.inactive.button.unpressed.image.color</span></a></li>
<li class="toclevel-3 tocsection-57"><a href="#window.inactive.button.pressed.image.color"><span class="tocnumber">6.3.12</span> <span class="toctext">window.inactive.button.pressed.image.color</span></a></li>
<li class="toclevel-3 tocsection-58"><a href="#window.inactive.button.disabled.image.color"><span class="tocnumber">6.3.13</span> <span class="toctext">window.inactive.button.disabled.image.color</span></a></li>
<li class="toclevel-3 tocsection-59"><a href="#window.inactive.button.hover.image.color"><span class="tocnumber">6.3.14</span> <span class="toctext">window.inactive.button.hover.image.color</span></a></li>
<li class="toclevel-3 tocsection-60"><a href="#window.inactive.button.toggled.unpressed.image.color"><span class="tocnumber">6.3.15</span> <span class="toctext">window.inactive.button.toggled.unpressed.image.color</span></a></li>
<li class="toclevel-3 tocsection-61"><a href="#window.inactive.button.toggled.pressed.image.color"><span class="tocnumber">6.3.16</span> <span class="toctext">window.inactive.button.toggled.pressed.image.color</span></a></li>
<li class="toclevel-3 tocsection-62"><a href="#window.inactive.button.toggled.hover.image.color"><span class="tocnumber">6.3.17</span> <span class="toctext">window.inactive.button.toggled.hover.image.color</span></a></li>
<li class="toclevel-3 tocsection-63"><a href="#window.inactive.button.toggled.image.color"><span class="tocnumber">6.3.18</span> <span class="toctext">window.inactive.button.toggled.image.color</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-64"><a href="#Active_window_textures"><span class="tocnumber">6.4</span> <span class="toctext">Active window textures</span></a>
<ul>
<li class="toclevel-3 tocsection-65"><a href="#window.active.title.bg"><span class="tocnumber">6.4.1</span> <span class="toctext">window.active.title.bg</span></a></li>
<li class="toclevel-3 tocsection-66"><a href="#window.active.label.bg"><span class="tocnumber">6.4.2</span> <span class="toctext">window.active.label.bg</span></a></li>
<li class="toclevel-3 tocsection-67"><a href="#window.active.handle.bg"><span class="tocnumber">6.4.3</span> <span class="toctext">window.active.handle.bg</span></a></li>
<li class="toclevel-3 tocsection-68"><a href="#window.active.grip.bg"><span class="tocnumber">6.4.4</span> <span class="toctext">window.active.grip.bg</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-69"><a href="#Inactive_window_textures"><span class="tocnumber">6.5</span> <span class="toctext">Inactive window textures</span></a>
<ul>
<li class="toclevel-3 tocsection-70"><a href="#window.inactive.title.bg"><span class="tocnumber">6.5.1</span> <span class="toctext">window.inactive.title.bg</span></a></li>
<li class="toclevel-3 tocsection-71"><a href="#window.inactive.label.bg"><span class="tocnumber">6.5.2</span> <span class="toctext">window.inactive.label.bg</span></a></li>
<li class="toclevel-3 tocsection-72"><a href="#window.inactive.handle.bg"><span class="tocnumber">6.5.3</span> <span class="toctext">window.inactive.handle.bg</span></a></li>
<li class="toclevel-3 tocsection-73"><a href="#window.inactive.grip.bg"><span class="tocnumber">6.5.4</span> <span class="toctext">window.inactive.grip.bg</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-74"><a href="#Active_window_button_textures"><span class="tocnumber">6.6</span> <span class="toctext">Active window button textures</span></a>
<ul>
<li class="toclevel-3 tocsection-75"><a href="#window.active.button.unpressed.bg"><span class="tocnumber">6.6.1</span> <span class="toctext">window.active.button.unpressed.bg</span></a></li>
<li class="toclevel-3 tocsection-76"><a href="#window.active.button.pressed.bg"><span class="tocnumber">6.6.2</span> <span class="toctext">window.active.button.pressed.bg</span></a></li>
<li class="toclevel-3 tocsection-77"><a href="#window.active.button.hover.bg"><span class="tocnumber">6.6.3</span> <span class="toctext">window.active.button.hover.bg</span></a></li>
<li class="toclevel-3 tocsection-78"><a href="#window.active.button.disabled.bg"><span class="tocnumber">6.6.4</span> <span class="toctext">window.active.button.disabled.bg</span></a></li>
<li class="toclevel-3 tocsection-79"><a href="#window.active.button.toggled.unpressed.bg"><span class="tocnumber">6.6.5</span> <span class="toctext">window.active.button.toggled.unpressed.bg</span></a></li>
<li class="toclevel-3 tocsection-80"><a href="#window.active.button.toggled.pressed.bg"><span class="tocnumber">6.6.6</span> <span class="toctext">window.active.button.toggled.pressed.bg</span></a></li>
<li class="toclevel-3 tocsection-81"><a href="#window.active.button.toggled.hover.bg"><span class="tocnumber">6.6.7</span> <span class="toctext">window.active.button.toggled.hover.bg</span></a></li>
<li class="toclevel-3 tocsection-82"><a href="#window.active.button.toggled.bg"><span class="tocnumber">6.6.8</span> <span class="toctext">window.active.button.toggled.bg</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-83"><a href="#Inactive_window_button_textures"><span class="tocnumber">6.7</span> <span class="toctext">Inactive window button textures</span></a>
<ul>
<li class="toclevel-3 tocsection-84"><a href="#window.inactive.button.unpressed.bg"><span class="tocnumber">6.7.1</span> <span class="toctext">window.inactive.button.unpressed.bg</span></a></li>
<li class="toclevel-3 tocsection-85"><a href="#window.inactive.button.pressed.bg"><span class="tocnumber">6.7.2</span> <span class="toctext">window.inactive.button.pressed.bg</span></a></li>
<li class="toclevel-3 tocsection-86"><a href="#window.inactive.button.hover.bg"><span class="tocnumber">6.7.3</span> <span class="toctext">window.inactive.button.hover.bg</span></a></li>
<li class="toclevel-3 tocsection-87"><a href="#window.inactive.button.disabled.bg"><span class="tocnumber">6.7.4</span> <span class="toctext">window.inactive.button.disabled.bg</span></a></li>
<li class="toclevel-3 tocsection-88"><a href="#window.inactive.button.toggled.unpressed.bg"><span class="tocnumber">6.7.5</span> <span class="toctext">window.inactive.button.toggled.unpressed.bg</span></a></li>
<li class="toclevel-3 tocsection-89"><a href="#window.inactive.button.toggled.pressed.bg"><span class="tocnumber">6.7.6</span> <span class="toctext">window.inactive.button.toggled.pressed.bg</span></a></li>
<li class="toclevel-3 tocsection-90"><a href="#window.inactive.button.toggled.hover.bg"><span class="tocnumber">6.7.7</span> <span class="toctext">window.inactive.button.toggled.hover.bg</span></a></li>
<li class="toclevel-3 tocsection-91"><a href="#window.inactive.button.toggled.bg"><span class="tocnumber">6.7.8</span> <span class="toctext">window.inactive.button.toggled.bg</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-92"><a href="#Menu_colors"><span class="tocnumber">6.8</span> <span class="toctext">Menu colors</span></a>
<ul>
<li class="toclevel-3 tocsection-93"><a href="#menu.title.text.color"><span class="tocnumber">6.8.1</span> <span class="toctext">menu.title.text.color</span></a></li>
<li class="toclevel-3 tocsection-94"><a href="#menu.items.text.color"><span class="tocnumber">6.8.2</span> <span class="toctext">menu.items.text.color</span></a></li>
<li class="toclevel-3 tocsection-95"><a href="#menu.items.disabled.text.color"><span class="tocnumber">6.8.3</span> <span class="toctext">menu.items.disabled.text.color</span></a></li>
<li class="toclevel-3 tocsection-96"><a href="#menu.items.active.text.color"><span class="tocnumber">6.8.4</span> <span class="toctext">menu.items.active.text.color</span></a></li>
<li class="toclevel-3 tocsection-97"><a href="#menu.items.active.disabled.text.color"><span class="tocnumber">6.8.5</span> <span class="toctext">menu.items.active.disabled.text.color</span></a></li>
<li class="toclevel-3 tocsection-98"><a href="#menu.separator.color"><span class="tocnumber">6.8.6</span> <span class="toctext">menu.separator.color</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-99"><a href="#Menu_textures"><span class="tocnumber">6.9</span> <span class="toctext">Menu textures</span></a>
<ul>
<li class="toclevel-3 tocsection-100"><a href="#menu.items.bg"><span class="tocnumber">6.9.1</span> <span class="toctext">menu.items.bg</span></a></li>
<li class="toclevel-3 tocsection-101"><a href="#menu.items.active.bg"><span class="tocnumber">6.9.2</span> <span class="toctext">menu.items.active.bg</span></a></li>
<li class="toclevel-3 tocsection-102"><a href="#menu.title.bg"><span class="tocnumber">6.9.3</span> <span class="toctext">menu.title.bg</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-103"><a href="#OSD_textures"><span class="tocnumber">6.10</span> <span class="toctext">OSD textures</span></a>
<ul>
<li class="toclevel-3 tocsection-104"><a href="#osd.bg"><span class="tocnumber">6.10.1</span> <span class="toctext">osd.bg</span></a></li>
<li class="toclevel-3 tocsection-105"><a href="#osd.label.bg"><span class="tocnumber">6.10.2</span> <span class="toctext">osd.label.bg</span></a></li>
<li class="toclevel-3 tocsection-106"><a href="#osd.hilight.bg"><span class="tocnumber">6.10.3</span> <span class="toctext">osd.hilight.bg</span></a></li>
<li class="toclevel-3 tocsection-107"><a href="#osd.unhilight.bg"><span class="tocnumber">6.10.4</span> <span class="toctext">osd.unhilight.bg</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-108"><a href="#OSD_colors"><span class="tocnumber">6.11</span> <span class="toctext">OSD colors</span></a>
<ul>
<li class="toclevel-3 tocsection-109"><a href="#osd.label.text.color"><span class="tocnumber">6.11.1</span> <span class="toctext">osd.label.text.color</span></a></li>
<li class="toclevel-3 tocsection-110"><a href="#osd.hilight.bg.color"><span class="tocnumber">6.11.2</span> <span class="toctext">osd.hilight.bg.color</span></a></li>
<li class="toclevel-3 tocsection-111"><a href="#osd.unhilight.bg.color"><span class="tocnumber">6.11.3</span> <span class="toctext">osd.unhilight.bg.color</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-112"><a href="#Text_justification"><span class="tocnumber">6.12</span> <span class="toctext">Text justification</span></a>
<ul>
<li class="toclevel-3 tocsection-113"><a href="#window.label.text.justify"><span class="tocnumber">6.12.1</span> <span class="toctext">window.label.text.justify</span></a></li>
<li class="toclevel-3 tocsection-114"><a href="#menu.title.text.justify"><span class="tocnumber">6.12.2</span> <span class="toctext">menu.title.text.justify</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-115"><a href="#Text_shadows"><span class="tocnumber">6.13</span> <span class="toctext">Text shadows</span></a>
<ul>
<li class="toclevel-3 tocsection-116"><a href="#window.active.label.text.font"><span class="tocnumber">6.13.1</span> <span class="toctext">window.active.label.text.font</span></a></li>
<li class="toclevel-3 tocsection-117"><a href="#window.inactive.label.text.font"><span class="tocnumber">6.13.2</span> <span class="toctext">window.inactive.label.text.font</span></a></li>
<li class="toclevel-3 tocsection-118"><a href="#menu.items.font"><span class="tocnumber">6.13.3</span> <span class="toctext">menu.items.font</span></a></li>
<li class="toclevel-3 tocsection-119"><a href="#menu.title.text.font"><span class="tocnumber">6.13.4</span> <span class="toctext">menu.title.text.font</span></a></li>
<li class="toclevel-3 tocsection-120"><a href="#osd.label.text.font"><span class="tocnumber">6.13.5</span> <span class="toctext">osd.label.text.font</span></a></li>
</ul>
</li>
</ul>
</li>
<li class="toclevel-1 tocsection-121"><a href="#Dialogs"><span class="tocnumber">7</span> <span class="toctext">Dialogs</span></a></li>
<li class="toclevel-1 tocsection-122"><a href="#Button_images"><span class="tocnumber">8</span> <span class="toctext">Button images</span></a>
<ul>
<li class="toclevel-2 tocsection-123"><a href="#Maximized_button"><span class="tocnumber">8.1</span> <span class="toctext">Maximized button</span></a>
<ul>
<li class="toclevel-3 tocsection-124"><a href="#max.xbm"><span class="tocnumber">8.1.1</span> <span class="toctext">max.xbm</span></a></li>
<li class="toclevel-3 tocsection-125"><a href="#max_toggled.xbm"><span class="tocnumber">8.1.2</span> <span class="toctext">max_toggled.xbm</span></a></li>
<li class="toclevel-3 tocsection-126"><a href="#max_pressed.xbm"><span class="tocnumber">8.1.3</span> <span class="toctext">max_pressed.xbm</span></a></li>
<li class="toclevel-3 tocsection-127"><a href="#max_disabled.xbm"><span class="tocnumber">8.1.4</span> <span class="toctext">max_disabled.xbm</span></a></li>
<li class="toclevel-3 tocsection-128"><a href="#max_hover.xbm"><span class="tocnumber">8.1.5</span> <span class="toctext">max_hover.xbm</span></a></li>
<li class="toclevel-3 tocsection-129"><a href="#max_toggled_pressed.xbm"><span class="tocnumber">8.1.6</span> <span class="toctext">max_toggled_pressed.xbm</span></a></li>
<li class="toclevel-3 tocsection-130"><a href="#max_toggled_hover.xbm"><span class="tocnumber">8.1.7</span> <span class="toctext">max_toggled_hover.xbm</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-131"><a href="#Iconify_button"><span class="tocnumber">8.2</span> <span class="toctext">Iconify button</span></a>
<ul>
<li class="toclevel-3 tocsection-132"><a href="#iconify.xbm"><span class="tocnumber">8.2.1</span> <span class="toctext">iconify.xbm</span></a></li>
<li class="toclevel-3 tocsection-133"><a href="#iconify_pressed.xbm"><span class="tocnumber">8.2.2</span> <span class="toctext">iconify_pressed.xbm</span></a></li>
<li class="toclevel-3 tocsection-134"><a href="#iconify_disabled.xbm"><span class="tocnumber">8.2.3</span> <span class="toctext">iconify_disabled.xbm</span></a></li>
<li class="toclevel-3 tocsection-135"><a href="#iconify_hover.xbm"><span class="tocnumber">8.2.4</span> <span class="toctext">iconify_hover.xbm</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-136"><a href="#Close_button"><span class="tocnumber">8.3</span> <span class="toctext">Close button</span></a>
<ul>
<li class="toclevel-3 tocsection-137"><a href="#close.xbm"><span class="tocnumber">8.3.1</span> <span class="toctext">close.xbm</span></a></li>
<li class="toclevel-3 tocsection-138"><a href="#close_pressed.xbm"><span class="tocnumber">8.3.2</span> <span class="toctext">close_pressed.xbm</span></a></li>
<li class="toclevel-3 tocsection-139"><a href="#close_disabled.xbm"><span class="tocnumber">8.3.3</span> <span class="toctext">close_disabled.xbm</span></a></li>
<li class="toclevel-3 tocsection-140"><a href="#close_hover.xbm"><span class="tocnumber">8.3.4</span> <span class="toctext">close_hover.xbm</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-141"><a href="#All-desktops_button"><span class="tocnumber">8.4</span> <span class="toctext">All-desktops button</span></a>
<ul>
<li class="toclevel-3 tocsection-142"><a href="#desk.xbm"><span class="tocnumber">8.4.1</span> <span class="toctext">desk.xbm</span></a></li>
<li class="toclevel-3 tocsection-143"><a href="#desk_toggled.xbm"><span class="tocnumber">8.4.2</span> <span class="toctext">desk_toggled.xbm</span></a></li>
<li class="toclevel-3 tocsection-144"><a href="#desk_pressed.xbm"><span class="tocnumber">8.4.3</span> <span class="toctext">desk_pressed.xbm</span></a></li>
<li class="toclevel-3 tocsection-145"><a href="#desk_disabled.xbm"><span class="tocnumber">8.4.4</span> <span class="toctext">desk_disabled.xbm</span></a></li>
<li class="toclevel-3 tocsection-146"><a href="#desk_hover.xbm"><span class="tocnumber">8.4.5</span> <span class="toctext">desk_hover.xbm</span></a></li>
<li class="toclevel-3 tocsection-147"><a href="#desk_toggled_pressed.xbm"><span class="tocnumber">8.4.6</span> <span class="toctext">desk_toggled_pressed.xbm</span></a></li>
<li class="toclevel-3 tocsection-148"><a href="#desk_toggled_hover.xbm"><span class="tocnumber">8.4.7</span> <span class="toctext">desk_toggled_hover.xbm</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-149"><a href="#Shade_button"><span class="tocnumber">8.5</span> <span class="toctext">Shade button</span></a>
<ul>
<li class="toclevel-3 tocsection-150"><a href="#shade.xbm"><span class="tocnumber">8.5.1</span> <span class="toctext">shade.xbm</span></a></li>
<li class="toclevel-3 tocsection-151"><a href="#shade_toggled.xbm"><span class="tocnumber">8.5.2</span> <span class="toctext">shade_toggled.xbm</span></a></li>
<li class="toclevel-3 tocsection-152"><a href="#shade_pressed.xbm"><span class="tocnumber">8.5.3</span> <span class="toctext">shade_pressed.xbm</span></a></li>
<li class="toclevel-3 tocsection-153"><a href="#shade_disabled.xbm"><span class="tocnumber">8.5.4</span> <span class="toctext">shade_disabled.xbm</span></a></li>
<li class="toclevel-3 tocsection-154"><a href="#shade_hover.xbm"><span class="tocnumber">8.5.5</span> <span class="toctext">shade_hover.xbm</span></a></li>
<li class="toclevel-3 tocsection-155"><a href="#shade_toggled_pressed.xbm"><span class="tocnumber">8.5.6</span> <span class="toctext">shade_toggled_pressed.xbm</span></a></li>
<li class="toclevel-3 tocsection-156"><a href="#shade_toggled_hover.xbm"><span class="tocnumber">8.5.7</span> <span class="toctext">shade_toggled_hover.xbm</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-157"><a href="#Submenu_bullet"><span class="tocnumber">8.6</span> <span class="toctext">Submenu bullet</span></a>
<ul>
<li class="toclevel-3 tocsection-158"><a href="#bullet.xbm"><span class="tocnumber">8.6.1</span> <span class="toctext">bullet.xbm</span></a></li>
</ul>
</li>
</ul>
</li>
</ul>
</td></tr></table>
<h1> <span class="mw-headline" id="Theme_installation"> Theme installation </span></h1>
<p>Openbox themes are stored in one of the following places:
</p>
<ul><li> System-wide themes are installed in <code>/usr/share/themes</code>.
</li><li> User-specific themes can be installed in <code>~/.local/share/themes</code> or in <code>~/.themes</code>.
</li></ul>
<h1> <span class="mw-headline" id="Theme_selection"> Theme selection </span></h1>
<p>Choosing a theme to use is simple with the <a href="{{site.baseurl}}/obconf" title="ObConf:About">ObConf</a> tool.  Alternatively, there are a number of <a href="{{site.baseurl}}/pipemenus" title="Openbox:Pipemenus">Pipe menus</a> which can perform this function for you.
</p><p>If you wish to set the theme by hand, you need to edit the &lt;name&gt; key in the &lt;theme&gt; section of your <code>rc.xml</code> file.  The <a href="Configuration" title="Configuration" class="mw-redirect">Configuration guide</a> is a good place to start.
</p>
<h1> <span class="mw-headline" id="Theme_file_structure"> Theme file structure </span></h1>
<p>The file structure goes like this:
</p>
<pre>ThemesDirectory  (such as /usr/share/themes)
 |
 +-&gt; ThemeName  (This is the name of the theme, such as Clearlooks)
      |
      +-&gt; openbox-3  (This the type of the theme - it's for Openbox 3!)
           |
           |-&gt; themerc  (This is the main theme file, documented in this page)
           |
           |-&gt; max.xbm  (These are optional xbm masks for the titlebar buttons)
           |-&gt; close.xbm
           ...
           +-&gt; shade.xbm
</pre>
<p><img alt="Important.png" src="{{site.baseurl}}/assets/images/Important.png" width="16" height="17"/> <a href="{{site.baseurl}}/obconf" title="ObConf:About"> ObConf</a> can create a <code>.obt</code> Openbox Theme Archive file out of a theme for distribution, and can also install <code>.obt</code> files very easily.
</p>
<h1> <span class="mw-headline" id="Example"> Example </span></h1>
<p>This is not a real theme, and if you used it, there is no guarantee it will look good in any way.  It is just meant to show all of the options and how they relate to eachother.
</p>

<code>
<pre>
# Window geometry
<a href="#padding.width">padding.width</a>: 2
<a href="#padding.height">padding.height</a>: 2
<a href="#border.width">border.width</a>: 1
<a href="#window.client.padding.width">window.client.padding.width</a>: 1
<a href="#window.client.padding.height">window.client.padding.height</a>: 0
<a href="#window.handle.width">window.handle.width</a>: 3

#Menu geometry
<a href="#menu.border.width">menu.border.width</a>: 1
<a href="#menu.overlap.x">menu.overlap.x</a>: 0
<a href="#menu.overlap.y">menu.overlap.y</a>: 0

# Border colors
<a href="#window.active.border.color">window.active.border.color</a>: #000000
<a href="#window.inactive.border.color">window.inactive.border.color</a>: #000000
<a href="#menu.border.color">menu.border.color</a>: #000000
<a href="#window.active.client.color">window.active.client.color</a>: #ffffff
<a href="#window.inactive.client.color">window.inactive.client.color</a>: #cccccc

# Text shadows
<a href="#window.active.label.text.font">window.active.label.text.font</a>: shadow=y:shadowtint=70:shadowoffset=1
<a href="#window.inactive.label.text.font">window.inactive.label.text.font</a>: shadow=y:shadowtint=20:shadowoffset=1
<a href="#menu.items.font">menu.items.font</a>: shadow=n
<a href="#menu.title.text.font">menu.title.text.font</a>: shadow=y:shadowtint=70:shadowoffset=1

# Window title justification
<a href="#window.label.text.justify">window.label.text.justify</a>: Center

# Active window
<a href="#window.active.title.bg">window.active.title.bg</a>: Raised Gradient Vertical Interlaced
<a href="#window.active.title.bg">window.active.title.bg</a>.color: #658fb5
<a href="#window.active.title.bg">window.active.title.bg</a>.colorTo: #4d6982
<a href="#window.active.title.bg">window.active.title.bg</a>.interlace.color: #7788cc

<a href="#window.active.label.bg">window.active.label.bg</a>: Parentrelative
<a href="#window.active.label.text.color">window.active.label.text.color</a>: #ffffff

<a href="#window.active.handle.bg">window.active.handle.bg</a>: Raised Gradient Vertical
<a href="#window.active.handle.bg">window.active.handle.bg</a>.color: #658fb5
<a href="#window.active.handle.bg">window.active.handle.bg</a>.colorTo: #4d6982

<a href="#window.active.grip.bg">window.active.grip.bg</a>: Raised Gradient Vertical
<a href="#window.active.grip.bg">window.active.grip.bg</a>.color: #658fb5
<a href="#window.active.grip.bg">window.active.grip.bg</a>.colorTo: #4d6982

<a href="#window.active.button.unpressed.bg">window.active.button.unpressed.bg</a>: Flat Gradient Vertical Border
<a href="#window.active.button.unpressed.bg">window.active.button.unpressed.bg</a>.color: #6993b9
<a href="#window.active.button.unpressed.bg">window.active.button.unpressed.bg</a>.colorTo: #55799a
<a href="#window.active.button.unpressed.bg">window.active.button.unpressed.bg</a>.border.color: #3d4c5a
<a href="#window.active.button.unpressed.image.color">window.active.button.unpressed.image.color</a>: #ffffff

<a href="#window.active.button.pressed.bg">window.active.button.pressed.bg</a>: Flat Gradient Vertical Border
<a href="#window.active.button.pressed.bg">window.active.button.pressed.bg</a>.color: #537797
<a href="#window.active.button.pressed.bg">window.active.button.pressed.bg</a>.colorTo: #50708e
<a href="#window.active.button.pressed.bg">window.active.button.pressed.bg</a>.border.color: #3d4c5a
<a href="#window.active.button.pressed.image.color">window.active.button.pressed.image.color</a>: #ffffff

<a href="#window.active.button.disabled.bg">window.active.button.disabled.bg</a>: Flat Gradient Vertical Border
<a href="#window.active.button.disabled.bg">window.active.button.disabled.bg</a>.color: #537797
<a href="#window.active.button.disabled.bg">window.active.button.disabled.bg</a>.colorTo: #50708e
<a href="#window.active.button.disabled.bg">window.active.button.disabled.bg</a>.border.color: #3d4c5a
<a href="#window.active.button.disabled.image.color">window.active.button.disabled.image.color</a>: #3d4c5a

<a href="#window.active.button.hover.bg">window.active.button.hover.bg</a>: Flat Gradient Vertical Border
<a href="#window.active.button.hover.bg">window.active.button.hover.bg</a>.color: #6993b9
<a href="#window.active.button.hover.bg">window.active.button.hover.bg</a>.colorTo: #55799a
<a href="#window.active.button.hover.bg">window.active.button.hover.bg</a>.border.color: #3d4c5a
<a href="#window.active.button.hover.image.color">window.active.button.hover.image.color</a>: #ffffff

<a href="#window.active.button.toggled.unpressed.bg">window.active.button.toggled.unpressed.bg</a>: Flat Gradient Vertical Border
<a href="#window.active.button.toggled.unpressed.bg">window.active.button.toggled.unpressed.bg</a>.color: #6993b9
<a href="#window.active.button.toggled.unpressed.bg">window.active.button.toggled.unpressed.bg</a>.colorTo: #55799a
<a href="#window.active.button.toggled.unpressed.bg">window.active.button.toggled.unpressed.bg</a>.border.color: #3d4c5a
<a href="#window.active.button.toggled.unpressed.image.color">window.active.button.toggled.unpressed.image.color</a>: #cccccc

<a href="#window.active.button.toggled.pressed.bg">window.active.button.toggled.pressed.bg</a>: Flat Gradient Vertical Border
<a href="#window.active.button.toggled.pressed.bg">window.active.button.toggled.pressed.bg</a>.color: #537797
<a href="#window.active.button.toggled.pressed.bg">window.active.button.toggled.pressed.bg</a>.colorTo: #50708e
<a href="#window.active.button.toggled.pressed.bg">window.active.button.toggled.pressed.bg</a>.border.color: #3d4c5a
<a href="#window.active.button.toggled.pressed.image.color">window.active.button.toggled.pressed.image.color</a>: #ffffff

<a href="#window.active.button.toggled.hover.bg">window.active.button.toggled.hover.bg</a>: Flat Gradient Vertical Border
<a href="#window.active.button.toggled.hover.bg">window.active.button.toggled.hover.bg</a>.color: #6993b9
<a href="#window.active.button.toggled.hover.bg">window.active.button.toggled.hover.bg</a>.colorTo: #55799a
<a href="#window.active.button.toggled.hover.bg">window.active.button.toggled.hover.bg</a>.border.color: #3d4c5a
<a href="#window.active.button.toggled.hover.image.color">window.active.button.toggled.hover.image.color</a>: #ffffff

# Inactive windows
<a href="#window.inactive.title.bg">window.inactive.title.bg</a>: Raised Gradient Vertical
<a href="#window.inactive.title.bg">window.inactive.title.bg</a>.color: #f1eeea
<a href="#window.inactive.title.bg">window.inactive.title.bg</a>.colorTo: #d8cfc7

<a href="#window.inactive.label.bg">window.inactive.label.bg</a>: Parentrelative
<a href="#window.inactive.label.text.color">window.inactive.label.text.color</a>: #000000

<a href="#window.inactive.handle.bg">window.inactive.handle.bg</a>: Raised Gradient Vertical
<a href="#window.inactive.handle.bg">window.inactive.handle.bg</a>.color: #f1eeea
<a href="#window.inactive.handle.bg">window.inactive.handle.bg</a>.colorTo: #d8cfc7

<a href="#window.inactive.grip.bg">window.inactive.grip.bg</a>: Raised Gradient Vertical
<a href="#window.inactive.grip.bg">window.inactive.grip.bg</a>.color: #f1eeea
<a href="#window.inactive.grip.bg">window.inactive.grip.bg</a>.colorTo: #d8cfc7

<a href="#window.inactive.button.unpressed.bg">window.inactive.button.unpressed.bg</a>: Flat Gradient Vertical Border
<a href="#window.inactive.button.unpressed.bg">window.inactive.button.unpressed.bg</a>.color: #efebe7
<a href="#window.inactive.button.unpressed.bg">window.inactive.button.unpressed.bg</a>.colorTo: #ddd6ce
<a href="#window.inactive.button.unpressed.bg">window.inactive.button.unpressed.bg</a>.border.color: #8f8173
<a href="#window.inactive.button.unpressed.image.color">window.inactive.button.unpressed.image.color</a>: #000000

<a href="#window.inactive.button.pressed.bg">window.inactive.button.pressed.bg</a>: Flat Gradient Vertical Border
<a href="#window.inactive.button.pressed.bg">window.inactive.button.pressed.bg</a>.color: #efebe7
<a href="#window.inactive.button.pressed.bg">window.inactive.button.pressed.bg</a>.colorTo: #ddd6ce
<a href="#window.inactive.button.pressed.bg">window.inactive.button.pressed.bg</a>.border.color: #8f8173
<a href="#window.inactive.button.pressed.image.color">window.inactive.button.pressed.image.color</a>: #000000

<a href="#window.inactive.button.disabled.bg">window.inactive.button.disabled.bg</a>: Flat Gradient Vertical Border
<a href="#window.inactive.button.disabled.bg">window.inactive.button.disabled.bg</a>.color: #efebe7
<a href="#window.inactive.button.disabled.bg">window.inactive.button.disabled.bg</a>.colorTo: #ddd6ce
<a href="#window.inactive.button.disabled.bg">window.inactive.button.disabled.bg</a>.border.color: #8f8173
<a href="#window.inactive.button.disabled.image.color">window.inactive.button.disabled.image.color</a>: #8f8173

<a href="#window.inactive.button.toggled.bg">window.inactive.button.toggled.bg</a>: Flat Gradient Vertical Border
<a href="#window.inactive.button.toggled.bg">window.inactive.button.toggled.bg</a>.color: #efebe7
<a href="#window.inactive.button.toggled.bg">window.inactive.button.toggled.bg</a>.colorTo: #ddd6ce
<a href="#window.inactive.button.toggled.bg">window.inactive.button.toggled.bg</a>.border.color: #8f8173
<a href="#window.inactive.button.toggled.image.color">window.inactive.button.toggled.image.color</a>: #000000

<a href="#window.inactive.button.hover.bg">window.inactive.button.hover.bg</a>: Flat Gradient Vertical Border
<a href="#window.inactive.button.hover.bg">window.inactive.button.hover.bg</a>.color: #efebe7
<a href="#window.inactive.button.hover.bg">window.inactive.button.hover.bg</a>.colorTo: #ddd6ce
<a href="#window.inactive.button.hover.bg">window.inactive.button.hover.bg</a>.border.color: #8f8173
<a href="#window.inactive.button.hover.image.color">window.inactive.button.hover.image.color</a>: #000000

<a href="#window.inactive.button.toggled.unpressed.bg">window.inactive.button.toggled.unpressed.bg</a>: Flat Gradient Vertical Border
<a href="#window.inactive.button.toggled.unpressed.bg">window.inactive.button.toggled.unpressed.bg</a>.color: #efebe7
<a href="#window.inactive.button.toggled.unpressed.bg">window.inactive.button.toggled.unpressed.bg</a>.colorTo: #ddd6ce
<a href="#window.inactive.button.toggled.unpressed.bg">window.inactive.button.toggled.unpressed.bg</a>.border.color: #8f8173
<a href="#window.inactive.button.toggled.unpressed.image.color">window.inactive.button.toggled.unpressed.image.color</a>: #000000

<a href="#window.inactive.button.toggled.pressed.bg">window.inactive.button.toggled.pressed.bg</a>: Flat Gradient Vertical Border
<a href="#window.inactive.button.toggled.pressed.bg">window.inactive.button.toggled.pressed.bg</a>.color: #efebe7
<a href="#window.inactive.button.toggled.pressed.bg">window.inactive.button.toggled.pressed.bg</a>.colorTo: #ddd6ce
<a href="#window.inactive.button.toggled.pressed.bg">window.inactive.button.toggled.pressed.bg</a>.border.color: #8f8173
<a href="#window.inactive.button.toggled.pressed.image.color">window.inactive.button.pressed.toggled.image.color</a>: #000000

<a href="#window.inactive.button.toggled.hover.bg">window.inactive.button.toggled.hover.bg</a>: Flat Gradient Vertical Border
<a href="#window.inactive.button.toggled.hover.bg">window.inactive.button.toggled.hover.bg</a>.color: #efebe7
<a href="#window.inactive.button.toggled.hover.bg">window.inactive.button.toggled.hover.bg</a>.colorTo: #ddd6ce
<a href="#window.inactive.button.toggled.hover.bg">window.inactive.button.toggled.hover.bg</a>.border.color: #8f8173
<a href="#window.inactive.button.toggled.hover.image.color">window.inactive.button.toggled.hover.image.color</a>: #000000

# Menus
<a href="#menu.title.bg">menu.title.bg</a>: Raised Gradient Vertical
<a href="#menu.title.bg">menu.title.bg</a>.color: #658fb5
<a href="#menu.title.bg">menu.title.bg</a>.colorTo: #4d6982
<a href="#menu.title.text.color">menu.title.text.color</a>: #ffffff
<a href="#menu.title.text.justify">menu.title.text.justify</a>: Left
</pre>
<pre><a href="#menu.separator.color">menu.separator.color</a>: #444444
<a href="#menu.separator.width">menu.separator.width</a>: 1
<a href="#menu.separator.padding.width">menu.separator.padding.width</a>: 6
<a href="#menu.separator.padding.height">menu.separator.padding.height</a>: 3

<a href="#menu.items.bg">menu.items.bg</a>: Flat Solid
<a href="#menu.items.bg">menu.items.bg</a>.color: #f8f5f2
<a href="#menu.items.text.color">menu.items.text.color</a>: #000000
<a href="#menu.items.disabled.text.color">menu.items.disabled.text.color</a>: #aaaaaa

<a href="#menu.items.active.bg">menu.items.active.bg</a>: Flat Gradient Vertical
<a href="#menu.items.active.bg">menu.items.active.bg</a>.color: #628cb2
<a href="#menu.items.active.bg">menu.items.active.bg</a>.colorTo: #50708d
<a href="#menu.items.active.text.color">menu.items.active.text.color</a>: #ffffff
<a href="#menu.items.active.disabled.text.color">menu.items.active.disabled.text.color</a>: #aaaaaa
</pre>
</code>

<h1> <span class="mw-headline" id="Data_types"> Data types </span></h1>
<h2> <span class="mw-headline" id="Integers"> Integers </span></h2>
<p>These are simply numbers like <code>1</code> or <code>42</code>.  They can be prime, composite, or zero.
</p><p>Example:
</p>
<code><pre>window.handle.width: 3</pre></code>
<h2> <span class="mw-headline" id="Justification"> Justification </span></h2>
<p>These determines how to justify text.  Valid options are <code>Left</code>, <code>Center</code> and <code>Right</code>.
</p><p>Example:
</p>
<code><pre>menu.title.text.justify: Left</pre></code>
<h2> <span class="mw-headline" id="Textures"> Textures </span></h2>
<p>These determine the visual look of an element.  They are the most complicated part of a theme file, but they are still not too tricky.
</p><p>Textures are specified through a text string with a number of fields.  Capitalization is not significant.  The format is as follows (<code>|</code> stands for "or" and <code>[]</code> surround optional fields):
</p>
<pre>parentrelative | ((solid | gradient gradient-type) [border] [interlaced])</pre>
<p>We'll dissect what that means exactly.
</p>
<h3> <span class="mw-headline" id="Parentrelative"> Parentrelative </span></h3>
<p>Parentrelative means that the element inherits its colors from the textures behind it.  It is, in essence, completely transparent .  Some theme elements can be parentrelative, and some can not.  The documentation for each one will tell you if you can use parentrelative for it or not.
</p><p>Example:
</p>
<code><pre>
window.active.label.bg: Parentrelative
window.inactive.label.bg: Parentrelative Raised
</pre></code>
<h3> <span class="mw-headline" id="Solid"> Solid </span></h3>
<p>Solid means that the background of the texture is filled with a single color.  The texture <i>must</i> be accompanied by a single <a href="#Colors"> color field</a>.
</p><p>Example:
</p>
<code><pre>menu.items.bg:       Solid Flat
menu.items.bg.color: #f8f5f2</pre></code>
<h3> <span class="mw-headline" id="Gradients"> Gradients </span></h3>
<p>When a gradient is specified, it must be followed by the gradient's type.  Gradients all use two <a href="#Colors"> color fields</a>: <code>color</code> and <code>colorTo</code> and must also be accompanied by these.
</p><p>Valid gradient types are:
</p>
<ul><li> Diagonal - A gradient from the top left corner to the bottom right corner
</li><li> CrossDiagonal - A gradient from the top right corner to the bottom left corner
</li><li> Pyramid - A gradient that starts in all four corners and smooths to the center of the texture
</li><li> Horizontal - A gradient from the left edge to the right
</li><li> MirrorHorizontal - A gradient from the left edge to the middle, and then reversed to the right edge
</li><li> Vertical - A gradient from the top edge to the bottom
</li><li> SplitVertical - A gradient split in the middle that goes out toward the top and bottom edges
</li></ul>
<p>Example:
</p>
<code><pre>menu.title.bg:         Gradient Vertical Raised 
menu.title.bg.color:   #658fb5
menu.title.bg.colorTo: #4d6982</pre></code>
<h4> <span class="mw-headline" id="SplitVertical_gradients"> SplitVertical gradients </span></h4>
<p>SplitVertical gradients have 2 optional, addition <a href="#Colors">color fields</a>: <code>color.splitTo</code> and <code>colorTo.splitTo</code>.  These colors are the light colors used on the far top and bottom of the SplitVertical gradient.  When these are omitted, then the default values for these are <code>color</code> * 5/4, and <code>colorTo</code> * 17/16.
</p><p>Example:
</p>
<code><pre>menu.title.bg:                 Gradient SplitVertical Raised 
menu.title.bg.color:           #658fb5
menu.title.bg.color.splitTo:   #7595b9
menu.title.bg.colorTo:         #4d6982
menu.title.bg.colorTo.splitTo: #557485</pre></code>
<h3> <span class="mw-headline" id="Border"> Border </span></h3>
<p>Borders can be used on both solid and gradient textures.  Valid options for the border are <code>Flat</code>, <code>Raised</code> and <code>Sunken</code>.  When a border is not specified, <code>Raised</code> is assumed.
</p><p>Flat, by default, means no border at all.  To add a flat solid border, use <code>Flat Border</code>.  When using a flat border, the texture <i>must</i> be accompanied by a <a href="#Colors"> border color</a>.
</p><p>Example:
</p>
<code><pre>window.active.button.unpressed.bg:              Gradient Vertical Flat Border
window.active.button.unpressed.bg.border.color: #3d4c5a</pre></code>
<p>Raised and Sunken have two bevel options available to them.  By default, a bevel is drawn around the very outside of the texture.  If <code>Bevel2</code> is specified, then the bevel is drawn slightly in from the edge.  This can be used to animate button presses/toggled states.
</p><p>The strength of the bevel highlights can also be determined by the theme, by using the <code>highlight</code> and <code>shadow</code> fields:
</p><p>The <code>highlight</code> field specifies the strength of the light bevel.  It is a value above or equal to 0, where 0 makes no highlight at all, 256 makes the highlight color 100% brighter, 512 makes the highlight color 200% brighter, and so on.  The default <code>highlight</code> is 128 (which is a 50% increase in brightness).
</p><p>The <code>shadow</code> field specifies the strength of the dark bevel.  It is a value between 0 and 256, where 0 makes no shadow at all, and 256 makes a completely black shadow (100% decreased brightness).  The default <code>shadow</code> is 64 (which is a 25% decrease in brightness).
</p><p>Example:
</p>
<code><pre>window.inactive.button.disabled.bg:           Gradient Diagonal Raised
window.inactive.button.disabled.bg.color:     rgb:50/54/58
window.inactive.button.disabled.bg.colorTo:   black
window.inactive.button.disabled.bg.highlight: 128
window.inactive.button.disabled.bg.shadow:    64

window.inactive.button.toggled.pressed.bg:          Gradient Diagonal Raised Bevel2
window.inactive.button.toggled.pressed.bg.color:    rgb:50/54/58
window.inactive.button.toggled.pressed.bg.colorTo:  black</pre></code>
<h3> <span class="mw-headline" id="Interlaced"> Interlaced </span></h3>
<p>Interlaced textures have a solid line drawn horizontally every second row.  When you specify <code>interlaced</code>, the texture <i>must</i> be accompanied by an <a href="#Colors"> interlaced color</a>.
</p><p>Example:
</p>
<code><pre>window.inactive.title.bg: Solid Flat Interlaced
window.inactive.title.bg.color: #f5f5f5
window.inactive.title.bg.interlace.color: #f6f6f6</pre></code>
<h2> <span class="mw-headline" id="Colors"> Colors </span></h2>
<p>Colors can be specified by name or by their hexadecimal RGB value.
</p>
<h3> <span class="mw-headline" id="Color_names"> Color names </span></h3>
<p>Wikipedia has a <a rel="nofollow" class="external text" href="http://en.wikipedia.org/wiki/Web_colors#X11_color_names">list of X11 color names</a>, and further <a rel="nofollow" class="external text" href="http://en.wikipedia.org/wiki/X11_color_names">details here</a>.
</p><p>Example:
</p>
<code><pre>menu.items.active.text.color: white
window.active.grip.bg.color: grey40
</pre></code>
<h3> <span class="mw-headline" id="RGB_values"> RGB values </span></h3>
<p>Colors can be specified by hexadecimal RGB values in two ways.  The most familiar is through syntax similar to HTML, <code>#rrggbb</code>.  However you may also use the format <code>rgb:rr/bb/gg</code>.  What goes inside them for the <code>rr</code>, <code>gg</code> and <code>bb</code> values is identical.
</p><p>Example:
</p>
<code><pre>window.active.grip.bg.color: #658fb5
window.active.label.text.color: #fff
menu.items.active.bg.color: rgb:90/94/98
window.active.title.bg.color: rgb:6/9/c</pre></code>
<p>Note that <code>#fff</code> is equivalent to <code>#f0f0f0</code>, <i>not</i> to <code>#ffffff</code>.
</p>
<h2> <span class="mw-headline" id="Text_shadow_strings"> Text shadow strings </span></h2>
<p>Text shadows are specified through a specially formatted text string.
</p><p>There are three properties that can be placed in the string: <code>shadow</code>, <code>shadowtint</code> and <code>shadowoffset</code>.
</p><p>Shadow is a boolean value.  It defaults to no.  You can enable a shadow for text by using <code>shadow=y</code>.
</p><p>Shadowtint specifies the alpha value for the shadow as well as its color (black or white). It defaults to black and 50% opacity.  You can specify the shadowtint by using <code>shadowtint=70</code>.  The tint can be any integer between -100 and 100.  0 means 0% opacity (invisible), 100 means 100% opacity and black, -100 means 100% opacity and white.
</p><p>Shadowoffset specifies how far the shadow is should be offset from the text.  It defaults to 1.  It can be positive to move the shadow and and right from the text, or negative to move it up and left from the text.  You can set the shadowoffset by using <code>shadowoffset=2</code>.  A shadowoffset of 0 will place it exactly behind the text and it will not be visible.
</p><p>The text shadow string used to be for choosing a font for the theme as well.  Any other properties in the string, such as those for choosing a font, are ignored.
</p><p>Example:
</p>
<code><pre>window.active.label.text.font:shadow=y:shadowtint=70:shadowoffset=1</pre></code>
<h1> <span class="mw-headline" id="Theme_elements"> Theme elements </span></h1>
<p>Each theme element corresponds to one part of a window or a menu.  We'll start be discussing the elements that let you change the size and placement of things, and then talk about how to change the textures used to render everything.
</p><p>We're going to use a table such as this to describe each element:
</p>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>1
</td></tr>
<tr>
<th>Valid:
</th>
<td>0-100
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>no
</td></tr></table>
<p>Type shows the type of the value for the element.
</p><p>Default gives the default value for the element if it is not listed in the theme.  When Default refers to another theme element, then it means that element's values are used.
</p><p>Valid gives valid ranges for elements that this is applicable for, such as <a href="#Integers"> integer values</a>.
</p><p>Parentrelative specifies if a given texture may use the <a href="#Parentrelative"> Parentrelative</a> visual type, when applicable.
</p>
<h2> <span class="mw-headline" id="Geometry"> Geometry </span></h2>
<h3> <span class="mw-headline" id="border.width"> border.width </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>1
</td></tr>
<tr>
<th>Valid:
</th>
<td>0 - 100
</td></tr></table>
<p>Specifies the size of the border drawn around window frames.
</p><p>See also: <a href="#window.active.border.color"> window.active.border.color</a>, <a href="#window.inactive.border.color"> window.inactive.border.color</a>
</p>
<h3> <span class="mw-headline" id="menu.border.width"> menu.border.width </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#border.width"> border.width</a>
</td></tr>
<tr>
<th>Valid:
</th>
<td>0 - 100
</td></tr></table>
<p>Specifies the size of the border drawn around menus.
</p><p>See also: <a href="#menu.border.color"> menu.border.color</a>
</p>
<h3> <span class="mw-headline" id="menu.separator.width"> menu.separator.width </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>1
</td></tr>
<tr>
<th>Valid:
</th>
<td>1 - 100
</td></tr></table>
<p>Specifies the size of menu line separators.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p>
<h3> <span class="mw-headline" id="menu.separator.padding.width"> menu.separator.padding.width </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>6
</td></tr>
<tr>
<th>Valid:
</th>
<td>0 - 100
</td></tr></table>
<p>Specifies the space on the left and right side of menu line separators.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p><p>See also: <a href="#menu.separator.padding.height">menu.separator.padding.height</a>
</p>
<h3> <span class="mw-headline" id="menu.separator.padding.height"> menu.separator.padding.height </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>3
</td></tr>
<tr>
<th>Valid:
</th>
<td>0 - 100
</td></tr></table>
<p>Specifies the space on the top and bottom of menu line separators.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p><p>See also: <a href="#menu.separator.padding.width">menu.separator.padding.width</a>
</p>
<h3> <span class="mw-headline" id="osd.border.width"> osd.border.width </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#border.width"> border.width</a>
</td></tr>
<tr>
<th>Valid:
</th>
<td>0 - 100
</td></tr></table>
<p>Specifies the size of the border drawn on-screen-dialogs, such as the focus cycling (Alt-Tab) dialog.
</p><p>See also: <a href="#osd.border.color"> osd.border.color</a>
</p>
<h3> <span class="mw-headline" id="window.client.padding.width"> window.client.padding.width </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#padding.width"> padding.width</a>
</td></tr>
<tr>
<th>Valid:
</th>
<td>0 - 100
</td></tr></table>
<p>Specifies the size of the left and right sides of the inner border.  The inner border is drawn around the window, but inside the other decorations.
</p><p>See also: <a href="#window.active.client.color"> window.active.client.color</a>, <a href="#window.inactive.client.color"> window.inactive.client.color</a> <a href="#window.client.padding.height">window.client.padding.height</a>
</p>
<h3> <span class="mw-headline" id="window.client.padding.height"> window.client.padding.height </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.client.padding.width"> window.client.padding.width</a>
</td></tr>
<tr>
<th>Valid:
</th>
<td>0 - 100
</td></tr></table>
<p>Specifies the size of the top and bottom sides of the inner border.  The inner border is drawn around the window, but inside the other decorations.
</p><p>See also: <a href="#window.active.client.color"> window.active.client.color</a>, <a href="#window.inactive.client.color"> window.inactive.client.color</a> <a href="#window.client.padding.width">window.client.padding.width</a>
</p>
<h3> <span class="mw-headline" id="window.handle.width"> window.handle.width </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>6
</td></tr>
<tr>
<th>Valid:
</th>
<td>0 - 100
</td></tr></table>
<p>Specifies the size of the window handle.  The window handle is the piece of decorations on the bottom of windows.  A value of 0 means that no handle is shown.
</p><p>See also: <a href="#window.active.handle.bg"> window.active.handle.bg</a>, <a href="#window.inactive.handle.bg"> window.inactive.handle.bg</a>, <a href="#window.active.grip.bg"> window.active.grip.bg</a>, <a href="#window.inactive.grip.bg"> window.inactive.grip.bg</a>
</p>
<h3> <span class="mw-headline" id="padding.width"> padding.width </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>3
</td></tr>
<tr>
<th>Valid:
</th>
<td>0 - 100
</td></tr></table>
<p>Specifies the padding size, used for spacing out elements in the window decorations.  This can be used to give a theme a more compact or a more relaxed feel.  This specifies padding in the horizontal direction (and vertical direction if <a href="#padding.height">padding.height</a> is not explicitly set).
</p><p>See also: <a href="#padding.height">padding.height</a>
</p>
<h3> <span class="mw-headline" id="padding.height"> padding.height </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#padding.width">padding.width</a>
</td></tr>
<tr>
<th>Valid:
</th>
<td>0 - 100
</td></tr></table>
<p>Specifies the padding size, used for spacing out elements in the window decorations.  This can be used to give a theme a more compact or a more relaxed feel.  This specifies padding in only the vertical direction.
</p><p>See also: <a href="#padding.width">padding.width</a>
</p>
<h3> <span class="mw-headline" id="menu.overlap.x"> menu.overlap.x </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#menu.overlap">menu.overlap</a>
</td></tr>
<tr>
<th>Valid:
</th>
<td> -100 - 100
</td></tr></table>
<p>Specifies how sub menus should overlap their parents.  A positive value moves the submenu over top of their parent by that amount.  A negative value moves the submenu away from their parent by that amount.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p><p>See also: <a href="#menu.overlap.y"> menu.overlap.y</a>
</p>
<h3> <span class="mw-headline" id="menu.overlap.y"> menu.overlap.y </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#menu.overlap">menu.overlap</a>
</td></tr>
<tr>
<th>Valid:
</th>
<td> -100 - 100
</td></tr></table>
<p>Specifies how sub menus should be positioned relative to their parents.  A positive value moves the submenu vertically down by that amount, a negative value moves it up by that amount.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p><p>See also: <a href="#menu.overlap.x"> menu.overlap.x</a>
</p>
<h3> <span class="mw-headline" id="menu.overlap"> menu.overlap </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Integers"> integer</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>0
</td></tr>
<tr>
<th>Valid:
</th>
<td> -100 - 100
</td></tr></table>
<p><span style="color:red"><i><b>This property is obsolete and only present for backwards compatibility.</b></i></span>
</p><p>See also: <a href="#menu.overlap.x"> menu.overlap.x</a>, <a href="#menu.overlap.y"> menu.overlap.y</a>
</p>
<h2> <span class="mw-headline" id="Border_colors"> Border colors </span></h2>
<h3> <span class="mw-headline" id="window.active.border.color"> window.active.border.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#border.color"> border.color</a>
</td></tr></table>
<p>Specifies the border color for the focused window.
</p><p>See also: <a href="#border.width"> border.width</a>, <a href="#window.inactive.border.color"> window.inactive.border.color</a>
</p>
<h3> <span class="mw-headline" id="window.active.title.separator.color"> window.active.title.separator.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.border.color">window.active.border.color</a>
</td></tr></table>
<p>Specifies the border color for the border between the titlebar and the window, for the focused window.
</p><p>See also: <a href="#window.inactive.title.separator.color"> window.inactive.title.separator.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.border.color"> window.inactive.border.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.border.color"> window.active.border.color</a>
</td></tr></table>
<p>Specifies the border color for all non-focused windows.
</p><p>See also: <a href="#border.width"> border.width</a>, <a href="#window.active.border.color"> window.active.border.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.title.separator.color"> window.inactive.title.separator.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.border.color">window.inactive.border.color</a>
</td></tr></table>
<p>Specifies the border color for the border between the titlebar and the window, for non-focused windows.
</p><p>See also: <a href="#window.active.title.separator.color"> window.active.title.separator.color</a>
</p>
<h3> <span class="mw-headline" id="border.color"> border.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>black
</td></tr></table>
<p><span style="color:red"><i><b>This property is obsolete and only present for backwards compatibility.</b></i></span>
</p><p>See also: <a href="#window.active.border.color"> window.active.border.color</a>, <a href="#window.inactive.border.color"> window.inactive.border.color</a>, <a href="#menu.border.color"> menu.border.color</a>
</p>
<h3> <span class="mw-headline" id="window.active.client.color"> window.active.client.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>white
</td></tr></table>
<p>Specifies the color of the inner border for the focused window, drawn around the window but inside the other decorations.
</p><p>See also: <a href="#window.client.padding.width"> window.client.padding.width</a>, <a href="#window.inactive.client.color"> window.inactive.client.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.client.color"> window.inactive.client.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>white
</td></tr></table>
<p>Specifies the color of the inner border for non-focused windows, drawn around the window but inside the other decorations.
</p><p>See also: <a href="#window.client.padding.width"> window.client.padding.width</a>, <a href="#window.active.client.color"> window.active.client.color</a>
</p>
<h3> <span class="mw-headline" id="menu.border.color"> menu.border.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.border.color"> window.active.border.color</a>
</td></tr></table>
<p>Specifies the border color for menus.
</p><p>See also: <a href="#menu.border.width"> menu.border.width</a>
</p>
<h3> <span class="mw-headline" id="osd.border.color"> osd.border.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.border.color"> window.active.border.color</a>
</td></tr></table>
<p>Specifies the border color for on-screen-dialogs, such as the focus cycling (Alt-Tab) dialog.
</p><p>See also: <a href="#osd.border.width"> osd.border.width</a>
</p>
<h2> <span class="mw-headline" id="Titlebar_colors"> Titlebar colors </span></h2>
<h3> <span class="mw-headline" id="window.active.label.text.color"> window.active.label.text.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>black
</td></tr></table>
<p>Specifies the color of the titlebar text for the focused window.
</p><p>See also: <a href="#window.inactive.label.text.color"> window.inactive.label.text.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.label.text.color"> window.inactive.label.text.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>white
</td></tr></table>
<p>Specifies the color of the titlebar text for non-focused windows.
</p><p>See also: <a href="#window.active.label.text.color"> window.active.label.text.color</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.unpressed.image.color"> window.active.button.unpressed.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>black
</td></tr></table>
<p>Specifies the color of the images in titlebar buttons in their default, unpressed, state.  This element is for the focused window.
</p><p>See also: <a href="#window.inactive.button.unpressed.image.color"> window.inactive.button.unpressed.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.pressed.image.color"> window.active.button.pressed.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.unpressed.image.color"> window.active.button.unpressed.image.color</a>
</td></tr></table>
<p>Specifies the color of the images in titlebar buttons when they are being pressed by the user.  This element is for the focused window.
</p><p>See also: <a href="#window.inactive.button.pressed.image.color"> window.inactive.button.pressed.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.disabled.image.color"> window.active.button.disabled.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>white
</td></tr></table>
<p>Specifies the color of the images in titlebar buttons when they are disabled for the window.  This element is for the focused window.
</p><p>See also: <a href="#window.inactive.button.disabled.image.color"> window.inactive.button.disabled.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.hover.image.color"> window.active.button.hover.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.unpressed.image.color"> window.active.button.unpressed.image.color</a>
</td></tr></table>
<p>Specifies the color of the images in titlebar buttons when the mouse is over top of the button.  This element is for the focused window.
</p><p>See also: <a href="#window.inactive.button.hover.image.color"> window.inactive.button.hover.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.toggled.unpressed.image.color"> window.active.button.toggled.unpressed.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.toggled.image.color"> window.active.button.toggled.image.color</a>
</td></tr></table>
<p>Specifies the color of the images in titlebar buttons when the button is toggled - such as when a window is maximized.  This element is for the focused window.
</p><p>See also: <a href="#window.inactive.button.toggled.unpressed.image.color"> window.inactive.button.toggled.unpressed.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.toggled.pressed.image.color"> window.active.button.toggled.pressed.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.pressed.image.color">window.active.button.pressed.image.color</a>
</td></tr></table>
<p>Specifies the color of the images in the titlebar buttons if they are pressed on with the mouse while they are in the toggled state - such as when a window is maximized.  This element is for the focused window.
</p><p>See also: <a href="#window.inactive.button.toggled.pressed.image.color">window.inactive.button.toggled.pressed.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.toggled.hover.image.color"> window.active.button.toggled.hover.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.toggled.unpressed.image.color">window.active.button.toggled.unpressed.image.color</a>
</td></tr></table>
<p>Specifies the color of the images in the titlebar buttons when the mouse is hovered over them while they are in the toggled state - such as when a window is maximized.  This element is for the focused window.
</p><p>See also: <a href="#window.inactive.button.toggled.hover.image.color">window.inactive.button.toggled.hover.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.toggled.image.color"> window.active.button.toggled.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.pressed.image.color"> window.active.button.pressed.image.color</a>
</td></tr></table>
<p><span style="color:red"><i><b>This property is obsolete and only present for backwards compatibility.</b></i></span>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.unpressed.image.color"> window.inactive.button.unpressed.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>white
</td></tr></table>
<p>Specifies the color of the images in titlebar buttons in their default, unpressed, state.  This element is for non-focused windows.
</p><p>See also: <a href="#window.active.button.unpressed.image.color"> window.active.button.unpressed.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.pressed.image.color"> window.inactive.button.pressed.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.button.unpressed.image.color"> window.inactive.button.unpressed.image.color</a>
</td></tr></table>
<p>Specifies the color of the images in titlebar buttons when they are being pressed by the user.  This element is for non-focused windows.
</p><p>This color is also used for pressed color when the button is toggled.
</p><p>See also: <a href="#window.active.button.pressed.image.color"> window.active.button.pressed.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.disabled.image.color"> window.inactive.button.disabled.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>black
</td></tr></table>
<p>Specifies the color of the images in titlebar buttons when they are disabled for the window.  This element is for non-focused windows.
</p><p>See also: <a href="#window.active.button.disabled.image.color"> window.active.button.disabled.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.hover.image.color"> window.inactive.button.hover.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.button.unpressed.image.color"> window.inactive.button.unpressed.image.color</a>
</td></tr></table>
<p>Specifies the color of the images in titlebar buttons when the mouse is over top of the button.  This element is for non-focused windows.
</p><p>See also: <a href="#window.active.button.hover.image.color"> window.active.button.hover.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.toggled.unpressed.image.color"> window.inactive.button.toggled.unpressed.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.button.toggled.image.color"> window.inactive.button.toggled.image.color</a>
</td></tr></table>
<p>Specifies the color of the images in titlebar buttons when the button is toggled - such as when a window is maximized.  This element is for non-focused windows.
</p><p>See also: <a href="#window.active.button.toggled.unpressed.image.color"> window.active.button.toggled.unpressed.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.toggled.pressed.image.color"> window.inactive.button.toggled.pressed.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.button.pressed.image.color">window.inactive.button.pressed.image.color</a>
</td></tr></table>
<p>Specifies the color of the images in the titlebar buttons if they are pressed on with the mouse while they are in the toggled state - such as when a window is maximized.  This element is for non-focused windows.
</p><p>See also: <a href="#window.active.button.toggled.pressed.image.color">window.active.button.toggled.pressed.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.toggled.hover.image.color"> window.inactive.button.toggled.hover.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.button.toggled.unpressed.image.color">window.inactive.button.toggled.unpressed.image.color</a>
</td></tr></table>
<p>Specifies the color of the images in the titlebar buttons when the mouse is hovered over them while they are in the toggled state - such as when a window is maximized.  This element is for non-focused windows.
</p><p>See also: <a href="#window.active.button.toggled.hover.image.color">window.active.button.toggled.hover.image.color</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.toggled.image.color"> window.inactive.button.toggled.image.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.pressed.image.color"> window.active.button.pressed.image.color</a>
</td></tr></table>
<p><span style="color:red"><i><b>This property is obsolete and only present for backwards compatibility.</b></i></span>
</p><p><br/>
</p>
<h2> <span class="mw-headline" id="Active_window_textures"> Active window textures </span></h2>
<h3> <span class="mw-headline" id="window.active.title.bg"> window.active.title.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>no
</td></tr></table>
<p>Specifies the background for the focused window's titlebar.
</p><p>See also: <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>
</p>
<h3> <span class="mw-headline" id="window.active.label.bg"> window.active.label.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for the focused window's titlebar label.  The label is the container for the window title.  When it is parentrelative, then it uses the <a href="#window.active.title.bg"> window.active.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.label.bg"> window.inactive.label.bg</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>
</p>
<h3> <span class="mw-headline" id="window.active.handle.bg"> window.active.handle.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>no
</td></tr></table>
<p>Specifies the background for the focused window's handle.  The handle is the window decorations placed on the bottom of windows.
</p><p>See also: <a href="#window.handle.width"> window.handle.width</a>, <a href="#window.inactive.handle.bg"> window.inactive.handle.bg</a>
</p>
<h3> <span class="mw-headline" id="window.active.grip.bg"> window.active.grip.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for the focused window's grips.  The grips are located at the left and right sides of the window's handle.  When it is parentrelative, then it uses the <a href="#window.active.handle.bg"> window.active.handle.bg</a> which is underneath it.
</p><p>See also: <a href="#window.handle.width"> window.handle.width</a>, <a href="#window.inactive.grip.bg"> window.inactive.grip.bg</a>, <a href="#window.active.handle.bg"> window.active.handle.bg</a>
</p>
<h2> <span class="mw-headline" id="Inactive_window_textures"> Inactive window textures </span></h2>
<h3> <span class="mw-headline" id="window.inactive.title.bg"> window.inactive.title.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>no
</td></tr></table>
<p>Specifies the background for non-focused windows' titlebars.
</p><p>See also: <a href="#window.active.title.bg"> window.active.title.bg</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.label.bg"> window.inactive.label.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for non-focused windows' titlebar labels.  The label is the container for the window title.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.label.bg"> window.active.label.bg</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.handle.bg"> window.inactive.handle.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>no
</td></tr></table>
<p>Specifies the background for non-focused windows' handles.  The handle is the window decorations placed on the bottom of windows.
</p><p>See also: <a href="#window.handle.width"> window.handle.width</a>, <a href="#window.active.handle.bg"> window.active.handle.bg</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.grip.bg"> window.inactive.grip.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for non-focused windows' grips.  The grips are located at the left and right sides of the window's handle.  When it is parentrelative, then it uses the <a href="#window.inactive.handle.bg"> window.inactive.handle.bg</a> which is underneath it.
</p><p>See also: <a href="#window.handle.width"> window.handle.width</a>, <a href="#window.active.grip.bg"> window.active.grip.bg</a>, <a href="#window.inactive.handle.bg"> window.inactive.handle.bg</a>
</p>
<h2> <span class="mw-headline" id="Active_window_button_textures"> Active window button textures </span></h2>
<h3> <span class="mw-headline" id="window.active.button.unpressed.bg"> window.active.button.unpressed.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for titlebar buttons in their default, unpressed, state.  This element is for the focused window.  When it is parentrelative, then it uses the <a href="#window.active.title.bg"> window.active.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.unpressed.bg"> window.inactive.button.unpressed.bg</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.pressed.bg"> window.active.button.pressed.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for titlebar buttons when they are being pressed by the user.  This element is for the focused window.  When it is parentrelative, then it uses the <a href="#window.active.title.bg"> window.active.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.pressed.bg"> window.inactive.button.pressed.bg</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.hover.bg"> window.active.button.hover.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.unpressed.bg"> window.active.button.unpressed.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for titlebar buttons when the mouse is over them.  This element is for the focused window.  When it is parentrelative, then it uses the <a href="#window.active.title.bg"> window.active.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.hover.bg"> window.inactive.button.hover.bg</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.disabled.bg"> window.active.button.disabled.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for titlebar buttons when they are disabled for the window.  This element is for the focused window.  When it is parentrelative, then it uses the <a href="#window.active.title.bg"> window.active.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.disabled.bg"> window.inactive.button.disabled.bg</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.toggled.unpressed.bg"> window.active.button.toggled.unpressed.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.toggled.bg"> window.active.button.toggled.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the default background for titlebar buttons when they are toggled - such as when a window is maximized.  This element is for the focused window.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.toggled.unpresssed.bg"> window.inactive.button.toggled.unpressed.bg</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.toggled.pressed.bg"> window.active.button.toggled.pressed.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.pressed.bg"> window.active.button.pressed.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the default background for titlebar buttons if the user is pressing them with the mouse while they are toggled - such as when a window is maximized.  This element is for the focused window.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.toggled.presssed.bg"> window.inactive.button.toggled.pressed.bg</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.toggled.hover.bg"> window.active.button.toggled.hover.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.toggled.unpressed.bg"> window.active.button.toggled.unpressed.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the default background for titlebar buttons if the user is pressing them with the mouse while they are toggled - such as when a window is maximized.  This element is for the focused window.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.toggled.hover.bg"> window.inactive.button.toggled.hover.bg</a>
</p>
<h3> <span class="mw-headline" id="window.active.button.toggled.bg"> window.active.button.toggled.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.button.pressed.bg"> window.active.button.pressed.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p><span style="color:red"><i><b>This property is obsolete and only present for backwards compatibility.</b></i></span>
</p>
<h2> <span class="mw-headline" id="Inactive_window_button_textures"> Inactive window button textures </span></h2>
<h3> <span class="mw-headline" id="window.inactive.button.unpressed.bg"> window.inactive.button.unpressed.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for titlebar buttons in their default, unpressed, state.  This element is for non-focused windows.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.unpressed.bg"> window.active.button.unpressed.bg</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.pressed.bg"> window.inactive.button.pressed.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for titlebar buttons when they are being pressed by the user.  This element is for non-focused windows.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.pressed.bg"> window.active.button.pressed.bg</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.hover.bg"> window.inactive.button.hover.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.button.unpressed.bg"> window.inactive.button.unpressed.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for titlebar buttons when the mouse is over them.  This element is for non-focused windows.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.hover.bg"> window.active.button.hover.bg</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.disabled.bg"> window.inactive.button.disabled.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for titlebar buttons when they are disabled for the window.  This element is for non-focused windows.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.disabled.bg"> window.active.button.disabled.bg</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.toggled.unpressed.bg"> window.inactive.button.toggled.unpressed.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.button.toggled.bg"> window.inactive.button.toggled.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the default background for titlebar buttons when they are toggled - such as when a window is maximized.  This element is for non-focused windows.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.toggled.unpresssed.bg"> window.active.button.toggled.unpressed.bg</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.toggled.pressed.bg"> window.inactive.button.toggled.pressed.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.button.pressed.bg"> window.inactive.button.pressed.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the default background for titlebar buttons if the user is pressing them with the mouse while they are toggled - such as when a window is maximized.  This element is for non-focused windows.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.toggled.presssed.bg"> window.active.button.toggled.pressed.bg</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.toggled.hover.bg"> window.inactive.button.toggled.hover.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.button.toggled.unpressed.bg"> window.inactive.button.toggled.unpressed.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the default background for titlebar buttons if the user is pressing them with the mouse while they are toggled - such as when a window is maximized.  This element is for non-focused windows.  When it is parentrelative, then it uses the <a href="#window.inactive.title.bg"> window.inactive.title.bg</a> which is underneath it.
</p><p>See also: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.toggled.hover.bg"> window.active.button.toggled.hover.bg</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.button.toggled.bg"> window.inactive.button.toggled.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.button.pressed.bg"> window.inactive.button.pressed.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p><span style="color:red"><i><b>This property is obsolete and only present for backwards compatibility.</b></i></span>
</p>
<h2> <span class="mw-headline" id="Menu_colors"> Menu colors </span></h2>
<h3> <span class="mw-headline" id="menu.title.text.color"> menu.title.text.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>black
</td></tr></table>
<p>Specifies the text color for menu headers.
</p>
<h3> <span class="mw-headline" id="menu.items.text.color"> menu.items.text.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>white
</td></tr></table>
<p>Specifies the text color for normal menu entries.
</p>
<h3> <span class="mw-headline" id="menu.items.disabled.text.color"> menu.items.disabled.text.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>black
</td></tr></table>
<p>Specifies the text color for disabled menu entries.
</p>
<h3> <span class="mw-headline" id="menu.items.active.text.color"> menu.items.active.text.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>black
</td></tr></table>
<p>Specifies the text color for normal menu entries when they are selected.
</p>
<h3> <span class="mw-headline" id="menu.items.active.disabled.text.color"> menu.items.active.disabled.text.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#menu.items.disabled.text.color"> menu.items.disabled.text.color</a>
</td></tr></table>
<p>Specifies the text color for disabled menu entries when they are selected.
</p>
<h3> <span class="mw-headline" id="menu.separator.color"> menu.separator.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#menu.items.text.color">menu.items.text.color</a>
</td></tr></table>
<p>The color of menu line separators.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p><p>See also: <a href="#menu.items.text.color">menu.items.text.color</a>
</p>
<h2> <span class="mw-headline" id="Menu_textures"> Menu textures </span></h2>
<h3> <span class="mw-headline" id="menu.items.bg"> menu.items.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>no
</td></tr></table>
<p>Specifies the background for menus.
</p><p>See also: <a href="#menu.items.active.bg"> menu.items.active.bg</a>
</p>
<h3> <span class="mw-headline" id="menu.items.active.bg"> menu.items.active.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for the selected menu entry (whether or not it is disabled).  When it is parentrelative, then it uses the <a href="#menu.items.bg"> menu.items.bg</a> which is underneath it.
</p><p>See also: <a href="#menu.items.bg"> menu.items.bg</a>
</p>
<h3> <span class="mw-headline" id="menu.title.bg"> menu.title.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>none
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for menu headers.  When it is parentrelative, then it uses the <a href="#menu.items.bg"> menu.items.bg</a> which is underneath it.
</p><p>See also: <a href="#menu.items.bg"> menu.items.bg</a>
</p>
<h2> <span class="mw-headline" id="OSD_textures"> OSD textures </span></h2>
<h3> <span class="mw-headline" id="osd.bg"> osd.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.title.bg">window.active.title.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>no
</td></tr></table>
<p>Specifies the background for on-screen-dialogs, such as the focus cycling (Alt-Tab) dialog.
</p>
<h3> <span class="mw-headline" id="osd.label.bg"> osd.label.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.label.bg">window.active.label.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>yes
</td></tr></table>
<p>Specifies the background for text in on-screen-dialogs, such as the focus cycling (Alt-Tab) dialog.
</p>
<h3> <span class="mw-headline" id="osd.hilight.bg"> osd.hilight.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.active.label.bg">window.active.label.bg</a>, if it is not parentrelative.  Otherwise, <a href="#window.active.title.bg">window.active.title.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>no
</td></tr></table>
<p>Specifies the texture for the selected desktop in the desktop cycling (pager) dialog.
</p>
<h3> <span class="mw-headline" id="osd.unhilight.bg"> osd.unhilight.bg </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Textures"> texture</a>
</td></tr>
<tr>
<th>Default:
</th>
<td><a href="#window.inactive.label.bg">window.inactive.label.bg</a>, if it is not parentrelative.  Otherwise, <a href="#window.inactive.title.bg">window.inactive.title.bg</a>
</td></tr>
<tr>
<th>Parentrelative:
</th>
<td>no
</td></tr></table>
<p>Specifies the texture for unselected desktops in the desktop cycling (pager) dialog.
</p>
<h2> <span class="mw-headline" id="OSD_colors"> OSD colors </span></h2>
<h3> <span class="mw-headline" id="osd.label.text.color"> osd.label.text.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>black
</td></tr></table>
<p>Specifies the text color for on-screen-dialogs, such as the focus cycling (Alt-Tab) dialog.
</p>
<h3> <span class="mw-headline" id="osd.hilight.bg.color"> osd.hilight.bg.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>black
</td></tr></table>
<p>Specifies the color for selected desktops in the desktop cycling (pager) dialog.
</p>
<h3> <span class="mw-headline" id="osd.unhilight.bg.color"> osd.unhilight.bg.color </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Colors"> color</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>black
</td></tr></table>
<p>Specifies the color for unselected desktops in the desktop cycling (pager) dialog.
</p>
<h2> <span class="mw-headline" id="Text_justification"> Text justification </span></h2>
<h3> <span class="mw-headline" id="window.label.text.justify"> window.label.text.justify </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Justification"> justification</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>Left
</td></tr></table>
<p>Specifies how window titles are aligned in the titlebar for both the focused and non-focused windows.
</p>
<h3> <span class="mw-headline" id="menu.title.text.justify"> menu.title.text.justify </span></h3>
<table style="text-align: left">
<tr>
<th>Type:
</th>
<td><a href="#Justification"> justification</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>Left
</td></tr></table>
<p>Specifies how text is aligned in all menu headers.
</p>
<h2> <span class="mw-headline" id="Text_shadows"> Text shadows </span></h2>
<h3> <span class="mw-headline" id="window.active.label.text.font"> window.active.label.text.font </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Text_shadow_strings"> text shadow string</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>no shadow
</td></tr></table>
<p>Specifies the shadow for the focused window's title.
</p><p>See also: <a href="#window.inactive.label.text.font">window.inactive.label.text.font</a>
</p>
<h3> <span class="mw-headline" id="window.inactive.label.text.font"> window.inactive.label.text.font </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Text_shadow_strings"> text shadow string</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>no shadow
</td></tr></table>
<p>Specifies the shadow for non-focused windows' titles.
</p><p>See also: <a href="#window.active.label.text.font"> window.active.label.text.font</a>
</p>
<h3> <span class="mw-headline" id="menu.items.font"> menu.items.font </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Text_shadow_strings"> text shadow string</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>no shadow
</td></tr></table>
<p>Specifies the shadow for all menu entries.
</p>
<h3> <span class="mw-headline" id="menu.title.text.font"> menu.title.text.font </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Text_shadow_strings"> text shadow string</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>no shadow
</td></tr></table>
<p>Specifies the shadow for all menu headers.
</p>
<h3> <span class="mw-headline" id="osd.label.text.font"> osd.label.text.font </span></h3>
<table style="text-align: left;">
<tr>
<th>Type:
</th>
<td><a href="#Text_shadow_strings"> text shadow string</a>
</td></tr>
<tr>
<th>Default:
</th>
<td>no shadow
</td></tr></table>
<p>Specifies the text shadow for on-screen-dialogs, such as the focus cycling (Alt-Tab) dialog.
</p>
<h1> <span class="mw-headline" id="Dialogs"> Dialogs </span></h1>
<p>Openbox shows dialog boxes in some situations.  Two examples are:
</p>
<ul><li> The exit dialog window that appears when the <a href="Actions#Exit" title="Help:Actions">exit action</a> is called.
</li><li> When closing a window for a program that is not responding.
</li></ul>
<p>These dialogs have buttons, such as <b>Cancel</b> and <b>Exit</b>. These buttons get their background information from <a href="Themes#Active_window_button_textures" title="Help:Themes">window.active.button.*.bg</a>. The buttons' text color comes from <a href="Themes#window.active.button.unpressed.image.color" title="Help:Themes">window.active.button.*.image.color</a>.
</p>
<h1> <span class="mw-headline" id="Button_images"> Button images </span></h1>
<p>The images used for the titlebar buttons and the submenu bullet are 1-bit xbm (X Bitmaps).  These are masks where 0 = clear and 1 = colored.
</p><p>The xbm image files are placed in the same directory within your theme as the <code>themerc</code> file, as shown in the <a href="#Theme_file_structure"> file structure discussion</a>.
</p><p>The xbm's which Openbox uses as its internal defaults are distributed with Openbox and installed to <code>/usr/share/doc/openbox/xbm</code>.
</p><p>Here are all the possible xbm files which Openbox looks for.
</p>
<h2> <span class="mw-headline" id="Maximized_button"> Maximized button </span></h2>
<h3> <span class="mw-headline" id="max.xbm"> max.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Internal default
</td></tr></table>
<p>Maximize button in its default, unpressed state.
</p>
<h3> <span class="mw-headline" id="max_toggled.xbm"> max_toggled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>If max.xbm is present, it uses that.  If not, it has a separate internal default
</td></tr></table>
<p>Maximize button when it is in toggled state.
</p>
<h3> <span class="mw-headline" id="max_pressed.xbm"> max_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max.xbm, or its internal default
</td></tr></table>
<p>Maximized button when pressed.
</p>
<h3> <span class="mw-headline" id="max_disabled.xbm"> max_disabled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max.xbm, or its internal default
</td></tr></table>
<p>Maximized button when disabled.
</p>
<h3> <span class="mw-headline" id="max_hover.xbm"> max_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max.xbm, or its internal default
</td></tr></table>
<p>Maximized button when mouse is over it.
</p>
<h3> <span class="mw-headline" id="max_toggled_pressed.xbm"> max_toggled_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max_toggled.xbm, or max.xbm, or its internal default
</td></tr></table>
<p>Maximized button when pressed, in toggled state.
</p>
<h3> <span class="mw-headline" id="max_toggled_hover.xbm"> max_toggled_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max_toggled.xbm, or max.xbm, or its internal default
</td></tr></table>
<p>Maximized button when mouse is over it, in toggled state.
</p>
<h2> <span class="mw-headline" id="Iconify_button"> Iconify button </span></h2>
<h3> <span class="mw-headline" id="iconify.xbm"> iconify.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Internal default
</td></tr></table>
<p>Iconify button in its default, unpressed state.
</p>
<h3> <span class="mw-headline" id="iconify_pressed.xbm"> iconify_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>iconify.xbm, or its internal default
</td></tr></table>
<p>Iconify button when pressed.
</p>
<h3> <span class="mw-headline" id="iconify_disabled.xbm"> iconify_disabled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>iconify.xbm, or its internal default
</td></tr></table>
<p>Iconify button when disabled.
</p>
<h3> <span class="mw-headline" id="iconify_hover.xbm"> iconify_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>iconify.xbm, or its internal default
</td></tr></table>
<p>Iconify button when mouse is over it.
</p>
<h2> <span class="mw-headline" id="Close_button"> Close button </span></h2>
<h3> <span class="mw-headline" id="close.xbm"> close.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Internal default
</td></tr></table>
<p>Close button in its default, unpressed state.
</p>
<h3> <span class="mw-headline" id="close_pressed.xbm"> close_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>close.xbm, or its internal default
</td></tr></table>
<p>Close button when pressed.
</p>
<h3> <span class="mw-headline" id="close_disabled.xbm"> close_disabled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>close.xbm, or its internal default
</td></tr></table>
<p>Close button when disabled.
</p>
<h3> <span class="mw-headline" id="close_hover.xbm"> close_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>close.xbm, or its internal default
</td></tr></table>
<p>Close button when mouse is over it.
</p>
<h2> <span class="mw-headline" id="All-desktops_button"> All-desktops button </span></h2>
<h3> <span class="mw-headline" id="desk.xbm"> desk.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Internal default
</td></tr></table>
<p>All-desktops button in its default, unpressed state.
</p>
<h3> <span class="mw-headline" id="desk_toggled.xbm"> desk_toggled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>If desk.xbm is present, it uses that.  If not, it has a separate internal default
</td></tr></table>
<p>All-desktops button when it is in toggled state.
</p>
<h3> <span class="mw-headline" id="desk_pressed.xbm"> desk_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk.xbm, or its internal default
</td></tr></table>
<p>All-desktops button when pressed.
</p>
<h3> <span class="mw-headline" id="desk_disabled.xbm"> desk_disabled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk.xbm, or its internal default
</td></tr></table>
<p>All-desktops button when disabled.
</p>
<h3> <span class="mw-headline" id="desk_hover.xbm"> desk_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk.xbm, or its internal default
</td></tr></table>
<p>All-desktops button when mouse is over it.
</p>
<h3> <span class="mw-headline" id="desk_toggled_pressed.xbm"> desk_toggled_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk_toggled.xbm, or desk.xbm, or its internal default
</td></tr></table>
<p>All-desktops button when pressed, in toggled state.
</p>
<h3> <span class="mw-headline" id="desk_toggled_hover.xbm"> desk_toggled_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk_toggled.xbm, or desk.xbm, or its internal default
</td></tr></table>
<p>All-desktops button when mouse is over it, in toggled state.
</p>
<h2> <span class="mw-headline" id="Shade_button"> Shade button </span></h2>
<h3> <span class="mw-headline" id="shade.xbm"> shade.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Internal default
</td></tr></table>
<p>Shade button in its default, unpressed state.
</p>
<h3> <span class="mw-headline" id="shade_toggled.xbm"> shade_toggled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>If shade.xbm is present, it uses that.  If not, it has a separate internal default
</td></tr></table>
<p>Shade button when it is in toggled state.
</p>
<h3> <span class="mw-headline" id="shade_pressed.xbm"> shade_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade.xbm, or its internal default
</td></tr></table>
<p>Shade button when pressed.
</p>
<h3> <span class="mw-headline" id="shade_disabled.xbm"> shade_disabled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade.xbm, or its internal default
</td></tr></table>
<p>Shade button when disabled.
</p>
<h3> <span class="mw-headline" id="shade_hover.xbm"> shade_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade.xbm, or its internal default
</td></tr></table>
<p>Shade button when mouse is over it.
</p>
<h3> <span class="mw-headline" id="shade_toggled_pressed.xbm"> shade_toggled_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade_toggled.xbm, or shade.xbm, or its internal default
</td></tr></table>
<p>Shade button when pressed, in toggled state.
</p>
<h3> <span class="mw-headline" id="shade_toggled_hover.xbm"> shade_toggled_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade_toggled.xbm, or shade.xbm, or its internal default
</td></tr></table>
<p>Shade button when mouse is over it, in toggled state.
</p>
<h2> <span class="mw-headline" id="Submenu_bullet"> Submenu bullet </span></h2>
<h3> <span class="mw-headline" id="bullet.xbm"> bullet.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Internal default
</td></tr></table>
<p>The bullet shown in a menu for submenu entries.
</p>
</div>
