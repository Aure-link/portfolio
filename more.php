<?php include 'header.php';
include 'tableau.php';
if (isset($_GET['id'])) {
  $projet = $projects[$_GET['id']];
}
?>

<div class="moreInfo">
  <div class="container">
    <div class="content">
      <div class="left">
        <div class="explication">
          <div class="title animated lightSpeedIn"><?=$projet['title']?></div>
          <div class="info">
            <?=$projet['text']?>
          </div>
          <div class="myWork info">
            <?=$projet['resume']?>
          </div>
          <div class="desc info">
            <?=$projet['description']?>
          </div>
          <?php
            if (!empty($projet['livrables'])) {
          ?>
          <div class="myWork info livrables">
            Les livrables :
          </div>
          <div class="livrables info">
            <?=$projet['livrables']?>
          </div>
          <?php } ?>
        </div>
        <div class="plus">
          <a class="button" href="<?=$projet['link']?>" target="_blank">Voir le site</a>
        </div>
      </div>
      <div class="right">
        <img class="img" width="100%" height="325px" src="<?=$projet['img']?>"/ alt="<?=$projet['alt']?>">
        <div class="infos">
          <div class="title"></div>
          <div class="date"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php include 'footer.php';?>
