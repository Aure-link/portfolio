<?php include 'header.php';
include 'tableau.php';
?>

<div class="slider">
    <div class="container">
        <div class="slider-info">
            <div class="info">
                <h1>Salut ! C'est moi Aurélien</h1>
                <span>UX Designer et Développeur Front-end</span>
            </div>
        </div>
        <a class="js-scrollTo" href="#work"><span></span><span></span><span></span></a>
    </div>
</div>

<div class="work" id="work">
  <div class="container">
    <h1 class="title">Mes derniers travaux</h1>
    <div class="allWork">
      <div class="line">
        <?php
          for ($i=0; $i<count($projects); $i++):
            $projet = $projects[$i];
        ?>
          <div class="bloc">
            <a href="more.php?id=<?=$i?>">
              <div class="filter"></div>
              <div class="topInfo">
                <div class="date">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  <?=$projet['date']?>
                </div>
              </div>
              <div class="info">
                <h2><?=$projet['title']?></h2>
              </div>
            </a>
          </div>
          <?php if (($i+1)%3 == 0): ?>
            </div>
              <?php if ($i == 2): ?>
                <div class="more" style="display:none;">
                  <a class="button" href="#lineWork"> Voir plus</a>
                </div>
              <?php endif; ?>
            <div class="line" id="lineWork">
          <?php endif; ?>
        <?php endfor; ?>
      </div>
    </div>
  </div>
</div>
<?php include 'footer.php';?>
