<template>
  <header class="header">
    <div class="header-content">
      <h1 class="header-title">Welcome to <span>Rijksmuseam</span>.</h1>
      <p class="header-text">
        Using the Rijksmuseam API, all information about our art can be found
        here. Feel free to look around in the amazing collection of
        Rijksmuseum.
      </p>
    </div>
  </header>

  <section class="collection-option-section">
      <input v-model="filter_string" @change="fetch()" type="text" name="collection-filter-text" class="collection-filter-text" placeholder="Filter...">
  </section>

  <main class="collection">
    <griditem v-for="item in collection" :key="item" :item="item"></griditem>
  </main>
  <div class="pagination-wrapper">
      <button class="pagination-btn" v-on:click="fetchBack()">Back</button>
      <button class="pagination-btn" v-on:click="fetchNext()">Next</button>
    </div>
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
      page: 0,
      page_Items: 6,
    }
  },
  methods: {
    fetch() {
      axios
        .get("https://www.rijksmuseum.nl/api/nl/collection?key=Lhmu9BZx&p=" + this.page +"&ps=" + this.page_Items + "&q=" + this.filter_string)
        .then((res) => {
          if (res.data['artObjects'] != null) {
            console.log(res.data['artObjects']);
            this.collection = res.data['artObjects'];
          }
        })
        .catch((error) => console.log(error));
    },
    fetchBack() {
      if (this.page > 0) {
        this.page -= 1;
        this.fetch();
      }
    },
    fetchNext() {
      axios
        .get("https://www.rijksmuseum.nl/api/nl/collection?key=Lhmu9BZx&p=" + (this.page + 1) +"&ps=" + this.page_Items + "&q=" + this.filter_string)
        .then((res) => {
          if (res.data['artObjects'].length > 0) {
            this.page += 1;
            this.collection = res.data['artObjects'];
            console.log(res.data['artObjects'])
          }
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

.pagination-wrapper {
  width: 20%;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
}

.pagination-btn {
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
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