<template>
  <div>
    <main>
      <Articles></Articles>
      <Lectures></Lectures>
      <Citations></Citations>
    </main>
  </div>

</template>

<script>
import Citations from "./composants/Citations";
import Lectures from "@/components/composants/Lectures";
import Articles from "@/components/composants/Articles";

export default {
  name: "Blog",
  components: {
    Articles,
    Lectures,

    Citations
  },
  data() {
    return {
    }
  },

}
</script>

<style scoped>

</style>
