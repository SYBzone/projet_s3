<template>
  <div class="big_container">
    <div class="container-form" style="position: relative;">
      <form ref="form" @submit.prevent="sendEmail">
        <h1 id="form-h1">Envoyer un message</h1>

        <input class="container_form_box" type="text" name="user_name" required placeholder="Nom">
        <input class="container_form_box" type="email" name="user_email" required placeholder="email">

        <textarea class="container_form_box" name="message" placeholder="message"></textarea>

        <button class="button1"
                type="submit" value="Send">
          Envoyer
        </button>
      </form>
    </div>

    <div id="myModal" class="modal" v-if="modal === true">
      <div class="modal-message modal-content">
        <h1> Message envoyé !</h1>
        <p>Je vous répondrais dès que possible </p>
        <button class="button1" @click="modal = false">Ok</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">


</style>
<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      modal: false,
    }
  },
  name: 'Message',
  methods: {

    sendEmail() {
      var text = document.getElementById('form-h1');
      emailjs.sendForm('service_9w0u15r', 'template_h9hbfa5', this.$refs.form, 'user_waVd7NqRUzdzMqoVUZE2j')
          .then((result) => {
            console.log('SUCCESS!', result.text);
            this.modal = true;
            text.textContent = "Message envoyé !";
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
}
</script>

<style scoped lang="less">

/* The Modal (background) */
#myModal {
  display: inline-block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 40%; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(141, 160, 181);/* Fallback color */
  background-color: rgba(141, 160, 181, .7); /* Black w/ opacity */


}


/* Modal Content (image) */
.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  padding: 20px;
  width: 60%;
  height: 40%;
  max-width: 700px;
  background-color:#dddddd ;
}
@media(min-width: 800px) {
  #myModal{
    padding-top: 10%;
  }
}

h1 {
  text-align: center;
}

.button1 {
  background-color: #44B6D0;
  transition: ease-in-out 0.5s;
  cursor: pointer;
}

.button1:hover {
  background: #56C388;
  transform: scale(1.1);

}
</style>