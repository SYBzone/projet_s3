<template>
  <div id="articles">
    <div>
      <h2 class="h2-container">Articles</h2>
    </div>
    <div class="container-lectures">
      <div class="container-lecture" v-for="article in liste" :key="article.id">
        <a :href="article.acf.lien">
        <img :src="article.acf.photo.url" :alt="article.acf.libelle" style="cursor:pointer;"></a>
        <p>{{ article.acf.libelle }}</p>
        <!--      </div>-->
        <!--      <Modal v-if='event === true'>-->
        <!--        <div slot='body'>-->
        <!--          <img :src="article.acf.auteur"/>-->
        <!--        </div>-->
        <!--      </Modal>-->
        <!--    </div>-->
      </div>
    </div>


  </div>
</template>

<script>

import param from "@/param/param";
import axios from "axios";


export default {

  name: "Articles",
  data() {
    return {
      liste: [],
      titrePage: 'Articles',
      seen: false,
      selectedItem: null,
    }
  },

  created() {

    axios.get(param.host + "article")
        .then(response => {
          this.liste = response.data;
          console.log("liste", this.liste);
        })
        .catch(error => console.log(error))
    // this.liste = this.event.map(event => {
    //   return { ...event, show: false }
    // })

  },
}
//     window.onload = function () {
//       var modal = document.getElementById("myModal");
//
// // Get the image and insert it inside the modal - use its "alt" text as a caption
//       var img = document.getElementById("myImg");
//       var modalImg = document.getElementById("img01");
//       var captionText = document.getElementById("caption");
//
//       img.onclick = function () {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//       }
//
// // Get the <span> element that closes the modal
//       var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on <span> (x), close the modal
//       span.onclick = function () {
//         modal.style.display = "none";
//       }
//     }
</script>


<style scoped>

</style>