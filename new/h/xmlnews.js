// list of valid feeds
var feeds = new Array();
feeds['news'] = './rss/news/.xml';
feeds['commits'] = './rss/local/.xml.commits';
feeds['planet'] = './rss/planet/.xml';
feeds['miniplanet'] = './rss/mini/.xml';

function showError(out, m) {
  out.innerHTML='<b>Error</b> showing XML news feed!<br />'+m;
}

function fetch(me, feed) {
  // the file to load
  me.url = feeds[feed];

  //me.out.innerHTML='Initializing ticker...';

  // read the xml document
  me.ajax=createAjaxObj();
  if (me.ajax) {
    //me.ajax.onreadystatechange=function(){response(me);};
    me.ajax.open('GET', me.url, false);  // synchronous
    me.ajax.send(null);
    response(me);
  }
  else {
    showError(me.out, 'Unable to create AJAX object');
  }
}

function twitter_nametolink(t, url) {
  return t.replace(/^([^:]+)/, function(a) {
    return '<a href="'+url+'">'+a+'</a>';
  });
}

function striptags(t) {
  /* remove tags (script tags have already been removed) */
  return t.replace(/<\/?[a-zA-Z]+( [^>]*)?>/g, '');
}

function ident_linkize(t) {
  t = t.replace(/@([a-zA-Z_0-9\/]+)/g, function(a, b) {
    return '@<a href="http://identi.ca/'+b+'">'+b+'</a>';
  });
  t = t.replace(/#([a-zA-Z_0-9\/]+)/g, function(a, b) {
    return '#<a href="http://identi.ca/tag/'+b+'">'+b+'</a>';
  });
  return t;
}

function twitter_linkize(t) {
  t = t.replace(/@([a-zA-Z_0-9\/]+)/g, function(a, b) {
    return '@<a href="http://twitter.com/'+b+'">'+b+'</a>';
  });
  t = t.replace(/#([a-zA-Z_0-9\/]+)/g, function(a, b) {
    return '#<a href="http://twitter.com/search?q=%23'+b+'">'+b+'</a>';
  });
  return t;
}

function linkize(t) {
  // turn urls into links
  // - don't let them end with .,:;)]}!
  // - don't replace links inside a tag attribute

  return t.replace(/(<[a-zA-Z]+( +[a-zA-Z]+=("(\\"|[^"])*"|'(\\'|[^'])*'))* +[a-zA-Z]+=\"(\\"|[^"])*)?([a-z]+:\/\/[A-Z0-9a-z%_#?&$@+=!\*\(\)\[\]{};:\'\"\\\|,.\/-]+[A-Z0-9a-z%_#?&$@+=\*\(\[{\'\"\\\|\/-])/g,
                   function(all) {
                     if (all.charAt(0) == '<')
                       return all;
                     else
                       return '<a href="'+all+'">'+all+'</a>';
                   });
}

function strip_whitespace(t) {
  return t.replace(/[\n\r\t ]+/g, ' ');
}

function ellipsize(t, len) {
  t = strip_whitespace(t); // size matters
  var r = '';
  for (var i = 0; i < len; i++) {
    var m = t.match(/^(&#[0-9]+;|&(gt|lt|amp|quot|apos);|.)/);
    if (!m) break;
    r += m[0];
    t = t.slice(m[0].length);
  }
  return r + (t.length == 0 ? '' : '...');
}

function response(me) {
  // are we ready yet ?
  if (me.ajax.readyState!=4)
    return;
  if (me.ajax.status!=200) {
    showError(me.out, 'Status: '+me.ajax.status+'<br>'+me.url);
    return;
  }

  // get the xml document
  me.xml=me.ajax.responseXML;
  if (me.xml==null) {
    showError(me.out, 'No XML response: '+me.ajax.responseText);
    return;
  }

  // get the feed
  var feed=me.xml.getElementsByTagName('feed')[0];

  var items=feed.getElementsByTagName('item');
  if (items.length==0) {
    this.showError(me.out, 'No items found.');
    return;
  }

  // the output for the div
  var c='<ul>';

  // add all the items in the feed
  for (var i=0; i<items.length && i<me.count; i++){
    var last=(i+1>=items.length||i+1>=me.count);
    var item=items[i];
    var n,date,time,title,link,desc,id,name,www,image;

    if (me.options.showname) {
      n = item.getElementsByTagName("name")[0].firstChild;
      name = n ? n.nodeValue : '';
      n = item.getElementsByTagName("feedurl")[0].firstChild;
      www = n.nodeValue;
    }

    n = item.getElementsByTagName("image")[0].firstChild;
    if (n)
      image = striptags(n.nodeValue);
    else
      image = null;

    if (me.options.showdate) {
      n = item.getElementsByTagName("date")[0].firstChild;
      var t=new Date();
      var offset=t.getTimezoneOffset();
      t.setTime((parseInt(n.nodeValue)-offset*60)*1000);
      date=t.format('mediumDate');
      time=t.format('shortTime');
    }

    n=item.getElementsByTagName("title")[0].firstChild;
    title=n.nodeValue;
    n=item.getElementsByTagName("id")[0].firstChild;
    id=n.nodeValue;
    if (me.options.titlelinktoid)
      link = me.options.titlelinktoid+'#'+id;
    else if (me.options.twitter) {
      n=item.getElementsByTagName("feedurl")[0].firstChild;
      link=n.nodeValue;
    }
    else {
      n=item.getElementsByTagName("link")[0].firstChild;
      link=n.nodeValue;
    }

    if (me.options.showdescription && !me.options.twitter) {
      var j, k;
      k = item.getElementsByTagName("text")[0].childNodes.length;
      desc = '';
      // firefox truncates the firstChild at 4096 bytes, so grab from
      // all children and join it together
      for (j = 0; j < k; j++) {
        n = item.getElementsByTagName("text")[0].childNodes[j];
        desc += n.nodeValue;
      }
    }

    // massage the output
    if (me.options.twitter) {
      /* twitter mode */
      title = linkize(title);

      n = item.getElementsByTagName("feedurl")[0].firstChild;
      if (n.nodeValue.match(/twitter.com/))
        title = twitter_linkize(title);
      if (n.nodeValue.match(/identi.ca/))
        title = ident_linkize(title);

      title = twitter_nametolink(title, link);
    }
    else if (me.options.fulldescription) {
      /* full description */
      if (me.options.links)
        desc = linkize(desc);
    }
    else if (me.options.showdescription) {
      /* short description */
      desc = striptags(desc);
      desc = ellipsize(desc, 140);
    }

    c+='<li>';
    if (me.options.showimage && image)
      c+='<div class="image"><img src="'+image+'" /></div>';
    if (me.options.showname && !me.options.shownamebottom) {
      c+='<div class="name">';
      if (me.options.shownamelink && www)
        c+='<a href="'+www+'">';
      c+=name;
      if (www)
        c+='</a>';
      c+=':</div>';
    }
    if (me.options.idname)
      c+='<a name="'+id+'"></a>';
    c+='<div class="title">';
    if (me.options.twitter)
      c+=title;
    else
      c+='<a href="'+link+'">'+title+'</a>';
    c+='</div>';
    if (me.options.showdescription)
      c+='<div class="description">'+desc+'</div>';
    c+='<div class="footer">';
    if (me.options.showname && options.shownamebottom) {
      c+='<div class="name">';
      if (me.options.shownamelink && www)
        c+='<a href="'+www+'">';
      c+=name;
      if (www)
        c+='</a>';
      c+='</div>';
    }
    if (me.options.showdate){
      c+='<div class="datetime">';
      c+='<div class="date">'+date+'</div>';
      c+='<div class="time">'+time+'</div>';
      c+='</div>';
    }
    c+='</div>';
    if (!last && me.options.fulldescription)
      c+='<hr />'; // separate things in full description mode
    c+='</li>';
  }
  c+='</ul>';

  me.out.innerHTML=c;
}

function xmlNews(feed, to, count, options)
{
  var me = this;
  me.out=document.getElementById(to); // destination container
  me.count = count;

  me.options = function(){};
  me.options.twitter=options.match(/twitter/);
  me.options.links=options.match(/links/);
  me.options.showdescription=options.match(/(show|full)description/);
  me.options.fulldescription=options.match(/fulldescription/);
  me.options.showimage=options.match(/showimage/);
  me.options.showdate=options.match(/showdate/);
  me.options.showname=options.match(/showname/);
  me.options.shownamebottom=options.match(/shownamebottom/);
  me.options.shownamelink=options.match(/shownamelink/);
  me.options.titlelinktoid=options.match(/titlelinktoid=(.[^, ]*)/);
  if (me.options.titlelinktoid) me.options.titlelinktoid=me.options.titlelinktoid[1];
  me.options.idname=options.match(/idname/);

  fetch(me, feed);
}
