<template>
    <div class="collection-item">
        <img :src=item.webImage.url alt="collection item image">
        <div class="item-form">
            <div class="text-wrapper">
                <p>ID: {{item.id}}</p>
                <p>Title: {{item.title}}</p>
                <p>Maker: {{item.principalOrFirstMaker}}</p>
            </div>

            <div class="btn-wrapper">
                <router-link 
                    v-bind:to="'/details/' + item.id" 
                    class="detail-btn">Details</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Griditem",
    props: {
    item: Object,
  },
}
</script>

<style>
.collection-item {
  width: 90%;

  position: relative;
  display: flex;
  flex-direction: row;

  border: 1px solid #8D99AE;
  background-color:  #EDF2F4;
  border-radius: 10px;
}

.collection-item img {
    width: 95%;
    display: block;
    margin: 10px auto;
}

.item-form {
    width: 100%;
    padding: 10px;

    display: flex;
    position: absolute;
    bottom: 0;

    color: #2b2d42;
    background-color:  #EDF2F4;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.detail-btn {
    padding: 10px 15px;
    border-radius: 8px;

    position: absolute;
    bottom: 10px;
    right: 10px;

    color: white;
    background-color: #EF233C;
    text-decoration: none;
}

.detail-btn:hover {
      text-decoration: underline;
}

.btn-wrapper {
    width: 20%;
}

.text-wrapper {
    width: 75%;
}
</style>