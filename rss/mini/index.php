<?php

$xml = simplexml_load_file('.xml');

$w = new XMLWriter();
$w->openMemory();
$w->startDocument('1.0');
$w->setIndent(4);

$w->startElement('rss');
$w->writeAttribute('version', '2.0');

$w->startElement('channel');

if ($xml->item) {
  $w->writeElement('title', $xml->title);
  $w->writeElement('description', $xml->description);
  $w->writeElement('link', $xml->link);

  foreach ($xml->item as $i) {
    $w->startElement('item');
    $w->writeElement('title', $i->title);
    $w->writeElement('description', $i->text);
    $w->writeElement('link', $i->link);
    if ($i->name) $w->writeElement('author', $i->name);
    $w->writeElement('pubDate', date('r', (int)$i->date));
    $w->endElement();
  }
}
$w->endElement(); // channel
$w->endElement(); //rss

header('Content-type: text/xml');
print $w->outputMemory();
?>
