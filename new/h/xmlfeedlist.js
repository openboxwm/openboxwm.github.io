function xmlFeedList(out, subtag, gennicks) {
  var o=document.getElementById(out);

  // grab the list of feeds
  var ajax=createAjaxObj();
  if (!ajax)
    return;
  ajax.open('GET', 'rss/config/planet.xml', false);  // synchronous
  ajax.send(null);
  var xml=ajax.responseXML; // input
  var c=''; // output

  var feeds=xml.getElementsByTagName('feeds')[0].
    getElementsByTagName('feed');
  for (var i=0; i<feeds.length; i++) {
    var p = feeds[i].getElementsByTagName(subtag)[0];
    if (p) {
      var name=feeds[i].getElementsByTagName('name')[0].firstChild;
      if (name) name=name.nodeValue;
      var link=p.getElementsByTagName('www')[0].firstChild;
      if (link) link=link.nodeValue;
      var rss=p.getElementsByTagName('rss')[0].firstChild;
      if (rss) rss=rss.nodeValue;

      var nick = null;
      if (link && gennicks) {
        var a = link.match(/^[a-z]+:\/\/[^\/]+\/([^\/]+)/);
        if (a) nick = a[1];
      }

      c+='<li><a href="'+rss+'">'+
        '<img border="0" src="images/rssshort.png" /></a>';
      if (link) c+='<a href="'+link+'">';
      c+=name;
      if (link) c+='</a>';
      if (nick) c+='<br/> ('+nick+')';
      c+='</li>';
    }
  }
  o.innerHTML=c;
}
