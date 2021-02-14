<template>
<div>
  <h1>Judges</h1>
  <div class="card-grid"><get-judges></get-judges></div>
</div>
</template>

<script>
import GetJudges from "@/components/GetJudges.vue";

export default {
    components: { GetJudges },
  
}
</script>

<style scoped>
h1 {
  padding: 50px;
}
</style>