<template>
  <header class="header">
    <div class="header-content">
      <h1 class="header-title">Welcome to <span>Rijksmuseam</span>.</h1>
      <p class="header-text">
        Using the Rijksmuseam API, all information about our art can be found
        here. Feel free to look around and in the amazing collection of
        Rijksmuseum.
      </p>
    </div>
  </header>

  <section class="collection-option-section">
      <input v-model="filter_string" @change="fetchWithFilter()" type="text" name="collection-filter-text" class="collection-filter-text" placeholder="Filter...">
  </section>

  <main class="collection">
    <griditem v-for="item in collection" :key="item" :item="item"></griditem>
  </main>
</template>

<script>
import Griditem from "./Griditem.vue";
import axios from "axios";

export default {
  name: "Homepage",
  components: { Griditem },
  data() {
    return {
      collection: [],
      filter_string: "",
    }
  },
  methods: {
    fetch() {
      axios
        .get("https://www.rijksmuseum.nl/api/nl/collection?key=Lhmu9BZx&q=")
        .then((res) => {
          this.collection = res.data['artObjects'];
          console.log(this.collection[0]);
        })
        .catch((error) => console.log(error));
    },
    fetchWithFilter() {
      axios
        .get("https://www.rijksmuseum.nl/api/nl/collection?key=Lhmu9BZx&q=" + this.filter_string)
        .then((res) => {
          this.collection = res.data['artObjects'];
          console.log(this.collection[0]);
        })
        .catch((error) => console.log(error));
    }
  },
  mounted() {
      this.fetch();
  },
};
</script>

<style>
.header {
  width: 100%;
  padding: 10px;

  display: grid;
  place-content: center;
  background-color: #F7F3E3;
}

.header-content {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.header-content span {
  color: #6F1A07;
}

.header-title {
  color: #2b2d42;
}

.header-text {
  color: #8d99ae;
}

.collection-option-section {
  width: 100%;
  min-height: 50px;
  margin: 0 0 20px;

  background-color: #B3B6B7;
}

.collection-filter-text {
    margin: 12px 20px;
    padding: 5px;

    border-radius: 5px;
    border: none;
}

.collection {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
}

@media only screen and (min-width: 480px) {
  .header {
    height: 35vh;
  }

  .header-content {
    width: 60%;
  }

  .collection-item {
    width: 45%;
  }
}

@media only screen and (min-width: 768px) {
  .collection-item {
    width: 30%;
  }
}
</style>