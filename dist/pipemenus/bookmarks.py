#!/usr/bin/env python
# -*- coding: utf-8 -*- 
################################################################################
##
##    This script pipes the rox-filer bookmarks into the openbox menu.
################################################################################
##    by Vlad George under GPLv2
##
## Usage:
##    Just place it in ~/.config/openbox/scripts, make it executable, add following to your ~/.config/openbox/menu.xml:
##    "<menu id="proc-menu" label="bookmarks" execute="~/.config/openbox/scripts/bookmarks.py" />
##    <menu id="root-menu" label="Openbox3">...<menu id="proc-menu" />...</menu>"
##    and reconfigure openbox.
##
################################################################################

import os
from xml.dom import minidom

bookmarks_file=file(os.path.join(os.environ["HOME"], '.config/rox.sourceforge.net/ROX-Filer/Bookmarks.xml'),'r')
bookmarks=bookmarks_file.read()
bookmarks_file.close()
dom_object=minidom.parseString(bookmarks)
liste=dom_object.getElementsByTagName("bookmark")
names_and_dirs=[]
[names_and_dirs.append((bookmark.getAttribute("title"), bookmark.firstChild.data)) for bookmark in liste]

print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
print "<openbox_pipe_menu>"
print '<item label= "Home.%s"><action name="Execute"><execute>rox-filer %s</execute></action></item>'  % (os.environ["USER"].capitalize(), os.environ["HOME"])

for i in xrange(len(names_and_dirs)):
    print '<item label= "%s"><action name="Execute"><execute>rox-filer %s</execute></action></item>' % (names_and_dirs[i][0], names_and_dirs[i][1])

print "</openbox_pipe_menu>"

