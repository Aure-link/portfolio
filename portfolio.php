<?php include 'header.php';
include 'tableau.php';
?>

<div class="breadcrumbs portfolio">
  <div class="container">
    <div class="left">
      <h1 class="title">portfolio</h1>
    </div>
    <div class="right">
      <ul>
        <li>
          <a href="/">Accueil </a>/
        </li>
        <li>
          portfolio
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="portfolio">
	<div class="work" id="work">
		<div class="container">
			<h1 class="title">Mes travaux</h1>
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
                <?php if ($i == 3): ?>
                  <div class="more">
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
</div>


<?php include 'footer.php';?>
