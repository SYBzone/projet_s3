<template>
  <div>
    <div class="tarif-container" v-for="tarif in liste" :key="tarif.id">
      <div id="tarif-sophrologie " class="modal-ouvert">
        <div class="tarif-atelier">
          <strong>{{ tarif.acf.atelier }}</strong>
          <button @click="open(); selected(tarif.acf)" class="button1">Choisir</button>
        </div>
        <div v-if="seen === true" class="tarif-sophrologie-modal">
          <table>
            <tr>
              <th></th>
              <th scope="col">Durée de la scéance</th>
              <th scope="col">Prix</th>
            </tr>
            <tr>
              <th scope="row"> Scéance individuelle en cabinet adulte</th>
              <td>1h30 la première scéance / 1h les suivantes</td>
              <td>{{ tarif.acf.prix }}</td>
              <td></td>
            </tr>
          </table>
          <a :href="tarif.acf.tarif_complet"> Voir les détails des prix et le formules.</a>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import param from "@/param/param";
import axios from 'axios';

export default {
  name: "Tarifs",
  data() {
    return {
      // sophro: false,
      // hypnose: false,
      // bebe: false,
      border: false,
      liste: [],
      seen:false,
      SelectedAtelier: null
    }
  },
  created() {
    axios.get(param.host + "tarif")
        .then(response => {
          this.liste = response.data;
          console.log("liste", this.liste);
        })
        .catch(error => console.log(error + "probleme"))
  },

  methods: {
    selected(element) {
      this.SelectedAtelier = element;
    },
    open() {
      this.seen = !this.seen
      document.body.classList.add('modal-ouvert')
    },
    // openAtelier(atelier) {
    //   // document.getElementById('tarif-sophrologie').classList.add('modal-ouvert')
    //
    //   if (atelier === "sophrologie") {
    //     this.sophro = !this.sophro
    //     // if (this.sophro === true) {
    //     //   // document.getElementById('modal').classList.add('modal-ouvert')
    //     // }
    //   }
    // },
    // if (this.border === true){
    //
    // },
  }
}
</script>

<style scoped lang="less">
table {
  th {
    padding-top: 20px;
  }

  td {
    text-align: center;
  }

  .tarif-petite {
    padding-top: 10px;
  }
}

.modal-ouvert {
  border: 1px solid darkgray;
  padding: 5px;
  width: 100%;
}

#tarif-sophrologie {
  width: 100%;
}


.tarif-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
}

.tarif-atelier {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
}

.tarif-sophrologie-modal {
  position: relative;
  height: 12rem;

  table {
    height: 10rem;

    tr {
      vertical-align: text-top;

      th {
        width: 35%;
      }
    }
  }

  a {
    margin-top: 50px;
    position: absolute;
    bottom: 0;
    right: 0;
    text-decoration: none;
    color: #426DA8;
  }
}

</style>