<template>
  <div>
    <div id="sophrologie-accueil">
      <h1>Contact</h1>
    </div>
    <main>
      <div class="h2-container" style="width: 25rem;  max-width: 85%;">
        <h2>Tarifs</h2>
      </div>
      <div class="container-paragraphe">
        <p>Le</p>
      </div>
    </main>963
    <Tarifs></Tarifs>
    <Message></Message>
  </div>
</template>

<script>
import Tarifs from "@/components/composants/Tarifs";
import Message from "@/components/composants/Message";

export default {
  components: {Tarifs,
  Message},
  data() {
    return {
      name:"RDV2",

    }
  },
}
</script>

<style scoped lang="less">
#sophrologie-accueil {
  background-image: url('../../src/assets/images/cabinet_photos.jpg');
}
</style>