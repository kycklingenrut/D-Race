<template>
  <div class="winnersPage">
    <p>Sort by:</p>
    <select v-model="selected">
      <option @click="sortedNames('name')" value="name">Name</option>
      <option @click="sortedSeasons('season')" value="season">Season</option>
    </select>
    <div class="queenCards">
      <b-spinner v-if="loading" label="Spinning"></b-spinner>
      <ul v-else class="grid">
        <li class="queens-cards" v-for="queen in queens" :key="queen.id">
          <img class="card-image" :src="queen.image_url" :alt="queen.name" />
          <div class="body">
            <section class="nameTag">
              <p class="queen-name">{{ queen.name }}</p>
              <p class="queen-season">
                Season: {{ queen.seasons[0].seasonNumber }}
              </p>
            </section>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.loading = true;
    fetch("https://www.nokeynoshade.party/api/queens/winners")
      .then((response) => response.json())
      .then((result) => {
        this.loading = false;
        this.queens = result;
      });
  },
  data() {
    return {
      selected: "Sort Queens",
      queens: [],
      loading: false,
    };
  },
  methods: {
    sortedNames() {
      return this.queens.sort((a, b) => a.name > b.name);
    },
    sortedSeasons() {
      return this.queens.sort((a, b) =>
        parseInt(a.seasons[0].seasonNumber) >
        parseInt(b.seasons[0].seasonNumber)
          ? 1
          : -1
      );
    },
  },
};
</script>

<style>
.winnersPage {
  padding-top: 30px;
  background-color: #f5a7d1;
  padding-bottom: 100px;
}
ul {
  list-style-type: none;
}
select {
  padding: 5px;
}
img {
  max-width: 150px;
  max-height: 230px;
  box-shadow: 0px 2px 5px #8888885f;
}
.grid {
  list-style: none;
  margin: auto;
  padding: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
}
.queens-cards {
  width: 200px;
  margin: 20px;
  height: 310px;
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  background: white;
}
.card-image {
  border-radius: 5px 5px 0 0;
  padding-top: 5px;
  width: 100%;
  height: 200px;
  object-fit: scale-down;
}
.body {
  padding: 20px 5px 0px 5px;
}
.queen-name,
.queen-season {
  margin-bottom: 5px;
  font-size: 0.8rem;
}
.queen-name {
  font-size: 16px;
  font-weight: 600;
}
</style>
