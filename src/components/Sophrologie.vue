<template>
  <div>
    <div id="sophrologie-accueil">
      <h1>Sophrologie</h1>

    </div>
    <main>
      <div class="h2-container" style="width: 25rem;  max-width: 85%;">
        <h2>La sophrologie c'est quoi ?</h2>
      </div>
      <div id="quoi" class="container-paragraphe">
        <div>
          <p>Créée en 1960 par le neuropsychiatre Alfonso Caycedo, la sophrologie est une méthode psychocorporelle de
            développement personnel qui permet de retrouver un bien-être au quotidien et de développer son
            potentiel.
            "psychocorporelle" parce que cette méthode travaille sur le corps comme sur l'esprit. On parle aussi
            d'approche globale de l'individu. </p>
          <img src="../assets/images/page_sophrologie/triangle.png" alt="">
        </div>
      </div>
      <p>De façon verbale et non tactile la sophrologie fait partie des thérapies brèves et s'appuie sur 3
        leviers:</p>
      <ul>
        <li>le contrôle de la respiration</li>
        <li>la détente musculaire</li>
        <li>les visualisations positives ou suggestions mentales</li>
      </ul>
      <div id="qui" class="h2-container" style="width: 25rem;  max-width: 85%;">
        <h2>La sophrologie, pour qui ?</h2>
      </div>


      <div class="container-paragraphe">
        <h3>Les enfants</h3>
        <div>
          <p>Découverte de l'apprentissage et des sentiments, développement de la motricité, de la socialisation,
            de
            la communication ou encore structuration de la pensée… autant d'éléments qui jalonnent l'enfance.
            Dans
            cette période d'éveil et de découverte, la sophrologie permet à l'enfant de dépasser les difficultés
            personnelles qu'il peut rencontrer. Se recentrer, gérer ses émotions et être à l'écoute de soi sont
            des
            apprentissages qui resteront ensuite des outils précieux pour toute sa construction future.

            La sophrologie peut se pratiquer dès le plus jeune âge, car elle repose sur des exercices simples
            qui
            font appel à la créativité et l'imagination. Avec les enfants, les exercices de respiration et de
            relaxation sont amenés de manière ludique, par des jeux et des contes. Le temps de séance est aussi
            adapté, environ 45 minutes.
          </p>
          <img src="../assets/images/sophtologie.png" alt="">
        </div>
      </div>

      <div class="container-paragraphe">
        <h3>Les adolescent</h3>
        <div>
          <p>L'adolescence est une étape majeure du développement de soi qui amène une remise en question complète des
            concepts, valeurs ou croyances acquises depuis l'enfance. Dans cette période parfois mouvementée,
            l'adolescent en quête de sa nouvelle identité vit de nombreuses expériences qui forgeront l'adulte qu'il
            deviendra. Souvent, cette étape peut être déstabilisante et provoquer une perte de confiance en soi, de
            la
            colère, de l'anxiété, de la morosité… C'est aussi ce moment où les premiers examens et les choix
            d'orientation peuvent générer du stress. La sophrologie lui permet de prendre conscience de ses
            ressources
            et développer ses capacités afin de mieux vivre tout ce qui change pour lui au niveau physique, mental
            et
            émotionnel. Accompagné, l'adolescent peut alors retrouver un équilibre et se sentir "mieux dans sa
            peau".</p>
          <img src="../assets/images/page_sophrologie/sophrologie-adolescent.jpg" alt="">
        </div>
      </div>

      <div class="container-paragraphe">
        <h3>Les adultes</h3>
        <div>
          <p>La vie active d'aujourd'hui, entre vie professionnelle et vie personnelle est souvent bien remplie et il
            est parfois difficile de prendre le temps de ralentir un temps pour se reconnecter à soi, à ses désirs
            profonds et retrouver un équilibre intérieur. La sophrologie permet cette parenthèse pour pouvoir se
            donner les moyens d'aller vers ce qui compte vraiment pour soi. Toutes les ressources et les capacités
            sont à l'intérieur de chacun de nous et la sophrologie permet de les stimuler et de les activer
            durablement pour améliorer le quotidien, gérer ces comportements qui dérangent ou encore préparer les
            événements importants de la vie.</p>
          <img src="../assets/images/page_sophrologie/sophrologie-adultes.jpg" alt="">
        </div>
      </div>
<!--      <Create_user></Create_user>-->

      <div class="container-paragraphe">
        <h3>Les entreprise</h3>
        <div>
          <p>Quelle que soit sa taille, une entreprise repose sur les talents, les compétences et le savoir-faire de
            ses collaborateurs. Aujourd'hui, le stress, les tensions, le manque de communication, les difficultés
            d'adaptation face aux changements peuvent nuire socialement et économiquement à une entreprise et à son
            image. La sophrologie propose des outils pour répondre aux nouveaux rythmes et conditions de travail et
            faire face à la montée des risques psycho-sociaux. Elle permet de ramener du bien-être dans l'entreprise
            et de développer le potentiel des collaborateur.</p>
        </div>
      </div>

      <div id="pourquoi" class="h2-container" style="width: 25rem;  max-width: 85%;">
        <h2>La sophrologie, pourquoi ?</h2>
      </div>
      <p style="width: 100%; margin-top: 150px;">Les champs d’application sont très nombreux que ce soit en matière de
        développement personnel, d’amélioration du quotidien, d’accompagnement scolaire ou professionnel ou encore de
        préparation mentale.
      </p>
    </main>
    <div id="sophrologie_liste_container">
      <div v-on:click="move('visible')">
        <h3>gestion de stress</h3>
        <p v-if="this.visible">charge mentale, burn-out, anxiété, dépression, troubles de l’humeur</p>
      </div>
      <div v-on:click="move('visible2')">
        <h3>Préparation morale</h3>
        <p v-if="this.visible2">compétition sportive, examen scolaire, permis de conduire, examen médical, prise de
          parole en public</p>
      </div>
      <div v-on:click="move('visible3')">
        <h3>Maternité</h3>
        <p v-if="this.visible3"> préparation à l’accouchement, équilibre mère-femme, anxiété, charge mentale, confiance
          en soi, gestion des émotions</p>
      </div>
      <div v-on:click="move('visible4')">
        <h3>ambiance</h3>
        <p v-if="this.visible4">difficultés d’apprentissage, timidité, confiance en soi, gestion des émotions, troubles
          de l’attention</p>
      </div>
      <div v-on:click="move('visible5')">
        <h3>Enfance</h3>
        <p v-if="this.visible5">difficultés d’apprentissage, timidité, confiance en soi, gestion des émotions, troubles
          de l’attention</p>
      </div>
      <div v-on:click="move('visible6')">
        <h3>Adolescence</h3>
        <p v-if="this.visible6">difficultés d’apprentissage, confiance en soi, gestion des émotions, démotivation,
          acceptation du corps, timidité, complexes, troubles de l’humeur, manque d’assurance, troubles de
          l’attention</p>
      </div>
      <div v-on:click="move('visible7')">
        <h3>Vie professionelle</h3>
        <p v-if="this.visible7">prise de parole en public, cohésion d’équipe, démotivation, prévention/accompagnement du
          burn-out</p>
      </div>
      <div v-on:click="move('visible8')">
        <h3>Changement de situation</h3>
        <p v-if="this.visible8"> gestion des émotions, dépression, reprendre confiance en soi après un échec/une
          difficulté, accompagnement
          d’un divorce, d’une séparation, d’un déménagement, d’une reconversion professionnelle
        </p>
      </div>
      <div v-on:click="move('visible9')">
        <h3>Développement Personnel</h3>
        <p v-if="this.visible9">confiance en soi, stimulation de la créativité, troubles de l’humeur, lâcher prise</p>
      </div>
      <div v-on:click="move('visible10')">
        <h3>Amélioration du quotidien</h3>
        <p v-if="this.visible10">troubles du sommeil, acouphènes, gestion de la douleur, troubles de la mémoire,
          stimulation de la guérison,
          troubles de l’humeur, amélioration de la vitalité
        </p>
      </div>
      <div v-on:click="move('visible11')">
        <h3>Trouble alimentaires</h3>
        <p v-if="this.visible11">boulimie, anorexie, accompagnement à la perte/prise de poids, pulsions alimentaires</p>
      </div>
      <div v-on:click="move('visible12')">
        <h3>Trouble Du sommeil</h3>
        <p v-if="this.visible12"> difficultés d’endormissement, manque de vitalité, angoisses, insomnies</p>
      </div>
      <div v-on:click="move('visible13')">
        <h3>Phobies</h3>
        <p v-if="this.visible13">avion, animaux, agoraphobie, claustrophobie, phobie des transports, prises de sang…</p>
      </div>
      <div v-on:click="move('visible14')">
        <h3>Addictions</h3>
        <p v-if="this.visible14">Tabagisme, addiction</p>
      </div>
    </div>

    <!--    <main>-->
    <!--      <div class="container-paragraphe" style="margin-left: 1rem">-->
    <!--        <div id="individuelle" class="h2-container" style="width: 25rem;  max-width: 85%;">-->
    <!--          <h2>La sophrologie, pour qui ?</h2>-->
    <!--        </div>-->
    <!--        <p>Une séance de sophrologie dure environ 1h pour les adultes, environ 45 minutes pour les enfants.</p><br/>-->
    <!--        <p>A noter que la durée de la première séance est en moyenne d’1h15 pour les adultes et d’1h pour les enfants.-->
    <!--        </p>-->
    <!--        <h3>Chaque séance se décompose en 3 temps :</h3>-->
    <!--        <div class="individuelle-big-container">-->
    <!--          <span>Un temps d'accueil et d'écoute</span>-->
    <!--          <div class="individuelle-container">-->
    <!--            <p> vous vous exprimez librement sur vos besoins, votre objectif et votre évolution vers son atteinte. Cet-->
    <!--              échange permet de revenir sur votre entraînement entre les deux séances et votre vécu de la semaine. C’est-->
    <!--              l’occasion d’affiner la séance proposée pour l’adapter parfaitement à votre évolution vers le-->
    <!--              changement.</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </main>-->
    <main>
      <div id="individuelle" class="h2-container" style="width: 25rem;  max-width: 85%;"><h2>Scéance individuelle</h2>
      </div>
      <p>Une séance de sophrologie dure environ 1h pour les adultes, environ 45 minutes pour les enfants.</p><br/>
      <p>A noter que la durée de la première séance est en moyenne d’1h15 pour les adultes et d’1h pour les enfants.
      </p>



    </main>
    <div class="individuelle-big-container">
      <h3>Chaque séance se décompose en 3 temps :</h3>
      <div class="individuelle_carrousel">
        <div class="individuelle-container">
          <span>1</span>
          <h4>Un temps d'accueil et d'écoute</h4>
          <p>Vous vous exprimez librement sur vos besoins, votre objectif et votre évolution vers son atteinte. Cet
            échange permet de revenir sur votre entraînement entre les deux séances et votre vécu de la semaine. C’est
            l’occasion d’affiner la séance proposée pour l’adapter parfaitement à votre évolution vers le
            changement.</p>
        </div>
        <div class="individuelle-container">
          <span>2</span>
          <h4>Un temps de pratique</h4>

          <p>Le sophrologue vous guide dans des exercices de relaxation dynamique (exercices doux associant la
            respiration et la détente musculaire) adaptés à l’intention de votre séance. Ensuite, dans un état de
            relaxation profonde, le sophrologue vous guide dans une relaxation de tout le corps et une visualisation
            positive en lien avec l’intention de la séance et l’objectif global de l’accompagnement.</p>

        </div>
        <div class="individuelle-container">
          <span>3</span>
          <h4> Un temps d’échange</h4>
          <p> Vous exprimez vos ressentis physiques, corporels et émotionnels sur le temps de pratique.
          </p>

        </div>
      </div>
    </div>
    <main>
      <div id="groupe" class="h2-container" style="width: 25rem;  max-width: 85%;"><h2>Scéance de groupes</h2>
      </div>


      <div class="container-paragraphe">
        <div><p>La séance dure 1h ou environ 45 minutes si c'est un groupe d'enfants. Ces séances sont généralement
          construites autour de thèmes généraux (se recentrer, évacuer le stress, retrouver la vitalité, développer sa
          concentration…).
          Le nombre de séances est flexible selon les attentes. Le nombre de personnes qui constitue le groupe varie
          en fonction du public et de l’objectif, afin de pouvoir vivre sereinement la pratique.
          Les trois temps de la séance restent les mêmes. La pratique est adaptée de manière à ce que les exercices et
          la visualisation soient parlants pour tous les participants. Le temps d'échange à l'issue de la pratique est
          un réel moment de partage et d'écoute. Chacun est libre de s'exprimer devant le groupe ou de garder ses
          ressentis pour soi.
        </p>
          <img src="../assets/images/page_sophrologie/sophrologie_groupe.jpg" alt="">
        </div>
      </div>
      <br/>
      <h3>Les domaines d’interventions de la sophrologie en groupe sont vastes, quelques exemples :
      </h3>
      <br/>
      <div class="sophrologie_liste_groupe">
        <i class="fi fi-rr-pouces vers le bas"></i>

        <ul>

          <li>Les écoles et autres structures d’apprentissage (école, collège, lycée, formation continue, centre
            militaire, auto-école, etc) : aide à la concentration, gestion des émotions, préparation aux examens, etc.
          </li>
          <li>Les maisons de retraite : stimulation de la mémoire, gestion du sommeil, renforcement de l’énergie,
            prise de recul pour le personnel, etc.
          </li>
          <li>Les entreprises : développement de la communication, gestion des conflits, accompagnement au changement,
            amélioration des performances, etc.
          </li>
          <li>Les structures médicales (clinique, hôpital, maternité, centre du sommeil, centre de convalescence,
            centre anti-douleur) : gestion de la douleur, gestion du sommeil, préparation à l’accouchement,
            accompagnement d’un traitement médical, amélioration de l’image de soi, prise de recul du personnel, etc.
          </li>
          <li>Les centres sociaux : estime de soi, insertion sociale et professionnelle, prise de recul du personnel,
            etc.

          </li>
          <li>Les clubs sportifs, culturels et artistiques : gestion du trac, aide à la concentration, développement
            de la créativité, récupération physique, préparation mentale, etc.
          </li>
          <li>Le milieu carcéral : gestion de la violence, estime de soi, insertion sociale et professionnelle, prise
            de recul du personnel, etc.
          </li>
          <li>Les collectivités (mairies, conseils généraux, etc) : gestion du stress, communication, prise de recul
            du personnel, etc

            Tarifs sur demande en fonction du nombre de participants.
          </li>
        </ul>
        <img src="../assets/images/page_sophrologie/sophrologie_groupe_liste.jpg" alt="">

      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Sophrologie",
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
      visible8: false,
      visible9: false,
      visible10: false,
      visible11: false,
      visible12: false,
      visible13: false,
      visible14: false,
    }

  },
  methods: {
    move(vis) {
      // this.visible = !this.visible;
      // vis=true;
      if (vis === "visible") {
        this.visible = !this.visible
      }
      if (vis === "visible2") {
        this.visible2 = !this.visible2
      }
      if (vis === "visible3") {
        this.visible3 = !this.visible3
      }
      if (vis === "visible4") {
        this.visible4 = !this.visible4
      }
      if (vis === "visible5") {
        this.visible5 = !this.visible5
      }
      if (vis === "visible6") {
        this.visible6 = !this.visible6
      }
      if (vis === "visible7") {
        this.visible7 = !this.visible7
      }
      if (vis === "visible8") {
        this.visible8 = !this.visible8
      }
      if (vis === "visible9") {
        this.visible9 = !this.visible9
      }
      if (vis === "visible10") {
        this.visible10 = !this.visible10
      }
      if (vis === "visible11") {
        this.visible11 = !this.visible11
      }
      if (vis === "visible12") {
        this.visible12 = !this.visible12
      }
      if (vis === "visible13") {
        this.visible13 = !this.visible13
      }
      if (vis === "visible14") {
        this.visible14 = !this.visible14
      }
    }
  }
}
</script>

<style scoped>
button:hover{
  background-color: red;
}
#sophrologie-accueil{
  background-image: url('../assets/images/page_sophrologie/sophrologie2.jpg');

}

/*Individuelle*/


</style>
