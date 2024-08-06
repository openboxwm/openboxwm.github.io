<?php
function splash_title($img, $title, $search=false)
{
  $alt = basename($img);
?>
<div id="splash">
  <div id="splash-content">
    <?php if ($search) search_box(); ?>
    <img class="icon" src="<?php echo $img ?>" alt="<?php echo $alt ?>"/>
    <h2><?php echo $title ?></h2>
    <div class="clear"></div>
  </div>
</div>
<?php
}
?>

<?php
function search_box()
{
?>

<div class="search">
<!-- uses this custom google search:
     http://www.google.com/cse/home?cx=002959308775471924435:dpvgesidqfe -->
<form action="search.php" id="cse-search-box">
  <input name="cx" type="hidden" value="002959308775471924435:dpvgesidqfe" />
  <!-- results go to an iframe -->
  <input name="cof" type="hidden" value="FORID:10" />
  <input name="ie" type="hidden" value="UTF-8" />
  <input name="q" class="input" size="28" type="text" />
  <input name="sa" class="search-button" type="submit" value="Search" />
  <input name="siteurl" type="hidden" value="1.open.gmodules.com/gadgets/ifr?container=open&mid=1&v=677f9ad3fca5a95665c4a5615dc689&lang=all&country=ALL&view=home&url=http%3A%2F%2Fwww.google.com%2Fcse%2Fapi%2F002959308775471924435%2Fcse%2Fdpvgesidqfe%2Fgadget&libs=core%3Acore.io%3Arpc#rpctoken=1138051686" />
</form>
</div>

<?php
}
?>

