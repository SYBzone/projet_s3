<template>
  <div>

    <div
        class="
          big_container"
    >
      <div
          class="container-form"
      >
        <form
            @submit.prevent="creer" enctype="multipart/form-data"
        >
          <h1>S'inscrire</h1>
          <input
              class="container_form_box"
              type="text"
              placeholder="Nom"
              v-model="utilisateurs.nom"
              required
          />

          <input
              class="container_form_box"
              type="text"
              placeholder="Email"
              v-model="utilisateurs.email"
              required
          />

          <input
              class="container_form_box"
              type="password"
              placeholder="Mot de passe"
              v-model="utilisateurs.mdp"
              required
          />


          <button type="submit" class="button1">
            <span>Créer</span>
          </button>
          <p>ou</p>

          <router-link to="/connexion">
            <button class="button1" type="submit">
              <span>Se connecter</span>
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import param from "@/param/param";
import axios from "axios";


export default {
  name: 'Create_user',
  data() {
    return {
      utilisateurs: {      // Structure d'un participant
        acf: {
          nom: null,
          email: null,
          mdp: null,
        }
      },
    }
  },
  methods: {
    creer: function () {
      // Se signer par JWT API
      // axios({
      //   method: 'post',
      //   url: param.auth,
      //   data: {
      //     'username': param.user,
      //     'password': param.psw
      //   }
      // }).then(function (response) {
      //   console.log("Reponse token", response);
      //
      //   let token = response.data.token;
      //   console.log("Token", token);
      axios({
        method: 'post',
        data: {
          title: this.utilisateurs.acf.nom,
          status: "publish",
          fields: {
            nom: this.utilisateurs.acf.nom,
            email: this.utilisateurs.acf.email,
            mdp: this.utilisateurs.acf.mdp,
          }
        },
        url: param.host + 'utilisateurs',
        // headers: {'Authorization': 'Bearer ' + token}
      }).then(function (response) {
        console.log("Retour création utilisateurs", response);
      }.bind(this))
          .catch(error => {
            console.log("ERREUR création utilisateurs");
            console.log(error)
          })

      // }.bind(this))
      //     .catch(error => {
      //       console.log("ERREUR création média");
      //       console.log(error)
      //     })

      // }.bind(this))
      //     .catch(error => {
      //       console.log("ERREUR Autorisation token");
      //       console.log(error)
      //     })
    }
  }
}


// export default {
//   name: "Create_user",
//   data() {
//     return {
//       name: "",
//       email: "",
//       password: "",
//     };
//   },
//   methods : {
//     creer: function(){
//       // Se signer par JWT API
//       axios({
//         method: 'post',
//         url: param.auth,
//         data :{
//           'username' : param.user,
//           'password' : param.psw
//         }
//       }).then(function (response) {
//         console.log("Reponse token", response);
//         let token = response.data.token;
//         console.log("Token", token);
//
//         // Création du pays
//         axios({
//           method: 'post',
//           data :  {
//             title : this.pays.libelle,
//             status : "publish",
//             fields : {
//               libelle_pays : this.pays.libelle
//             }
//           },
//           url: param.host+'pays_video',
//           headers: { 'Authorization' : 'Bearer '+ token }
//         }).then(function (response) {
//           console.log("Retour création pays", response);
//           this.$router.push('/listePays');
//         }.bind(this))
//             .catch(error => console.log(error))
//
//
//       }.bind(this))
//           .catch(error => console.log(error))
//     }
//
//   }
// };
// export default {
//   name: "register",
//   data() {
//     return {
//       name: "",
//       email: "",
//       password: "",
//     };
//   },
//   methods: {
//     async registerUser() {
//       await axios.post("http://localhost:3000/api/user/register", {
//         name: this.name,
//         email: this.email,
//         password: this.password,
//       });
//     },
//   },
// };
</script>