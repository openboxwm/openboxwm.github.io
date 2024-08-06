<?php
$t = '';

// append the title to the end of the breadcrumb trail
$breadcrumb[] = $title;

for ($i = 0; $i < count($breadcrumb);) {
  $name = $breadcrumb[$i]; $url = false;
  if ($i < count($breadcrumb)-1)
    $url = $breadcrumb[$i+1];

  $t .= '<span class="bcitem">';
  if ($url) $t .= '<a href="'.$url.'">';
  $t .= $name;
  if ($url) $t .= '</a>';
  $t .= '</span>';

  $i += 2;
  if ($i < count($breadcrumb))
      $t .= '<img alt=">" src="/images/bc_sep.png" />';
  //$t .= '<span class="bcsep">&gt;</span>';
}

echo $t;
?>