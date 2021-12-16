<template>
  <div>
    <!-- Modal connexion -->
    <div
        class="container-lectures"
        id="cnxModal"
        ref="cnxModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true">
          <div class="container-form">
            <h1>Connexion à l'application</h1>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>


            <input type="text" class="container_form_box" placeholder="Login"
                   v-model="utilisateurs.nom"
            >


            <input type="text" class="container_form_box" placeholder="Mot de passe"
                   v-model="utilisateurs.mdp"
            >

          </div>


          <div v-if="message != null" class="alert alert-warning text-center" role="alert">
            {{ message }}
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-dark"
                    @click="deconnect" data-dismiss="modal">
              Deconnexion
            </button>

            <button type="button" class="btn btn-dark"
                    @click="connect"
            >
              Connexion
            </button>
      </div>
    </div>


    <!-- Modale erreur -->
    <div
        class="modal fade"
        id="errorModal"
        ref="errorModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="background-color:transparent!important;">
          <div class="modal-body">
            <div v-if="message != null"
                 class="alert alert-warning text-center" role="alert">
              {{ message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "connexion"
}
</script>

<style scoped>

</style>