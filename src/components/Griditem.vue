<template>
    <div class="collection-item">
        <img v-if="item.hasImage == true" :src=item.webImage.url alt="collection item image">
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

  /* border: 1px solid #8D99AE; */
  background-color:  #EDF2F4;
  border-radius: 10px;
}

.collection-item img {
    width: 100%;
    display: block;
    border-radius: 10px;
}

.item-form {
    width: 100%;
    min-height: 10%;
    padding: 10px;

    display: flex;
    position: absolute;
    bottom: 0;

    color: white;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.5382528011204482) 0%, rgba(0,0,0,1) 100%);
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
    background-color: #AF9164;
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