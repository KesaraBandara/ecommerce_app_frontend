<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3"> Categories</h3>
        <router-link :to="{name : 'AddCategory'}">
          <button class="btn" style="float:right"> Add Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
    <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
      <CategoryBox :category="category"></CategoryBox>
    </div>
    </div>
  </div>
</template>

<!--<script>-->
<!--import CategoryBox from '../../components/Category/CategoryBox.vue'-->
<!--import axios from "axios";-->
<!--// import CategoryBox from "@/components/Category/CategoryBox.vue";-->
<!--export default {-->
<!--  name: "CategoryView",-->
<!--  components: {CategoryBox},-->
<!--  data() {-->
<!--    return {-->
<!--      baseURL: "*+,-->
<!--      categories: [],-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    async getCategories() {-->
<!--      await axios-->
<!--          .get(`${this.baseURL}/category`)-->
<!--          .then((res) => (this.categories = res.data))-->
<!--          .catch((err) => console.log(err));-->
<!--    },-->
<!--  },-->
<!--  mounted() {-->
<!--    this.getCategories();-->
<!--  },-->
<!--};-->
<!--</script>-->
<script>
import CategoryBox from '../../components/Category/CategoryBox.vue'
import axios from "axios";

export default {
  name: "CategoryView",
  components: {CategoryBox},
  data() {
    return {
      baseURL: "http://localhost:8083", // Change this to your local API server address
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      await axios
          .get(`${this.baseURL}/api/v1/category/`) // Make sure to use the correct API endpoint
          .then((res) => (this.categories = res.data))
          .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>


<style scoped></style>
