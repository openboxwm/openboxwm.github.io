---
title: Help:Using Git
layout: default
---
<a name="top" id="top"></a>
<h1 class="firstHeading">Help:UsingGit</h1>
<div id="bodyContent">
<h3 id="siteSub">From Openbox</h3>
<div id="contentSub"></div>
<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><table id="toc" class="toc"><tr><td><div id="toctitle"><h2>Contents</h2></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Quick_instructions"><span class="tocnumber">1</span> <span class="toctext">Quick instructions</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#Branches"><span class="tocnumber">2</span> <span class="toctext">Branches</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#Local_changes"><span class="tocnumber">3</span> <span class="toctext">Local changes</span></a>
<ul>
<li class="toclevel-2 tocsection-4"><a href="#Conflicting_changes"><span class="tocnumber">3.1</span> <span class="toctext">Conflicting changes</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-5"><a href="#Contributing_code"><span class="tocnumber">4</span> <span class="toctext">Contributing code</span></a>
<ul>
<li class="toclevel-2 tocsection-6"><a href="#GitHub_workflow"><span class="tocnumber">4.1</span> <span class="toctext">GitHub workflow</span></a></li>
<li class="toclevel-2 tocsection-7"><a href="#BugZilla_workflow"><span class="tocnumber">4.2</span> <span class="toctext">BugZilla workflow</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-8"><a href="#Low_bandwidth_option"><span class="tocnumber">5</span> <span class="toctext">Low bandwidth option</span></a></li>
<li class="toclevel-1 tocsection-9"><a href="#Alternate_repos"><span class="tocnumber">6</span> <span class="toctext">Alternate repos</span></a></li>
<li class="toclevel-1 tocsection-10"><a href="#Further_reading"><span class="tocnumber">7</span> <span class="toctext">Further reading</span></a></li>
</ul>
</td></tr></table>
<h1> <span class="mw-headline" id="Quick_instructions"> Quick instructions </span></h1>
<p>The following command will create a directory called "<code>openbox</code>" and download the source code into it (i. e., will create the local copy of external repository):
</p>
<pre>git clone <a rel="nofollow" class="external free" href="https://github.com/danakj/openbox">https://github.com/danakj/openbox</a> openbox
</pre>
<p>The following command will get the latest changes from external repository and store them to the downloaded local repository:
</p>
<pre>git pull
</pre>
<p>Note however that this only does what you expect, if you haven't made any changes. If you have, it will attempt to merge your changes, which may or may not be what you want; see "<a href="#Local_changes">Local changes</a>" below.
</p>
<h1> <span class="mw-headline" id="Branches"> Branches </span></h1>
<p>There are two main branches in the Openbox git repositories: "<b>work</b>" and "<b>master</b>". The difference is that our "work" branches can have testing stuff and be rebased (which means, git will get confused, if you try to pull from them). Once we are pretty sure something will at least not blow up, it will be put on the "master" branch and we try not to rebase that unless really needed.
</p><p>By default you will get the "master" branch, hence the name. If you want the "work" branch, the first time you will need to run:
</p>
<pre>git checkout --track -b work origin/work
</pre>
<p>or if you have a recent git (somewhere in 1.6.x), you can just do:
</p>
<pre>git checkout -t origin/work
</pre>
<p>You can now switch between branches with <code>git checkout master</code> and <code>git checkout work</code>.
</p><p>If you want the very latest changes, first decide, if you want "master" or "work". For "master" you can usually just run <code>git pull</code>, but if you're on "work", you probably want to run something like:
</p>
<pre>git fetch&#160;; git reset --hard origin/work
</pre>
<p>Note though that this will delete <b>all</b> local changes to checked out files and also any commits you've made on the current branch. If you do have commits, you can try <code>git pull --rebase</code>, but no guarantees. If something goes wrong, anything you've committed is actually still available, read the <code>git-reflog</code> man page for details. Uncommitted changes will be gone after a reset <code>--hard</code> though.
</p>
<h1> <span class="mw-headline" id="Local_changes"> Local changes </span></h1>
<p>Unlike CVS and Subversion, git lets you have local changes while still tracking upstream development. In a nut shell, make your changes and run:
</p>
<pre>git commit -a -m "informative message"
</pre>
<p>It's usually a good idea to keep your changes in a separate branch. You can do this in a couple of ways. The easiest way is to run:
</p>
<pre>git checkout -b my-branch master
</pre>
<p>and then commit all your changes to that branch.
</p>
<h2> <span class="mw-headline" id="Conflicting_changes"> Conflicting changes </span></h2>
<p>If you hang on to your changes for a long time, it's likely that we will make commits, that conflict with yours. There are two ways to deal with this. You can either <code>git-merge</code> our branch and resolve the differences, but the better way is to use <code>git-rebase</code>. Last command will take your commits and apply them to the tip (the latest version) of the specified branch, pausing after each commit that conflicts. This usually makes it easier to resolve the conflicts and also gives a nicer history. Using <code>git-rebase</code> is a bit complicated, so read the man page.
</p><p>If you just want to test that your changes work with the latest version of Openbox, you can merge "master" branch and then later use <code>git reset --hard HEAD^</code> to revert the merge. However, I recommend first doing a <code>git checkout -b my-temp</code>, since running <code>git reset</code> twice will continue reverting real commits, so it's easy to mess up. If you're doing all the temp merging on a separate branch you don't have to worry about that.
</p>
<h1> <span class="mw-headline" id="Contributing_code"> Contributing code </span></h1>
<h2> <span class="mw-headline" id="GitHub_workflow"> GitHub workflow </span></h2>
<p>If you'd like to use the GitHub workflow, then make a fork of the Openbox git repo above via <a rel="nofollow" class="external text" href="https://github.com/">GitHub</a>, and send pull requests from your branch with your code changes. GitHub has <a rel="nofollow" class="external text" href="https://help.github.com/">documentation</a>, describing this process.
</p>
<h2> <span class="mw-headline" id="BugZilla_workflow"> BugZilla workflow </span></h2>
<p>You've coded an exciting feature and want to send a diff? How to do it? <code>git diff</code> you might guess, and while that will produce a diff you can send. <code>git format-patch</code> is a bit nicer as it will automatically give you a patch file per commit that you want to send, with the commit message in each file.
</p><p>In the simple case, where you just want to send off the top commit from your repo, do:
</p>
<pre>git format-patch -1
</pre>
<p>If you have a bunch of patches and you have git 1.7 you can do:
</p>
<pre>git format-patch @{u}
</pre>
<p>and it will figure out the correct branch to consider "upstream" and spit out a bunch of patch files. If you don't, you have to give the range manually, but it will almost always be:
</p>
<pre>git format-patch origin/master
</pre>
<p>Once you have your patch(es), open a bug in the bugzilla as instructed <a href="{{site.baseurl}}/contribute" title="Openbox:Contribute">here</a>.
</p><p>Another option is to set up your own public repo and simply tell us where to pull your changes from. Look at the <code>git-daemon</code> man page for details. This is not really preferred usually though, and you'll probably need to be patient and hang around in the <a href="{{site.baseurl}}/community_portal" title="Openbox:Community portal">IRC channel</a> for a while.
</p>
<h1> <span class="mw-headline" id="Low_bandwidth_option"> Low bandwidth option </span></h1>
<p>If your internet connection is very slow (the full git repo is currently around 8.5 MB) and you just want the very latest version without any history, you can run:
</p>
<pre>git clone --depth 1 <a rel="nofollow" class="external free" href="https://github.com/danakj/openbox">https://github.com/danakj/openbox</a> openbox
</pre>
<p>This will give you only the current and preceding commit from each branch, but you can't do much more with your repo than compile the code. Merging as described above will only work, if you use a depth high enough to include the point, where the "backport" branch separated from "master" branch. See the <code>git-clone</code> and <code>git-fetch</code> man pages for further details.
</p><p>You can also download a tarball of any revision via <a rel="nofollow" class="external text" href="http://git.openbox.org/?p=dana/openbox.git;a=summary">gitweb</a>. Click "tree" next to a branch name at the bottom, then click "snapshot" at the top of the new page.
</p>
<h1> <span class="mw-headline" id="Alternate_repos"> Alternate repos </span></h1>
<p>Due to the distributed nature of git, you can choose to pull from various upstream locations (see the <code>git-remote</code> man page for details on how to use several remotes):
</p><p><code>
<a rel="nofollow" class="external free" href="git://git.openbox.org/dana/openbox">git://git.openbox.org/dana/openbox</a><br/>
<a rel="nofollow" class="external free" href="git://git.openbox.org/mikachu/openbox">git://git.openbox.org/mikachu/openbox</a><br/>
<a rel="nofollow" class="external free" href="git://git.mika.l3ib.org/openbox.git">git://git.mika.l3ib.org/openbox.git</a><br/>
<a rel="nofollow" class="external free" href="git://repo.or.cz/openbox.git">git://repo.or.cz/openbox.git</a><br/>
<a rel="nofollow" class="external free" href="git://github.com/Mikachu/openbox">git://github.com/Mikachu/openbox</a><br/>
<a rel="nofollow" class="external free" href="git://github.com/danakj/openbox">git://github.com/danakj/openbox</a>
</code>
</p><p>The astute git user will notice, that there are some variations in branches offered among these, for example dana has a "libs" branch that separates out some common wm code in a library, and mikachu has a "mikabox" branch which is just some crazy stuff.
</p>
<h1> <span class="mw-headline" id="Further_reading"> Further reading </span></h1>
<p>On the <a rel="nofollow" class="external text" href="http://git.or.cz/">git home page</a> there are many great tutorials and all the man pages are available for browsing as well.
</p>
</div>
