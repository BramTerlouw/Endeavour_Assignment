<template>
  <main class="collection-content">
      <div class="detail-text">
          <p>ID: {{product.id}}</p>
          <p>Title: {{product.title}}</p>
          <p>Maker: {{product.principalOrFirstMaker}}</p>
          <p>Description: {{product.description}}</p>
      </div>
      <img :src=product.url alt="collection item image">
  </main>
</template>

<script>
import axios from 'axios';

export default {
    name: "Detailpage",
    data() {
    return {
      id: this.$route.params.id,
      product: {
        id: "",
        title: "",
        url: "",
        principalOrFirstMaker: "",
        description: "",
      },
    };
  },
    methods: {
    fetch() {
      axios
        .get("https://www.rijksmuseum.nl/api/nl/collection/" + this.id.substring(3) + "?key=Lhmu9BZx")
        .then((res) => {
        var data = res.data['artObject']

        this.product.id = data.id;
        this.product.title = data.title;
        this.product.url = data.webImage.url;
        this.product.principalOrFirstMaker = data.principalOrFirstMaker;
        this.product.description = data.description;
        console.log(this.product);
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
      this.fetch();
  },
}
</script>

<style>
.collection-content {
    width: 80%;
    border: 1px solid black;
    margin: 0 auto;
}

.collection-content img {
    width: 100%;
}
</style>