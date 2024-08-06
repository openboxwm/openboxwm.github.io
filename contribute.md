---
title: Contribute
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Openbox:Contribute</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Translations"><span class="tocnumber">1</span> <span class="toctext">Translations</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#Bug_reports"><span class="tocnumber">2</span> <span class="toctext">Bug reports</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#Feature_requests"><span class="tocnumber">3</span> <span class="toctext">Feature requests</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#Writing_code"><span class="tocnumber">4</span> <span class="toctext">Writing code</span></a></li>
</ul>
</td></tr></table>
<h2> <span class="mw-headline" id="Translations"> Translations </span></h2>
<div class="floatleft"><img alt="Translate" src="{{site.baseurl}}/assets/images/Translate-72.png" width="72" height="72"/></div>
<div style="margin-left: 80px;">
<p>Help translate Openbox! Any improvements to existing translations, or translations to new languages would be greatly appreciated by your fellow users.
</p><p>Translations are done through "po" files. The easiest way to edit these files is to use <a rel="nofollow" class="external text" href="http://kbabel.kde.org/">KBabel</a>, which is a part of KDE (in the kdesdk package).
</p><p>If you want to update an existing translation, <a rel="nofollow" class="external text" href="http://git.icculus.org/?p=mikachu/openbox.git;a=tree;f=po;hb=backport">browse through</a> our latest translations. You can download and modify the translation from there (right click on the "raw" link and select "save as" or the equivalent).
</p><p>If you want to create a new translation from scratch, download the current <a rel="nofollow" class="external text" href="http://git.icculus.org/?p=mikachu/openbox.git;a=blob_plain;f=po/openbox.pot;hb=backport">translation template for Openbox</a> or the <a rel="nofollow" class="external text" href="http://git.icculus.org/?p=dana/obconf.git;a=blob_plain;f=po/obconf.pot;hb=HEAD">translation template for ObConf</a> and add your translations to it. Download the file and run the command <code>msginit --locale LL_CC</code> where LL_CC is the appropriate code for your language. For example ru for Russian, sv for swedish or en_CA for the Canadian variant of English. If you don't have the msginit command, you can save the file directly as <code>LL_CC.po</code> and fill in the header yourself, using an existing translation as a template.
</p><p>When you've completed a new translation, you can submit it to the bugzilla to have it included in the next release. To submit a translation, follow the link below and fill out the template to create a bug report. After the bug report has been created, attach your new "po" file to the bug. If you for some reason don't want to use bugzilla, you can also try to send the translation to the mailing list or contact us directly on IRC but these methods are less reliable and the translation might get lost.
</p><p><img alt="Important" src="{{site.baseurl}}/assets/images/Important.png" width="16" height="17"/> Please make sure to specify the character encoding properly or Openbox won't be able to read the strings, UTF-8 is preferable.
</p><p>If you have any questions about what the english text means, or anything else is unclear, please don't hesitate to contact us via the <a href="{{site.baseurl}}/community_portal" title="Openbox:Community portal">mailing list or on IRC</a>.
</p><p>Thank you for your help!
</p><p><a rel="nofollow" class="external text" href="http://git.icculus.org/?p=mikachu/openbox.git;a=tree;f=po;hb=work">Browse existing translations for Openbox</a>
</p><p><a rel="nofollow" class="external text" href="http://mika.l3ib.org/ob_translation_status">See how many strings are translated for a language in Openbox</a>
</p><p><a rel="nofollow" class="external text" href="http://git.icculus.org/?p=dana/obconf.git;a=tree;f=po;hb=HEAD">Browse existing translations for ObConf</a>
</p><p><a rel="nofollow" class="external text" href="http://bugzilla.icculus.org/enter_bug.cgi?product=Openbox&amp;component=Translations&amp;form_name=enter_bug">Submit a new or updated translation</a> (Note: use the "attach a file" button, don't paste the whole file in the comment box)
</p>
</div>
<div style="clear:left;">
<h2> <span class="mw-headline" id="Bug_reports"> Bug reports </span></h2>
<div class="floatleft"><img alt="Translate" src="{{site.baseurl}}/assets/images/Bug-72.png" width="72" height="72"/></div>
<div style="margin-left: 80px;">
<p><img alt="Important" src="{{site.baseurl}}/assets/images/Important.png" width="16" height="17"/> When submitting a bug report, please make sure to explain to the developers how to reproduce your problem. If we can't reproduce it, we probably can't fix it.
</p><p><a rel="nofollow" class="external text" href="http://bugzilla.icculus.org/buglist.cgi?product=Openbox&amp;bug_status=UNCONFIRMED&amp;bug_status=NEW&amp;bug_status=ASSIGNED&amp;bug_status=REOPENED&amp;bug_severity=blocker&amp;bug_severity=critical&amp;bug_severity=major&amp;bug_severity=normal&amp;bug_severity=minor&amp;bug_severity=trivial&amp;bug_severity=upstream+issue">Browse existing bug reports</a>
</p><p><a rel="nofollow" class="external text" href="http://bugzilla.icculus.org/enter_bug.cgi?product=Openbox&amp;component=general&amp;form_name=enter_bug">Submit a new bug report</a>
</p>
</div></div>
<div style="clear:left;">
<h2> <span class="mw-headline" id="Feature_requests"> Feature requests </span></h2>
<div class="floatleft"><img alt="Translate" src="{{site.baseurl}}/assets/images/Lightbulb-72.png" width="72" height="72"/></div>
<div style="margin-left: 80px;">
<p><a rel="nofollow" class="external text" href="http://bugzilla.icculus.org/buglist.cgi?product=Openbox&amp;bug_status=UNCONFIRMED&amp;bug_status=NEW&amp;bug_status=ASSIGNED&amp;bug_status=REOPENED&amp;bug_severity=enhancement">Browse existing feature requests</a>
</p><p><a rel="nofollow" class="external text" href="http://bugzilla.icculus.org/enter_bug.cgi?product=Openbox&amp;component=general&amp;bug_severity=enhancement&amp;form_name=enter_bug">Submit a new feature request</a>
</p>
</div></div>
<div style="clear:left;">
<h2> <span class="mw-headline" id="Writing_code"> Writing code </span></h2>
<div class="floatleft"><img alt="Translate" src="{{site.baseurl}}/assets/images/Development-72.png" width="72" height="72"/></div>
<p>Openbox development is done using git. See the <a href="{{site.baseurl}}/help/UsingGit" title="Help:UsingGit">Help:UsingGit</a> page for details on how to check out the latest code and send your changes back upstream.
</p>
<div style="margin-left: 80px;">
<p><a rel="nofollow" class="external text" href="http://github.com/mikachu/openbox">Browse the Openbox git repo on GitHub.com</a>
</p>
</div></div>
</div>
