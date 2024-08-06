<?php
$title='Search Results';
$breadcrumb=array('Home', '.', 'Help', 'help.php');
?>

<html>
  <?php include('head.php') ?>
  <link rel="stylesheet" type="text/css" href="css/help.css" />
</head>

<?php include('top.php') ?>

<?php splash_title('images/splash/search.png', $title, true); ?>

<?php include('content.php') ?>

<div id="cse-search-results"></div>
<script type="text/javascript">
  var googleSearchIframeName = "cse-search-results";
  var googleSearchFormName = "cse-search-box";
  var googleSearchFrameWidth = 970;
  var googleSearchDomain = "www.google.com";
  var googleSearchPath = "/cse";
</script>
<script type="text/javascript"
  src="http://www.google.com/afsonline/show_afs_search.js"></script>

<?php include('bottom.php') ?>
