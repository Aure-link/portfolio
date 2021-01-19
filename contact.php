<?php include 'header.php';?>

<div class="breadcrumbs contact">
  <div class="container">
    <div class="left">
      <h1 class="title">Contact</h1>
    </div>
    <div class="right">
      <ul>
        <li>
          <a href="/">Accueil </a>/
        </li>
        <li>
          Contact
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="contactMe">
  <div class="container">
    <div class="title">
      Restons en contact !
    </div>
    <form action="send.php" method="POST" id="contact">
      <div class="firstLineContact">
        <input class="input" id="nom" name="nom" placeholder="Nom" type="text">
        <input class="input" id="email" name="email" placeholder="Email" type="email">
      </div>
      <div class="secondLineContact">
        <input class="input" id="sujet" name="sujet" placeholder="Objet" type="text">
        <textarea class="textarea" id="message" name="message" placeholder="Votre message ici ..." type="text"></textarea>
      </div>
      <div class="lastLineContact">
        <div class="g-recaptcha" data-sitekey="6LcdMx4UAAAAAEIvG-jwboDabcvOhQhOfBe_ROrb"></div>
        <button type="submit" class="submit" name="submit">Envoyer</button>
      </div>

    </form>
  </div>
</div>

<?php include 'footer.php';?>
