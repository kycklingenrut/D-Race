<template>
  <div class="judgesPage">
    <b-spinner v-if="loading" label="Spinning"></b-spinner>
    <ul v-else class="grid">
      <li class="judges-list" v-for="judge in judges" :key="judge.id">
        <img
          v-if="judge.image_url !== null"
          class="card-image"
          :src="judge.image_url"
          :alt="judge.name"
        />
        <img v-else src="../assets/Icon.svg" />

        <div class="body">
          <p class="judge-name">{{ judge.name }}</p>
          <p class="judge-bio">{{ judge.bio }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.loading = true;
    fetch("https://www.nokeynoshade.party/api/judges?limit=12")
      .then((response) => response.json())
      .then((result) => {
        this.loading = false;
        this.judges = result;
      });
  },
  data() {
    return {
      judges: [],
      loading: false,
    };
  },
};
</script>

<style scoped>
img {
  width: 150px;
  height: 200px;
  padding-top: 0px;
}
.card-image {
  object-fit: cover;
}
.judges-list {
  font-weight: bold;
  width: 200px;
  margin: 20px;
  height: 310px;
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  background: white;
}
.judge-bio {
  font-weight: normal;
}
.judgesPage {
  padding-top: 50px;
  background-color: rgb(48, 113, 242, 0.7);
  padding-bottom: 100px;
}
.judge-name,
.judge-bio {
  margin-bottom: 5px;
  font-size: 0.8rem;
}
.judge-name {
  font-size: 16px;
  font-weight: 600;
}
</style>
