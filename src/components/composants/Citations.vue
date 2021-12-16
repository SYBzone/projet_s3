<template>
  <div id="Citation">
    <div id="titre_citation">
      <h2 class="h2-container">Citation</h2>
    </div>
    <div class="container-citations">
      <div class="container-citation" v-for="citation in liste" :key="citation.id">
        <p>{{ citation.acf.texte }}</p>
        <span>{{ citation.acf.nom }}</span>
        <div class="test"></div>
      </div>
    </div>
  </div>
</template>

<script>
import param from "@/param/param";
import axios from 'axios';
export default {
  name: "Citations",
  data() {
    return {
      liste: [],
      titrePage: 'Citation'
    }
  },
  created() {
    axios.get(param.host + "citation")
      .then(response => {
        this.liste = response.data;
        console.log("liste", this.liste);
      })
      .catch(error => console.log(error))
  },
}
</script>

<style scoped>


.h2-container {
  margin-top: 0;
}

.container-citations {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.container-citation {
  width: 15rem;
  height: 10rem;
  border: black 4px solid;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 15px 10px;
  text-align: center;
  position: relative;
  transition: all .2s ease-in-out;
  /*z-index: -1;*/
}

.container-citation:hover {
  transform: scale(1.1);
  background-color: rgb(66, 109, 168);
  color: white;
}

.test {
  position: absolute;
  top: 77%;
  left: 50%;
  transform: translateX(-50%) translateY(-77%);

  border-bottom: 2px solid black;
  width: 13.5rem;
  z-index: -1;
}

.container-citation span {
  font-weight: 600;
  background: white;

  padding: 0 20px;
  transition: all .2s ease-in-out;


}

.container-citation:hover span {
  background-color: rgb(66, 109, 168);
  color: white;
}

.container-citation:hover .test {
  border-bottom-color: #dddddd;
}


</style>
