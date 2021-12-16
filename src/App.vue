<template>
  <div>
    <header>
      <div id="logo-container">
        <img id="logo" src="./assets/images/logo-grand.png" alt="Logo">
        <img id="titre" src="./assets/images/titre.png" alt="" class="stop-menu">
      </div>
      <div class="nav-toggle" @click="closemenu() ;svgmenu()">
        <div class="nav-toggle-bar"></div>
      </div>



      <nav class="menu">
        <img src="./assets/images/logo-grand.png" alt="">
        <ul>
          <li>
            <router-link @click.native="closemenu(); scrollToTop() ;svgmenu()"  to="/">Accueil</router-link>
          </li>
          <svg id="svg-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="rgba(49, 167, 167, 1)" offset="0%"></stop>
                <stop id="stop2" stop-color="rgba(86, 195, 136, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#sw-gradient)"
                  d="M22,-39.2C27.5,-35,30.2,-27,29.6,-19.8C28.9,-12.7,25,-6.3,26.5,0.9C28.1,8.1,35.1,16.2,33.7,19.9C32.4,23.6,22.6,22.9,15.6,24.6C8.6,26.3,4.3,30.4,-0.6,31.3C-5.4,32.3,-10.8,30.1,-16.2,27.5C-21.6,24.9,-27,21.8,-31,17.1C-35,12.5,-37.6,6.2,-35.8,1C-34,-4.2,-27.8,-8.3,-24.9,-14.9C-22,-21.4,-22.3,-30.3,-18.7,-35.5C-15.1,-40.8,-7.5,-42.4,0.4,-43.1C8.3,-43.7,16.6,-43.4,22,-39.2Z"
                  width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
                  style="transition: all 0.3s ease 0s;" stroke="url(#sw-gradient)"></path>

          </svg>

          <li>
            <router-link @click.native="closemenu(); scrollToTop() ;svgmenu()" to="/presentation">Qui suis-je ?</router-link>
          </li>
          <li>
            <router-link  @click.native="closemenu(); scrollToTop() ;svgmenu()" to="/sophrologie">Sophrologie</router-link>
          </li>
          <svg id="svg-menu" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="rgba(49, 167, 167, 1)" offset="0%"></stop>
                <stop id="stop2" stop-color="rgba(86, 195, 136, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#sw-gradient)"
                  d="M22,-39.2C27.5,-35,30.2,-27,29.6,-19.8C28.9,-12.7,25,-6.3,26.5,0.9C28.1,8.1,35.1,16.2,33.7,19.9C32.4,23.6,22.6,22.9,15.6,24.6C8.6,26.3,4.3,30.4,-0.6,31.3C-5.4,32.3,-10.8,30.1,-16.2,27.5C-21.6,24.9,-27,21.8,-31,17.1C-35,12.5,-37.6,6.2,-35.8,1C-34,-4.2,-27.8,-8.3,-24.9,-14.9C-22,-21.4,-22.3,-30.3,-18.7,-35.5C-15.1,-40.8,-7.5,-42.4,0.4,-43.1C8.3,-43.7,16.6,-43.4,22,-39.2Z"
                  width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
                  style="transition: all 0.3s ease 0s;" stroke="url(#sw-gradient)"></path>

          </svg>
          <li><router-link @click.native="closemenu(); scrollToTop() ;svgmenu()" to="/hypnose">Hypnose Arrêt du tabac</router-link></li>
          <li><router-link @click.native="closemenu(); scrollToTop() ;svgmenu()" to="/bebe">Massage pour bébés</router-link></li>
          <li>
            <router-link @click.native="closemenu(); scrollToTop() ;svgmenu()" to="/blog">Blog</router-link>
          </li>
          <li>
          <router-link @click.native="closemenu(); scrollToTop() ;svgmenu()" to="/RDV2">Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>





    <section id="menu-desktop-section">
      <div id="menu-desktop-conteneur" class="stop-menu">
        <div class="menu-desktop">
          <router-link @click.native="scrollToTop" to="/">Accueil</router-link>
          <router-link @click.native="scrollToTop" to="/presentation">Qui suis-je ?</router-link>
          <div class="dropdown">
            <button class="dropbtn"><span><router-link @click.native="scrollToTop" to="/sophrologie">Sophrologie</router-link></span></button>
            <div class="dropdown-content">
              <a href="#quoi">quoi</a>
              <a href="#qui">Pour qui</a>
              <a href="#pourquoi">Pourquoi</a>
              <a href="#individuelle">Scéance individuelle</a>
              <a href="#groupe">Scéance de groupes</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn"><span> <router-link @click.native="scrollToTop" to="/hypnose">Hypnose arrêt du tabac</router-link></span></button>
            <div class="dropdown-content">
              <a href="#quoi">quoi</a>
              <a href="#pourquoi">Pourquoi</a>
              <a href="#comment">Comment</a>
            </div>
          </div>
          <div class="dropdown">
          <button class="dropbtn"><span><router-link @click.native="scrollToTop" to="/bebe">Massage pour bébés</router-link></span></button>
          <div class="dropdown-content">
            <a href="#quoi">quoi</a>
            <a href="#qui">Pour qui</a>
            <a href="#pourquoi">Pourquoi</a>
          </div>
        </div>
          <router-link @click.native="scrollToTop" to="/blog">Blog</router-link>
          <router-link @click.native="scrollToTop" to="/RDV2">Contact</router-link>
        </div>
      </div>
    </section>
    <router-view/>

    <footer>
      <svg id="svg-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#426DA8" fill-opacity="1" d="M0,64L60,53.3C120,43,240,21,360,16C480,11,600,21,720,74.7C840,128,960,224,1080,229.3C1200,235,1320,149,1380,106.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <div id="footer-big-container">
        <div class="footer-container">
          <a href="https://www.instagram.com/laetitia_m_sophrologie_hypnose/"><img src="./assets/images/icons/insta-bleu.png" width="75px" alt=""></a>
          <a href=""><img src="./assets/images/icons/google-bleu.png" width="75px" alt=""></a>
          <a href=""><img src="./assets/images/icons/linkedin-bleu.png" width="75px" alt=""></a>
          <button>
            <router-link to="/RDV2" id="footer-rdv">Prendre RDV</router-link>
          </button>

        </div>
        <div class="footer-container">
          <span><router-link @click.native="scrollToTop" to="/">Accueil</router-link></span>
          <span><router-link @click.native="scrollToTop" to="/presentation">Qui suis-je ?</router-link></span>
          <span><router-link @click.native="scrollToTop" to="/sophrologie">Sophrologie</router-link></span>
          <span><router-link @click.native="scrollToTop" to="/hypnose">Hypnose arrêt du tabac</router-link></span>
          <span><router-link @click.native="scrollToTop" to="/bebe">massage pour bébés</router-link></span>
          <span><router-link @click.native="scrollToTop" to="/blog">Citations</router-link></span>
          <span><router-link @click.native="scrollToTop" to="/contact">Contact</router-link></span>
        </div>
        <div class="footer-container">
          <a href=""><img src="./assets/images/icons/maps-and-flags.png" width="50px" alt=""></a>
          <a href="mentions légales.html">Mentions Légales</a>
          <a href="rgpd.html">Politique de confidentialité</a>
          <router-link to="/contact"><img src="./assets/images/icons/appel.png" width="50px" alt=""></router-link>
        </div>
      </div>

    </footer>
  </div>
</template>

<script>


export default {
  name: 'App',

  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
    svgmenu (){
      if (document.documentElement.classList.contains('menu-open')){
        document.getElementById('svg-2').animate([
          // keyframes
          { transform: 'translateX(-400px)  ',opacity: '0'  },
          { transform: 'translateX(-400px)   ',opacity: '0.8'}
        ], {
          // timing options
          duration: 1000,

          fill: "forwards",
        });
      } else {
        document.getElementById('svg-2').animate([
          // keyframes

          { transform: 'translateX(0px)',opacity: '0' },
          { transform: 'translateX(0px)',opacity: '0' }
        ], {
          // timing options
          duration: 1000,
          fill: "forwards",
        });
      }
    },
    closemenu(){
      document.documentElement.classList.toggle('menu-open')

    }


  }

}
</script>

<style lang="less">
@media (min-width: 800px ) {
  #menu-desktop-conteneur {
    display: block;
  }

  #titre {
    display: block;
  }

}

#menu-desktop-section {
  z-index: 100;
}


</style>
