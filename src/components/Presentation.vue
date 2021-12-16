<template>
  <div>
    <div class="parentparent">
      <div id="presentation_container" class="parent">
        <div id="presentation_photo" class="div1">
        </div>
      </div>


      <main class="div2">
        <div class="h2-container" style="width: 25rem;  max-width: 75%;">
          <h2>Qui suis-je ?</h2>
        </div>
        <div id="quoi" class="container-paragraphe">
          <div>
            <p>Les médecines alternatives ont été un réel accompagnement sur le plan physique et psychique dans mon parcours de vie.
            </p>
            <br/>
            <p>Déjà ouverte aux techniques d'accompagnement de la personne, j'ai choisi de me former à la Sophrologie car elle met toujours l'individu au centre, laissant la liberté à chacun d'être soi, avec ses capacités et ses limites.
            </p>
            <br/>
          </div>
        </div>
      </main>



    </div>
    <p style="padding: 0 2.5rem">Après une formation et une dizaine d'années d’expérience  dans le domaine de  la finance, j'ai ressenti le besoin d'écouter mes envies profondes et de retrouver des valeurs fortes telles que l'écoute et la bienveillance.   </p>

  </div>

</template>

<script>
export default {
  name: "Presentation"
}
</script>

<style scoped lang="less">
.svg-container{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

#svg-1 {
  animation: ease-in-out svg 0.4s;


}

@keyframes svg {
  from {
    stroke-dasharray: 0;
  }
  to {
    stroke-dasharray: 100;
  }
}

.parentparent {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.div2 {
  margin-top: -5rem;
}

#presentation_photo {
  clip-path: circle(50% at 50% 50%);
  background-image: url('../assets/images/cabinet_photos.jpg');
  width: 40rem;
  height: 40rem;
  margin-top: -20rem;
  z-index: -1;
  background-size: cover;

}


@media (min-width: 800px) {
  .parentparent {
    flex-direction: row;

    .parent {
      margin-top: 300px;
      margin-left: -20rem;
    }
  }

  .div2 {
    margin-top: 25px;
  }

  .container-paragraphe p {
    max-width: 80%;
  }


}

@media (min-width: 1200px) {
  main {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media (min-width: 1400px) {

  .container-paragraphe p {
    width: 100%;
  }
}


</style>