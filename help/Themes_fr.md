---
title: Help:Themes (fr)
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:Themes fr</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><p>langue: <a href="Themes" title="Help:Themes">gb</a> | fr
</p><p>les thèmes pour OpenBox 3 sont écrits au format Xresources dans un fichier <code>themerc</code>. le format est assez simple à apprendre et vous disposez d'un multitude d'options.
</p><p>chaque options est détaillée ici avec leurs valeurs par défaut, les valeurs valides acceptées.
</p><p><i>note&#160;: les titres et données sont en anglais pour correspondre parfaitement à votre fichier <code>themerc</code> </i>
</p>
<table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Theme_installation"><span class="tocnumber">1</span> <span class="toctext">Theme installation</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#Theme_selection"><span class="tocnumber">2</span> <span class="toctext">Theme selection</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#Theme_file_structure"><span class="tocnumber">3</span> <span class="toctext">Theme file structure</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#Exemple"><span class="tocnumber">4</span> <span class="toctext">Exemple</span></a></li>
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
<p>les thèmes openbox s'installent dans deux dossiers:
</p>
<ul><li> <code>/usr/share/themes</code>&#160;: disponible pour tous les utilisateurs
</li><li> <code>~/.local/share/themes</code> ou <code>~/.themes</code>&#160;: disponible pour un utilisateur
</li></ul>
<h1> <span class="mw-headline" id="Theme_selection"> Theme selection </span></h1>
<p>le plus simple est d'utiliser <a href="{{site.baseurl}}/obconf" title="ObConf:About">ObConf</a>. il existe aussi des pipemenus remplissant la même fonction.
</p><p>si vous désirez modifier le thème à la main, éditer le &lt;name&gt; key dans la section &lt;theme&gt; de votre fichier <code>~/.config/openbox/rc.xml</code>.  le <a href="Configuration" title="Configuration" class="mw-redirect">guide de Configuration</a>(gb) est un bon endroit pour commencer.
</p>
<h1> <span class="mw-headline" id="Theme_file_structure"> Theme file structure </span></h1>
<p>structure de base d'un thème openbox:
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
<p><img alt="Important.png" src="{{site.baseurl}}/assets/images/Important.png" width="16" height="17"/> <a href="{{site.baseurl}}/obconf" title="ObConf:About"> ObConf</a> peut créer des archives de thèmes Openbox au format <code>.obt</code> pour partager un thème, et peut installer un fichier <code>.obt</code> aussi facilement.
</p>
<h1> <span class="mw-headline" id="Exemple"> Exemple </span></h1>
<p>Ce thème n'est ici que pour l'exemple, et je ne sais même pas si il est fonctionnel. il est ici pour vous montrer toutes les options disponibles sue Openbox. chaque section est liée au paragraphe qui la concerne.
</p>

<code>
<pre># Window geometry
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
<p>Ce sont simplement des nombres comme <code>1</code> ou <code>42</code>.  ils peuvent être entiers, négatifs ou nuls.
</p><p>Exemple:
</p>
<code><pre>window.handle.width: 3</pre></code>
<h2> <span class="mw-headline" id="Justification"> Justification </span></h2>
<p>détermine le placement du texte.  les options acceptées:  <code>Left</code>, <code>Center</code> et <code>Right</code>.
</p><p>Exemple:
</p>
<code><pre>menu.title.text.justify: Left</pre></code>
<h2> <span class="mw-headline" id="Textures"> Textures </span></h2>
<p>les textures déterminent l'aspect visuel d'un élément. c'est la partie la plus compliquée d'un fichier de thème, sans l'être trop.
</p><p>les textures sont spécifiées par une chaîne de texte avec un certain nombre de domaines. Le format est le suivant (<code>|</code> signifie "ou" et <code>[]</code> défini un champ optionnel):
</p>
<pre>parentrelative | ((solid | gradient gradient-type) [border] [interlaced])</pre>
<p>voyons les textures en détail.
</p>
<h3> <span class="mw-headline" id="Parentrelative"> Parentrelative </span></h3>
<p>ParentRelative signifie que l'élément hérite des couleurs des textures sous-jacentes. Il est, par essence, complètement transparent. Certains éléments du thème peut être ParentRelative, et certains ne peuvent pas. La documentation de chacun vous dira si vous pouvez utiliser ParentRelative pour elle ou pas.
</p><p>Exemple:
</p>
<code><pre>
window.active.label.bg: Parentrelative
window.inactive.label.bg: Parentrelative Raised
</pre></code>
<h3> <span class="mw-headline" id="Solid"> Solid </span></h3>
<p>Solid signifie que la texture est compose d'une unique couleur. la texture <b>doit</b> être suivie d'un <a href="#Colors"> color field</a>.
</p><p>Exemple:
</p>
<code><pre>menu.items.bg:       Solid Flat
menu.items.bg.color: #f8f5f2</pre></code>
<h3> <span class="mw-headline" id="Gradients"> Gradients </span></h3>
<p>la texture gradient doit être suivie d'un type. elle utilise <b>impérativement</b> deux <a href="#Colors"> color fields</a>: <code>color</code> and <code>colorTo</code>.
</p><p>Types de Gradients acceptés:
</p>
<ul><li> Diagonal - gradient depuis le coin supérieur gauche au coin inférieur droit
</li><li> CrossDiagonal - gradient depuis le coin supérieur droit au coin inférieur gauche
</li><li> Pyramid - gradient depuis les 4 coins vers le centre
</li><li> Horizontal - gradient de la gauche vers la droite
</li><li> MirrorHorizontal - gradient depuis la gauche vers le centre, puis gradient renversé depuis le centre vers la droite
</li><li> Vertical - gradient depuis le haut vers le bas
</li><li> SplitVertical - gradient inversé partant du centre vers le haut et le bas
</li></ul>
<p>Exemple:
</p>
<code><pre>menu.title.bg:         Gradient Vertical Raised 
menu.title.bg.color:   #658fb5
menu.title.bg.colorTo: #4d6982</pre></code>
<h4> <span class="mw-headline" id="SplitVertical_gradients"> SplitVertical gradients </span></h4>
<p>SplitVertical gradients accepte deux <a href="#Color">color fields</a> additionnels en option: <code>color.splitTo</code> et <code>colorTo.splitTo</code>.  ces couleurs sont utilisées pour les bords supérieurs et inférieurs de la texture.  par défaut, les valeurs sont définies par <code>color</code> * 5/4, and <code>colorTo</code> * 17/16.
</p><p>Exemple:
</p>
<code><pre>menu.title.bg:                 Gradient SplitVertical Raised 
menu.title.bg.color:           #658fb5
menu.title.bg.color.splitTo:   #7595b9
menu.title.bg.colorTo:         #4d6982
menu.title.bg.colorTo.splitTo: #557485</pre></code>
<h3> <span class="mw-headline" id="Border"> Border </span></h3>
<p>les bordures peuvent utiliser les textures <code>solid</code> ou <code>gradient</code>. les options de bases sont <code>Flat</code>, <code>Raised</code> (par défaut) et <code>Sunken</code>.
</p><p>Flat, ne dessine pas de bordure réelle. pour ajouter une bordure , il lui faut absolument une <a href="#Colors"> border color</a> et utiliser l'option <code>Flat Border</code>.
</p><p>Exemple:
</p>
<code><pre>window.active.button.unpressed.bg:              Gradient Vertical Flat Border
window.active.button.unpressed.bg.border.color: #3d4c5a</pre></code>
<p>Raised et Sunken ont deux options de relief en plus. par défaut, un relief est dessiné à l'extérieur de la bordure. si <code>Bevel2</code> est spécifié, alors le relief sera dessiné un peu plus vers l'intérieur de la bordure. ceci peut être utilisé pour animer les états des boutons par exemple.
</p><p>l'apparence des reliefs peut aussi être déterminée dans le thème grâce aux options <code>highlight</code> et <code>shadow</code>:
</p><p><code>highlight</code> détermine la valeur de surbrillance appliquer à l'élément. '0' pas de surbrillance, '256'=100% de surbrillance, '512'=200% de surbrillance etc .. par défaut:'128'=50% en plus de luminosité.
</p><p><code>shadow</code> détermine la valuer de l'ombre. compris entre 0 (pas d'ombre) et 256 (ombre noire). par défaut: '64'=25% de réduction de la luminosité.
</p><p>Exemple:
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
<p>Interlaced textures aka rayures horizontales. à utiliser avec une seconde <a href="#Colors"> interlaced color</a>.
</p><p>Exemple:
</p>
<code><pre>window.inactive.title.bg: Solid Flat Interlaced
window.inactive.title.bg.color: #f5f5f5
window.inactive.title.bg.interlace.color: #f6f6f6</pre></code>
<h2> <span class="mw-headline" id="Colors"> Colors </span></h2>
<p>les couleurs peuvent être spécifiées avec leurs noms ou leur désignation héxadécimale GRB.
</p>
<h3> <span class="mw-headline" id="Color_names"> Color names </span></h3>
<p>Wikipedia décrit une <a rel="nofollow" class="external text" href="http://en.wikipedia.org/wiki/Web_colors#X11_color_names">list of X11 color names</a>, et plus de détails <a rel="nofollow" class="external text" href="http://en.wikipedia.org/wiki/X11_color_names">ici</a>.
</p><p>Exemple:
</p>
<code><pre>menu.items.active.text.color: white
window.active.grip.bg.color: grey40
</pre></code>
<h3> <span class="mw-headline" id="RGB_values"> RGB values </span></h3>
<p>Les couleurs peuvent être spécifiées par les valeurs RGB hexadécimal de deux façons. La plus connue est à travers une syntaxe similaire à HTML, <code>#​​rrggbb</code>. Cependant, vous pouvez également utiliser le format rgb: <code>rr/bb/gg</code>.
</p><p>Exemple:
</p>
<code><pre>window.active.grip.bg.color: #658fb5
window.active.label.text.color: #fff
menu.items.active.bg.color: rgb:90/94/98
window.active.title.bg.color: rgb:6/9/c</pre></code>
<p>Notez que <code>#fff</code> est équivalent à <code>#f0f0f0</code>, <i>pas à</i> <code>#ffffff</code>.
</p>
<h2> <span class="mw-headline" id="Text_shadow_strings"> Text shadow strings </span></h2>
<p>Les ombrages de texte sont précisées par une chaîne de texte spécialement formaté.
</p><p>Il ya trois propriétés qui peuvent être placés dans la chaîne: <code>shadow</code>, <code>shadowtint</code> et <code>shadowoffset</code>.
</p><p>Shadow est une valeur booléenne. Par défaut, 'no'. Vous pouvez activer une ombre pour le texte à l'aide de 'shadow=y'.
</p><p>Shadowtint spécifie la valeur alpha de l'ombre ainsi que sa couleur (noir ou blanc). Par défaut, c'est noir et 50% d'opacité. Vous pouvez spécifier le shadowtint en utilisant 'shadowtint=70'. La teinte peut être n'importe quel nombre entier compris entre -100 et 100. 0 signifie 0% d'opacité (invisible), 100 signifie 100% d'opacité et noir, -100 signifie 100% d'opacité et blanc.
</p><p>ShadowOffset indique dans quelle mesure l'ombre doit être décalé par rapport au texte. Sa valeur par défaut '1'. Il peut être positif pour déplacer l'ombre en bas à droite du texte, ou négative pour la déplacer vers le haut et à gauche du texte. Vous pouvez régler la ShadowOffset en utilisant 'ShadowOffset=2'. 'ShadowOffset=0' placera l'ombre exactement derrière le texte et elle ne sera pas visible.
</p><p>les ombres du textes peuvent être spécifiées séparément pour chasue élément. dans ce cas, les propriétés générales sont ignorées
</p><p>Exemple:
</p>
<code><pre>window.active.label.text.font:shadow=y:shadowtint=70:shadowoffset=1</pre></code>
<h1> <span class="mw-headline" id="Theme_elements"> Theme elements </span></h1>
<p>chaque élément d'un thème correspond à un élément de menu, d'une fenêtre etc…
</p><p>le détail complet de chaque élément avec leurs spécificités sera expliqué sous cette forme:
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
<p><code>Type</code> le type d'élément.
</p><p><code>Default</code> affiche la valeur par défaut si non spécifiées dans le thème. si le 'default' fait référence à un autre élément, c'est celui-ci qui servira de valeur par défaut
</p><p><code>Valid</code> indique les valeurs acceptées par les éléments, comme <a href="#Integers"> integer values</a>.
</p><p><code>Parentrelative</code> définit si la valeur <a href="#Parentrelative"> Parentrelative</a> peut être appliquée.
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
<p>détermine l'épaisseur de la bordures des fenêtres en pixels. 
</p><p>voir aussi: <a href="#window.active.border.color"> window.active.border.color</a>, <a href="#window.inactive.border.color"> window.inactive.border.color</a>
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
<p>détermine l'épaisseur de la bordure autour des menus. 
</p><p>voir aussi: <a href="#menu.border.color"> menu.border.color</a>
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
<p>détermine l'épaisseur des séparateurs de menus.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
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
<p>détermine l'espace en pixels de chaque coté des séparateurs de menu.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p><p>voir aussi: <a href="#menu.separator.padding.height">menu.separator.padding.height</a>
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
<p>détermine la marge supérieure et inférieure des séparateurs de menu.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p><p>Voir aussi: <a href="#menu.separator.padding.width">menu.separator.padding.width</a>
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
<p>détermine l'épaisseur de la bordure des fenêtres de dialogue, comme le switch du focus (Alt-Tab).
</p><p>Voir aussi: <a href="#osd.border.color"> osd.border.color</a>
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
<p>détermine l'épaisseur de la bordure latérale (droite et gauche) interne des fenêtres. elle se dessine entre la bordure externe et le corps de la fenêtre.
</p><p>Voir aussi: <a href="#window.active.client.color"> window.active.client.color</a>, <a href="#window.inactive.client.color"> window.inactive.client.color</a> <a href="#window.client.padding.height">window.client.padding.height</a>
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
<p>détermine l'épaisseur de la bordure interne (haute et basse) des fenêtres. elle se dessine entre la bordure externe et le corps de la fenêtre.
</p><p>Voir aussi: <a href="#window.active.client.color"> window.active.client.color</a>, <a href="#window.inactive.client.color"> window.inactive.client.color</a> <a href="#window.client.padding.width">window.client.padding.width</a>
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
<p>détermine l'épaisseur de la zone de préhension. cette zone se situe en bas de la fenêtre. une valeur de '0' masque cette zone.
</p><p>Voir aussi: <a href="#window.active.handle.bg"> window.active.handle.bg</a>, <a href="#window.inactive.handle.bg"> window.inactive.handle.bg</a>, <a href="#window.active.grip.bg"> window.active.grip.bg</a>, <a href="#window.inactive.grip.bg"> window.inactive.grip.bg</a>
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
<p>détermine la marge interne horizontale (et verticale si non spécifiée) utilisée pour séparer les éléments des décorations de la fenêtre.
</p><p>Voir aussi: <a href="#padding.height">padding.height</a>
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
<p>détermine la marge interne verticale utilisée pour séparer les éléments des décorations de la fenêtre.
</p><p>Voir aussi: <a href="#padding.width">padding.width</a>
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
<p>détermine le décallage horizontal entre menu et sous-menu. une valeur positive supperpose le sous-menu au menu, une valeur négative le sépare.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p><p>Voir aussi: <a href="#menu.overlap.y"> menu.overlap.y</a>
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
<p>détermine le décallage vertical entre menu et sous-menu. une valeur positive fait descendre le sous-menu, une valeur négative le fait monter.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p><p>Voir aussi: <a href="#menu.overlap.x"> menu.overlap.x</a>
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
<p><span style="color:red"><i><b>cette propriété est obsolète et n'existe que pour raison de compatibilité.</b></i></span>
</p><p>Voir aussi: <a href="#menu.overlap.x"> menu.overlap.x</a>, <a href="#menu.overlap.y"> menu.overlap.y</a>
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
<p>détermine la couleur de la bordure de la fenêtre active.
</p><p>Voir aussi: <a href="#border.width"> border.width</a>, <a href="#window.inactive.border.color"> window.inactive.border.color</a>
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
<p>détermine la couleur de la bordure inférieure de la barre de titre de la fenêtre active.
</p><p>Voir aussi: <a href="#window.inactive.title.separator.color"> window.inactive.title.separator.color</a>
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
<p>détermine la couleur de la bordure des fenêtres inactives.
</p><p>Voir aussi: <a href="#border.width"> border.width</a>, <a href="#window.active.border.color"> window.active.border.color</a>
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
<p>détermine la couleur de la bordure inférieure de la barre de titre des fenêtres inactives.
</p><p>Voir aussi: <a href="#window.active.title.separator.color"> window.active.title.separator.color</a>
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
<p><span style="color:red"><i><b>cette propriété est obsolète et n'existe que pour raison de compatibilité.</b></i></span>
</p><p>Voir aussi: <a href="#window.active.border.color"> window.active.border.color</a>, <a href="#window.inactive.border.color"> window.inactive.border.color</a>, <a href="#menu.border.color"> menu.border.color</a>
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
<p>détermine la couleur de la bordure interne de la fenêtre active. elle se dessine entre la bordure externe et le corps de la fenêtre.
</p><p>Voir aussi: <a href="#window.client.padding.width"> window.client.padding.width</a>, <a href="#window.inactive.client.color"> window.inactive.client.color</a>
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
<p>détermine la couleur de la bordure interne des fenêtres inactives. elle se dessine entre la bordure externe et le corps de la fenêtre.
</p><p>Voir aussi: <a href="#window.client.padding.width"> window.client.padding.width</a>, <a href="#window.active.client.color"> window.active.client.color</a>
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
<p>détermine la couleur de la bordure du menu.
</p><p>Voir aussi: <a href="#menu.border.width"> menu.border.width</a>
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
<p>détermine la couleur de la bordure des fenêtres de dialogue comme le switch de focus (Alt-Tab).
</p><p>Voir aussi: <a href="#osd.border.width"> osd.border.width</a>
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
<p>détermine la couleur du texte de la barre de titre de la fenêtre active.
</p><p>Voir aussi: <a href="#window.inactive.label.text.color"> window.inactive.label.text.color</a>
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
<p>détermine la couleur du texte de la barre de titre des fenêtres inactives.
</p><p>Voir aussi: <a href="#window.active.label.text.color"> window.active.label.text.color</a>
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
<p>détermine la couleur des images des boutons de la barre de titre de la fenetre active.
</p><p>Voir aussi: <a href="#window.inactive.button.unpressed.image.color"> window.inactive.button.unpressed.image.color</a>
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
<p>détermine la couleur des images des boutons lors d'un clic pour la barre de titre de la fenetre active.
</p><p>Voir aussi: <a href="#window.inactive.button.pressed.image.color"> window.inactive.button.pressed.image.color</a>
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
<p>détermine la couleur des images des boutons désactivés de la barre de titre de la fenetre active.
</p><p>Voir aussi: <a href="#window.inactive.button.disabled.image.color"> window.inactive.button.disabled.image.color</a>
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
<p>détermine la couleur des images des boutons lors d'un survol pour la barre de titre de la fenetre active.
</p><p>Voir aussi: <a href="#window.inactive.button.hover.image.color"> window.inactive.button.hover.image.color</a>
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
<p>détermine la couleur des images des boutons en mode 'toggle' (ex: fenêtre maximisée) pour la barre de titre de la fenêtre active.
</p><p>Voir aussi: <a href="#window.inactive.button.toggled.unpressed.image.color"> window.inactive.button.toggled.unpressed.image.color</a>
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
<p>détermine la couleur des images des boutons en mode 'toggle' (ex: fenêtre maximisée) lors d'un clic pour la barre de titre de la fenetre active.
</p><p>Voir aussi: <a href="#window.inactive.button.toggled.pressed.image.color">window.inactive.button.toggled.pressed.image.color</a>
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
<p>détermine la couleur des images des boutons en mode 'toggle' (ex: fenêtre maximisée) lors d'un survol pour la barre de titre de la fenetre active.
</p><p>Voir aussi: <a href="#window.inactive.button.toggled.hover.image.color">window.inactive.button.toggled.hover.image.color</a>
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
<p><span style="color:red"><i><b>cette propriété est obsolète et n'existe que pour des raisons de compatibilités.</b></i></span>
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
<p>détermine la couleur des images des boutons de la barre de titre des fenêtres inactives.
</p><p>Voir aussi: <a href="#window.active.button.unpressed.image.color"> window.active.button.unpressed.image.color</a>
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
<p>détermine la couleur des images des boutons de la barre de titre des fenêtres inactives lors d'un clic.
</p><p>cette option est aussi utilisé pour le mode 'toggle' lors d'un clic pour les fenêtres inactives.
</p><p>Voir aussi: <a href="#window.active.button.pressed.image.color"> window.active.button.pressed.image.color</a>
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
<p>détermine la couleur des images des boutons désactivés de la barre de titre des fenêtres inactives.
</p><p>Voir aussi: <a href="#window.active.button.disabled.image.color"> window.active.button.disabled.image.color</a>
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
<p>détermine la couleur des images des boutons de la barre de titre des fenêtres inactives lors d'un survol.
</p><p>Voir aussi: <a href="#window.active.button.hover.image.color"> window.active.button.hover.image.color</a>
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
<p>détermine la couleur des images des boutons en mode 'toggle' (ex: fenêtre maximisée) pour la barre de titre des fenêtres inactives.
</p><p>Voir aussi: <a href="#window.active.button.toggled.unpressed.image.color"> window.active.button.toggled.unpressed.image.color</a>
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
<p>détermine la couleur des images des boutons en mode 'toggle' (ex: fenêtre maximisée) lors d'un clic pour la barre de titre de la fenêtre active.
</p><p>Voir aussi: <a href="#window.active.button.toggled.pressed.image.color">window.active.button.toggled.pressed.image.color</a>
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
<p>détermine la couleur des images des boutons en mode 'toggle' (ex: fenêtre maximisée) lors d'un survol pour la barre de titre des fenêtres inactives.
</p><p>Voir aussi: <a href="#window.active.button.toggled.hover.image.color">window.active.button.toggled.hover.image.color</a>
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
<p><span style="color:red"><i><b>cette propriété est obsolète et n'existe que pour des raisons de compatibilités.</b></i></span>
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
<p>détermine la texture de la barre de titre de la fenêtre active.
</p><p>Voir aussi: <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>
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
<p>détermine la texture du label de la fenêtre active, la label est le fond du titre. si 'parentrelative', alors on utilise <a href="#window.active.title.bg"> window.active.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.label.bg"> window.inactive.label.bg</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>
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
<p>détermine la texture de la zone de préhension située au bas de la fenêtre active.
</p><p>Voir aussi: <a href="#window.handle.width"> window.handle.width</a>, <a href="#window.inactive.handle.bg"> window.inactive.handle.bg</a>
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
<p>détermine la texture des zones de redimensionnements de la fenêtre active. elles sont situées de part et d'autres de la zone de préhension au bas des fenêtres. si 'parentrelative', on utilise <a href="#window.active.handle.bg"> window.active.handle.bg</a>.
</p><p>Voir aussi: <a href="#window.handle.width"> window.handle.width</a>, <a href="#window.inactive.grip.bg"> window.inactive.grip.bg</a>, <a href="#window.active.handle.bg"> window.active.handle.bg</a>
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
<p>détermine la texture de la barre de titre des fenêtres inactives.
</p><p>Voir aussi: <a href="#window.active.title.bg"> window.active.title.bg</a>
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
<p>détermine la texture du label des fenêtres inactives, la label est le fond du titre. si 'parentrelative', alors on utilise <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.label.bg"> window.active.label.bg</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>
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
<p>détermine la texture de la zone de préhension située au bas des fenêtres inactives.
</p><p>Voir aussi: <a href="#window.handle.width"> window.handle.width</a>, <a href="#window.active.handle.bg"> window.active.handle.bg</a>
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
<p>détermine la texture des zones de redimensionnements des fenêtres inactives. elles sont situées de part et d'autres de la zone de préhension au bas des fenêtres. si 'parentrelative', on utilise <a href="#window.inactive.handle.bg"> window.inactive.handle.bg</a>.
</p><p>Voir aussi: <a href="#window.handle.width"> window.handle.width</a>, <a href="#window.active.grip.bg"> window.active.grip.bg</a>, <a href="#window.inactive.handle.bg"> window.inactive.handle.bg</a>
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
<p>détermine la texture des boutons de la barre de titre de la fenetre active. si 'parentrelative', on utilise <a href="#window.active.title.bg"> window.active.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.unpressed.bg"> window.inactive.button.unpressed.bg</a>
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
<p>détermine la texture des boutons de la barre de titre de la fenetre active lors d'un clic. si 'parentrelative', on utilise <a href="#window.active.title.bg"> window.active.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.pressed.bg"> window.inactive.button.pressed.bg</a>
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
<p>détermine la texture des boutons de la barre de titre de la fenetre active lors d'un survol. si 'parentrelative', on utilise <a href="#window.active.title.bg"> window.active.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.hover.bg"> window.inactive.button.hover.bg</a>
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
<p>détermine la texture des boutons désactivés de la barre de titre de la fenetre active. si 'parentrelative', on utilise <a href="#window.active.title.bg"> window.active.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.disabled.bg"> window.inactive.button.disabled.bg</a>
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
<p>détermine la texture des boutons en mode 'toggle' (ex: fenêtre maximisée) pour la barre de titre de la fenetre active. si 'parentrelative', on utilise <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.toggled.unpresssed.bg"> window.inactive.button.toggled.unpressed.bg</a>
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
<p>détermine la texture des boutons en mode 'toggle' (ex: fenêtre maximisée) pour la barre de titre de la fenetre active lors d'un clic. si 'parentrelative', on utilise <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.toggled.presssed.bg"> window.inactive.button.toggled.pressed.bg</a>
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
<p>détermine la texture des boutons en mode 'toggle' (ex: fenêtre maximisée) pour la barre de titre de la fenetre active lors d'un survol. si 'parentrelative', on utilise <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.active.title.bg"> window.active.title.bg</a>, <a href="#window.inactive.button.toggled.hover.bg"> window.inactive.button.toggled.hover.bg</a>
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
<p><span style="color:red"><i><b>cette propriété est obsolète et n'existe que pour des raisons de compatibilité.</b></i></span>
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
<p>détermine la texture des boutons de la barre de titre des fenêtres inactives. si 'parentrelative', on utilise <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.unpressed.bg"> window.active.button.unpressed.bg</a>
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
<p>détermine la texture des boutons de la barre de titre des fenêtres inactives lors d'un clic. si 'parentrelative', on utilise  <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.pressed.bg"> window.active.button.pressed.bg</a>
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
<p>détermine la texture des boutons de la barre de titre des fenêtres inactives lors d'un survol. si 'parentrelative', on utilise  <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.hover.bg"> window.active.button.hover.bg</a>
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
<p>détermine la texture des boutons désactivés de la barre de titre des fenêtres inactives. si 'parentrelative', on utilise <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.disabled.bg"> window.active.button.disabled.bg</a>
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
<p>détermine la texture des boutons en mode 'toggle' (ex: fenêtre maximisée) pour la barre de titre des fenêtres inactives. si 'parentrelative', on utilise <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.toggled.unpresssed.bg"> window.active.button.toggled.unpressed.bg</a>
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
<p>détermine la texture des boutons en mode 'toggle' (ex: fenêtre maximisée) pour la barre de titre des fenêtres inactives lors d'un clic. si 'parentrelative', on utilise <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.toggled.presssed.bg"> window.active.button.toggled.pressed.bg</a>
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
<p>détermine la texture des boutons en mode 'toggle' (ex: fenêtre maximisée) pour la barre de titre des fenêtres inactives lors d'un survol. si 'parentrelative', on utilise <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>.
</p><p>Voir aussi: <a href="#Titlebar_colors"> titlebar colors</a>, <a href="#window.inactive.title.bg"> window.inactive.title.bg</a>, <a href="#window.active.button.toggled.hover.bg"> window.active.button.toggled.hover.bg</a>
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
<p><span style="color:red"><i><b>cette propriété est obsolète et n'existe que pour des raisons de compatibilités.</b></i></span>
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
<p>détermine la couleur du texte des titres des menus et sous-menus.
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
<p>détermine la couleur du texte des entrées de menu.
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
<p>détermine la couleur du texte des entrées de menu désactivées.
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
<p>détermine la couleur du texte des entrées de menu lors d'un survol.
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
<p>détermine la couleur du texte des entrées de menu désactivées lors d'un survol.
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
<p>détermine la couleur des séparateurs de menu.  <span style="color:green"><i><b>(As of version 3.4.7)</b></i></span>
</p><p>Voir aussi: <a href="#menu.items.text.color">menu.items.text.color</a>
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
<p>détermine la texture du menu.
</p><p>Voir aussi: <a href="#menu.items.active.bg"> menu.items.active.bg</a>
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
<p>détermine la texture de l'entrée de menu sélectionnée (qu'elle soit activée ou non). si 'parentrelative', on utilise <a href="#menu.items.bg"> menu.items.bg</a>.
</p><p>Voir aussi: <a href="#menu.items.bg"> menu.items.bg</a>
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
<p>détermine la texture des titres des menus et sous-menus. si 'parentrelative', on utilise <a href="#menu.items.bg"> menu.items.bg</a>.
</p><p>Voir aussi: <a href="#menu.items.bg"> menu.items.bg</a>
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
<p>détermine la texture des fenêtres de dialogue, comme le swith du focus (Alt-Tab). 
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
<p>détermine la texture des labels des fenêtres de dialogue, comme le swith du focus (Alt-Tab). le label est le fond du texte. 
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
<p>détermine la texture du bureau actif dans le selecteur de bureaux (pager). 
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
<p>détermine la texture de bureaux inactifs dans le selecteur de bureaux (pager).
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
<p>détermine la couleur des fenêtres de dialogue, comme le swith du focus (Alt-Tab).
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
<p>détermine la couleur du bureau actif dans le selecteur de bureaux (pager).
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
<p>détermine la couleur des bureaux inactifs dans le selecteur de bureaux (pager).
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
<p>détemine le placement du texte dans la barre de titre des fenêtres (in)actives.
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
<p>détermine le placement du texte pour les titres de menus.
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
<p>détermine l'ombre du titre de la fenêtre active.
</p><p>Voir aussi: <a href="#window.inactive.label.text.font">window.inactive.label.text.font</a>
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
<p>détermine l'ombre du titre des fenêtres inactives.
</p><p>Voir aussi: <a href="#window.active.label.text.font"> window.active.label.text.font</a>
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
<p>détermine l'ombre des entrées de menus.
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
<p>détermine l'ombre des titres des menus et sous-menus.
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
<p>détermine l'ombre du texte des fenêtres de dialogue, comme le swith du focus (Alt-Tab).
</p>
<h1> <span class="mw-headline" id="Dialogs"> Dialogs </span></h1>
<p>openbox affiche des fenêtres de dialogue. deux exemples:
</p>
<ul><li> la fenêtre qui s'affiche quand on quitte openbox: “voulez-vous quitter openbox&#160;? - annuler - quitter”.
</li><li> quand on ferme une fenêtre qui ne répond pas.
</li></ul>
<p>ces fenêtres ont des boutons du style <i>Annuler</i> ou <i>Quitter</i>. leur texture est déterminée par <a href="Themes#Active_window_button_textures" title="Help:Themes">window.active.button.*.bg</a>. la couleur du texte est déterminée par <a href="Themes#window.active.button.unpressed.image.color" title="Help:Themes">window.active.button.*.image.color</a>.
</p>
<h1> <span class="mw-headline" id="Button_images"> Button images </span></h1>
<p>les images utilisées pour les boutons de la barre de titre et l'indicateur de sous-menus (bullet) sont au format '1-bit xbm' (X Bitmaps).
</p><p>les images xbm doivent être placées dans le même dossier que le themerc comme indiqué dans la section <a href="#Theme_file_structure"> Theme file structure</a>.
</p><p>les images par défaut (utilisées par openbox si absentes du dossier de thème) sont situés dans <code>/usr/share/doc/openbox/xbm</code>.
chaque image doit avoir un dénommination spécifique. voici les 'noms' d'images acceptés par openbox:
</p>
<h2> <span class="mw-headline" id="Maximized_button"> Maximized button </span></h2>
<p>le bouton de maximisaion des fenêtres
</p>
<h3> <span class="mw-headline" id="max.xbm"> max.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Interne
</td></tr></table>
<p>image du bouton de maximisation.
</p>
<h3> <span class="mw-headline" id="max_toggled.xbm"> max_toggled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max.xbm ou interne
</td></tr></table>
<p>image du bouton de maximisation en mode 'toggle'.
</p>
<h3> <span class="mw-headline" id="max_pressed.xbm"> max_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max.xbm ou interne
</td></tr></table>
<p>image du bouton de maximisation lors d'un clic.
</p>
<h3> <span class="mw-headline" id="max_disabled.xbm"> max_disabled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max.xbm ou interne
</td></tr></table>
<p>image du bouton de maximisation désactivé (les fenêtres n'acceptant pas la maximisation).
</p>
<h3> <span class="mw-headline" id="max_hover.xbm"> max_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max.xbm ou interne
</td></tr></table>
<p>image du bouton de maximisation lors d'un survol.
</p>
<h3> <span class="mw-headline" id="max_toggled_pressed.xbm"> max_toggled_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max_toggled.xbm, max.xbm ou interne
</td></tr></table>
<p>image du bouton de maximisation en mode 'toggle' lors d'un clic.
</p>
<h3> <span class="mw-headline" id="max_toggled_hover.xbm"> max_toggled_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>max_toggled.xbm, max.xbm ou interne
</td></tr></table>
<p>image du bouton de maximisation en mode 'toggle' lors d'un survol.
</p>
<h2> <span class="mw-headline" id="Iconify_button"> Iconify button </span></h2>
<p>le bouton d'iconification (minimisation) des fenêtres.
</p>
<h3> <span class="mw-headline" id="iconify.xbm"> iconify.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Interne
</td></tr></table>
<p>image du bouton d'iconification.
</p>
<h3> <span class="mw-headline" id="iconify_pressed.xbm"> iconify_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>iconify.xbm, ou interne
</td></tr></table>
<p>image du bouton d'iconification lors d'un clic.
</p>
<h3> <span class="mw-headline" id="iconify_disabled.xbm"> iconify_disabled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>iconify.xbm, ou interne
</td></tr></table>
<p>image du bouton d'iconification désactivé.
</p>
<h3> <span class="mw-headline" id="iconify_hover.xbm"> iconify_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>iconify.xbm, ou interne
</td></tr></table>
<p>image du bouton d'iconification lors d'un survol.
</p>
<h2> <span class="mw-headline" id="Close_button"> Close button </span></h2>
<p>le bouton de fermeture des fenêtres.
</p>
<h3> <span class="mw-headline" id="close.xbm"> close.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Interne
</td></tr></table>
<p>image du bouton de fermeture.
</p>
<h3> <span class="mw-headline" id="close_pressed.xbm"> close_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>close.xbm, ou interne
</td></tr></table>
<p>image du bouton de fermeture lors d'un clic.
</p>
<h3> <span class="mw-headline" id="close_disabled.xbm"> close_disabled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>close.xbm, ou interne
</td></tr></table>
<p>image du bouton de fermeture désactivé.
</p>
<h3> <span class="mw-headline" id="close_hover.xbm"> close_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>close.xbm, ou interne
</td></tr></table>
<p>image du bouton de fermeture lors d'un survol.
</p>
<h2> <span class="mw-headline" id="All-desktops_button"> All-desktops button </span></h2>
<p>le bouton de fixation de la fenêtre (aka “sticky”) pour rendre la fenêtre visible sur tous les bureaux.
</p>
<h3> <span class="mw-headline" id="desk.xbm"> desk.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Interne
</td></tr></table>
<p>image du bouton sticky.
</p>
<h3> <span class="mw-headline" id="desk_toggled.xbm"> desk_toggled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk.xbm ou interne
</td></tr></table>
<p>image du bouton sticky en mode 'toggle'.
</p>
<h3> <span class="mw-headline" id="desk_pressed.xbm"> desk_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk.xbm ou interne
</td></tr></table>
<p>image du bouton sticky lors d'un clic.
</p>
<h3> <span class="mw-headline" id="desk_disabled.xbm"> desk_disabled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk.xbm ou interne
</td></tr></table>
<p>image du bouton sticky désactivé.
</p>
<h3> <span class="mw-headline" id="desk_hover.xbm"> desk_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk.xbm ou interne
</td></tr></table>
<p>image du bouton sticky lors d'un survol.
</p>
<h3> <span class="mw-headline" id="desk_toggled_pressed.xbm"> desk_toggled_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk_toggled.xbm, desk.xbm ou interne
</td></tr></table>
<p>image du bouton sticky en mode 'toggle' lors d'un clic.
</p>
<h3> <span class="mw-headline" id="desk_toggled_hover.xbm"> desk_toggled_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>desk_toggled.xbm, desk.xbm ou interne
</td></tr></table>
<p>image du bouton sticky en mode 'toggle' lors d'un survol.
</p>
<h2> <span class="mw-headline" id="Shade_button"> Shade button </span></h2>
<p>le bouton d'enroulement des fenêtres, afin de n'afficher que la barre de titre
</p>
<h3> <span class="mw-headline" id="shade.xbm"> shade.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Interne
</td></tr></table>
<p>image du bouton d'enroulement des fenêtres.
</p>
<h3> <span class="mw-headline" id="shade_toggled.xbm"> shade_toggled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade.xbm ou interne
</td></tr></table>
<p>image du bouton d'enroulement en mode 'toggle'.
</p>
<h3> <span class="mw-headline" id="shade_pressed.xbm"> shade_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade.xbm ou interne
</td></tr></table>
<p>image du bouton d'enroulement lors d'un clic.
</p>
<h3> <span class="mw-headline" id="shade_disabled.xbm"> shade_disabled.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade.xbm ou interne
</td></tr></table>
<p>image du bouton d'enroulement lors d'un clic.
</p>
<h3> <span class="mw-headline" id="shade_hover.xbm"> shade_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade.xbm ou interne
</td></tr></table>
<p>image du bouton d'enroulement lors d'un survol.
</p>
<h3> <span class="mw-headline" id="shade_toggled_pressed.xbm"> shade_toggled_pressed.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade_toggled.xbm, shade.xbm ou interne
</td></tr></table>
<p>image du bouton d'enroulement en mode 'toggle' lors d'un clic.
</p>
<h3> <span class="mw-headline" id="shade_toggled_hover.xbm"> shade_toggled_hover.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>shade_toggled.xbm, shade.xbm ou interne
</td></tr></table>
<p>image du bouton d'enroulement en mode 'toggle' lors d'un survol.
</p>
<h2> <span class="mw-headline" id="Submenu_bullet"> Submenu bullet </span></h2>
<h3> <span class="mw-headline" id="bullet.xbm"> bullet.xbm </span></h3>
<table style="text-align: left">
<tr>
<th>Default:
</th>
<td>Interne
</td></tr></table>
<p>image du bouton d'indication de sous-menus.
</p><p><br/>
</p>
<hr/>
<p>traduction: arpinux, 14:39, 24 April 2013 (EDT)
</p>
</div>
