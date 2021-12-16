<template>
  <div>
    <div id="fond">
      <div id="h1-container">
        <h1>Bienvenue</h1>

      </div>
      <div id="bienvenu-container">
        <p>Dans mon cabinet de sophrologie</p>
        <div>
          <button>
            <a href="#">Contacter</a>
          </button>
          <div>
            <a href="#"><img src="../assets/images/icons/insta.png" alt=""></a>
            <a href="#"><img src="../assets/images/icons/google.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
    <div id="logo-fond"></div>
    <main class="main-accueil">
      <div class="home-section">
        <div class="h2-container">
          <h2> Bienvenue</h2>
        </div>
        <p><strong> Sophrologue </strong>, j'exerce dans mon cabinet situé au centre de soins <strong>d’Hérimoncourt
          (25310)</strong>. Je peux, si le besoin se présente, me rendre à votre domicile ou vous accompagner en visio -
          conférence.

          Je pratique également des séances de groupe en entreprise, école, Ehpad, association.

          La sophrologie est indiquée pour gérer le stress et l’anxiété, améliorer la qualité du sommeil, augmenter sa
          concentration, stimuler la confiance et l’estime de soi, développer le lâcher prise, se préparer à un
          événement important comme l’accouchement ou encore le passage du permis de conduire, etc…

          Grâce à un parcours d’accompagnement personnalisé, je vous aide à optimiser les ressources que vous possédez
          en vous afin d’atteindre votre objectif. </p>
        <br/>
        <p>Pourquoi devenir quelqu’un d’autre lorsque que l’on peut être soi-même ?</p>

      </div>
      <div class="home-section">
        <div class="h2-container">
          <h2>Mes activités</h2>
        </div>
        <div id="activite-container">


          <router-link to="sophrologie" class="activite">
            <div><img src="../assets/images/picto-sophrologie.png" alt="">
              <p>Atelier sophrologie</p>
            </div>
          </router-link>
          <router-link to="hypnose" class="activite">
            <div><img src="../assets/images/picto-cigarette.png" alt="">
              <p>Atelier Hypnose et arrêt du tabac</p>
            </div>
          </router-link>
          <router-link to="bebe" class="activite">
            <div>
              <img src="../assets/images/picto-bebe.png" alt="">
              <p>Atelier Atelier Yoga et massage pour bébés</p>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>

</template>

<script>

export default {
  name: "Accueil",
  data() {
    return {}
  },
}
</script>

<style scoped lang="less">
#fond {
  background-image: linear-gradient(transparent, rgba(255, 255, 255, 0.7)), url("../../src/assets/images/SVG/fond-test1.svg");
}

#logo-fond {
  background-image: url('../assets/images/logo-grand.png');
  width: 100%;
  height: 800px;
  position: absolute;
  z-index: -1;
  mix-blend-mode: overlay;
  opacity: 65%;
  background-repeat: no-repeat;
  top: -50px;
  background-position: center;
  background-size: 830px;
  background-position-x: 30%;
  background-position-y: 130px;
}


.main-accueil {
  margin-top: -200px;

  .home-section:first-child {
    h2 {
      margin-top: 0;
    }
  }
}

@media screen and (min-width: 800px) {
  .main-accueil {
    margin-top: -700px;
  }
}

@media screen and (min-width: 800px) {

  #logo-fond {
    height: 200%;
    background-size: 1800px;
    background-position-y: 159px;
  }
}


.activite {

  text-decoration: none;
  color: black;

  div {
    min-height: 20rem;
    display: flex;
    flex-direction: column;
  }

  p {
    text-align: center;

  }
}
</style>
