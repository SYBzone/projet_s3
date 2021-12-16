<template>
  <div id="lectures">
    <div>
      <h2 class="h2-container">Lectures</h2>
    </div>
    <div class="container-lectures">
      <div class="container-lecture" v-for="lecture in liste" :key="lecture.id">
        <img @click="open(); selected(lecture.acf)" :src="lecture.acf.image_avant.url" :alt="lecture.acf.nom"
             style="cursor:pointer;">
        <p>{{ lecture.acf.auteur }}</p>
        <div id="myModal" class="modal" v-if="seen === true">
          <div class="modal-big-container">
            <div id="caption">{{ selectedItem.nom }}</div>
            <div style="position: relative">
              <span class="close" @click=close()>&times;</span>
            </div>
            <div class="modal-container">

              <img class="modal-content" :src="selectedItem.image_avant.url" :alt="lecture.acf.nom"
                   style="cursor:pointer;">
              <img class="modal-content" :src="selectedItem.image_arriere.url" :alt="lecture.acf.nom"
                   style="cursor:pointer;">
            </div>
          </div>
        </div>
        <!--      </div>-->
        <!--      <Modal v-if='event === true'>-->
        <!--        <div slot='body'>-->
        <!--          <img :src="lecture.acf.auteur"/>-->
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

  name: "Lectures",
  data() {
    return {
      liste: [],
      titrePage: 'lectures',
      seen: false,
      selectedItem: null,
    }
  },

  created() {

    axios.get(param.host + "lecture")
        .then(response => {
          this.liste = response.data;
          console.log("liste", this.liste);
        })
        .catch(error => console.log(error))
    // this.liste = this.event.map(event => {
    //   return { ...event, show: false }
    // })

  },

  methods: {
    open() {
      this.seen = true
      document.body.classList.add('open')
    },
    selected(element) {
      this.selectedItem = element;
    },
    close() {
      this.seen = false;
      document.body.classList.remove('open');
    }

    // handleSelectItem() {
    // this.selectedItem = this.liste.lecture.image_avant.url ;
    // you can also handle toggle action here manually to open and close dropdown
    // }
  }

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

<style scoped lang="less">

/* The Modal (background) */
#myModal {
  display: inline-block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(141, 160, 181); /* Fallback color */
  background-color: rgba(141, 160, 181, .7); /* Black w/ opacity */
}


/* Modal Content (image) */
.modal-big-container{
  background: white;
  margin: 2rem;
  @media(min-width: 800px) {
    margin: 4rem;

  }
}
.modal-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.modal-content {

  margin: auto;
  padding: 20px;
  width: 50%;
  height: auto;
  max-width: 400px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #426DA8;
  padding: 10px 0;
  height: auto;
}

/* Add Animation */
.modal-content, #caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0)
  }
  to {
    -webkit-transform: scale(1)
  }
}

@keyframes zoom {
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: -50px;
  right: 5%;
  color: black;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #426DA8;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 75%;
    height: auto;
  }
}


#lectures .h2-container {
  width: 18rem;
}

</style>
