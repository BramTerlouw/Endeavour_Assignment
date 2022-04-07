<template>
  <header class="detail-header">
    <h1>Collection item details:</h1>
  </header>
  <main class="collection-content">
    <img :src=product.url alt="collection item image">
      <div class="detail-text">
          <p class="detail-text-item"><span>ID:</span> {{product.id}}</p>
          <p class="detail-text-item"><span>Title:</span> {{product.title}}</p>
          <p class="detail-text-item"><span>Long title:</span> {{product.title}}</p>
          <p class="detail-text-item"><span>Maker:</span> {{product.principalOrFirstMaker}}</p>
          <p class="detail-text-item"><span>Medium:</span> {{product.physicalMedium}}</p>
          <p class="detail-text-item"><span>Description:</span> {{product.description}}</p>
      </div>
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
        longTitle: "",
        url: "",
        principalOrFirstMaker: "",
        physicalMedium: "",
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
        this.product.longTitle = data.longTitle;
        this.product.url = data.webImage.url;
        this.product.principalOrFirstMaker = data.principalOrFirstMaker;
        this.product.physicalMedium = data.physicalMedium;
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
.detail-header {
  width: 80%;
  margin: 20px auto 0 auto;
}

.collection-content {
    width: 80%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.collection-content img {
    width: 49%;
    border-radius: 10px;
}

.detail-text {
  width: 49%;
  padding: 5px;
  background: #F7F3E3;
  border-radius: 10px;
}

.detail-text-item {
  margin: 0 0 10px 0;
}

.detail-text-item span {
  font-weight: bold;
}

@media only screen and (max-width: 700px) {
  .collection-content {
    flex-direction: column;
  }

  .collection-content img, .detail-text {
    width: 100%;
  }

  .detail-text {
    margin: 10px 0 0 0;
  }
}
</style>