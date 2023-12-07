<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <div class="card h-100 w-100">&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="embed-responsive embed-responsive-16by9">&ndash;&gt;-->
<!--&lt;!&ndash;      <img class="card-img-top embed-responsive-item"&ndash;&gt;-->
<!--&lt;!&ndash;           :src="product.imageURL"&ndash;&gt;-->
<!--&lt;!&ndash;           alt="Card image cap"/>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="card-body">&ndash;&gt;-->
<!--&lt;!&ndash;      <h5 class="card-title">{{ product.name }}</h5>&ndash;&gt;-->
<!--&lt;!&ndash;      <p class="card-text">&ndash;&gt;-->
<!--&lt;!&ndash;        {{ product.description }}&ndash;&gt;-->
<!--&lt;!&ndash;      </p>&ndash;&gt;-->
<!--&lt;!&ndash;      <a href="#" class="btn btn-primary">Go somewhere</a>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->
<!--&lt;!&ndash;<script setup>&ndash;&gt;-->
<!--&lt;!&ndash; import product from "../views/Product/Product.vue";&ndash;&gt;-->

<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  name: "ProductBox",&ndash;&gt;-->
<!--&lt;!&ndash;  props:["product"]&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->
<!--<template>-->
<!--  <div class="card h-100 w-100">-->
<!--    <div class="embed-responsive embed-responsive-16by9">-->
<!--      <img-->
<!--          class="card-img-top embed-responsive-item"-->
<!--          :src="product.imageURL"-->
<!--          alt="Card image cap"-->
<!--      />-->
<!--    </div>-->
<!--    <div class="card-body">-->
<!--      <router-link :to="{name: 'ShowDetails', params: {id : product.id}}">-->
<!--        <h5 class="card-title">{{ product.name }}</h5>-->
<!--      </router-link>-->
<!--      <p class="card-text">-->
<!--        {{ product.description.substring(0, 65) }}...-->
<!--      </p>-->
<!--      <router-link :to="{name:'EditProduct', params:{id: product.id}}">-->
<!--        <button class="btn btn-primary">Edit</button>-->
<!--      </router-link>    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->

<!--export default {-->
<!--  name: "ProductBox",-->
<!--  props: ["product"]-->
<!--}-->
<!--</script>-->
<!--<style scoped>-->
<!--.card-img-top {-->
<!--  object-fit: cover;-->
<!--}-->
<!--</style>-->

<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img
          class="card-img-top embed-responsive-item"
          :src="product.imageURL"
          alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <router-link :to="{name: 'ShowDetails', params: {id : product.id}}">
        <h5 class="card-title">{{ product.name }}</h5>
      </router-link>
      <p class="card-text">
        {{ product.description.substring(0, 65) }}...
      </p>
      <router-link :to="{name: 'EditProduct', params: {id: product.id}}"
                   v-show="$route.name == 'AdminProduct'">
        <button class="btn btn-primary">Edit</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductBox",
  props: ["product"]
}
</script>
<style scoped>
.card-img-top {
  object-fit: cover;
}
a {
  text-decoration: none;
}
.card-title {
  color: #484848;
}
</style>