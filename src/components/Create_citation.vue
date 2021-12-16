<!--<template>-->
<!--  <div>-->
<!--    <form @submit.prevent="creer">-->
<!--      <div>-->
<!--        <h2 class="h2-container">Ajouter une citation</h2>-->
<!--      </div>-->
<!--      <div>-->
<!--        <input-->
<!--          class="form-control" placeholder="Nom"-->
<!--          v-model="citation.nom"-->
<!--          required>-->
<!--        </input>-->
<!--        <input-->
<!--          class="form-control" placeholder="Citation"-->
<!--          v-model="citation.texte"-->
<!--          required>-->
<!--        </input>-->
<!--      </div>-->
<!--      <button type="submit">Creer</button>-->
<!--      <button>-->
<!--        <router-link to="/blog">annuler</router-link>-->
<!--      </button>-->
<!--    </form>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import param from "@/param/param";-->

<!--export default {-->
<!--  name: "Create_citation",-->
<!--  data() {-->
<!--    return {-->
<!--      citation: {-->
<!--        nom: null,-->
<!--        texte: null-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    creer: function () {-->
<!--      axios({-->
<!--        method: 'post',-->
<!--        url: param.auth,-->
<!--        data: {-->
<!--          'username': param.user,-->
<!--          'password': param.psw-->
<!--        }-->
<!--      }).then(function (response) {-->
<!--        console.log("Reponse token", response);-->
<!--        let token = response.data.token;-->
<!--        console.log("Token", token);-->

<!--        //creation citation-->
<!--        axios({-->
<!--          method: 'post',-->
<!--          data: {-->
<!--            title: this.citation.nom,-->
<!--            status: "publish",-->
<!--            fields: {-->
<!--              citation_nom: this.citation.nom-->
<!--            }-->
<!--          },-->
<!--          url: param.host + 'citation',-->
<!--          headers: {'Authorization': 'Bearer ' + token}-->
<!--        }).then(function (response) {-->
<!--          console.log("retour création citation", response);-->
<!--          this.$router.push('/blog');-->
<!--        }.bind(this))-->
<!--          .catch(error => console.log(error))-->

<!--      }.bind(this))-->
<!--        .catch(error => console.log(error))-->
<!--    }-->
<!--  }-->
<!--}-->

<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
