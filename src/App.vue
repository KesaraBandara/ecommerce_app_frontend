<template>
  <Navbar />
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->

<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
  <router-view v-if="categories && products" style="min-height: 60vh"
      :baseURL="baseURL"
      :categories="categories"
      :products="products"
      @fetchData="fetchData"
  >
  </router-view>
<!--  footer-->
  <PageFooter/>


</template>
<!--<script>-->
<!--import Navbar from "./components/Navbar.vue";-->
<!--import axios from "axios";-->
<!--// import Navbar from "@/components/Navbar.vue";-->
<!--export default {-->
<!--  components: {Navbar},-->
<!--  // components:{Navbar},-->
<!--  data(){-->
<!--    return{-->
<!--      baseURL : "http://localhost:8083",-->
<!--      products:[],-->
<!--      categories:[]-->
<!--    }-->
<!--  },-->
<!--  methods:{-->
<!--    async fetchData(){-->
<!--      await axios.get(this.baseURL + "/api/v1/category/")-->
<!--          .then(res => {-->
<!--            this.categories = res.data-->
<!--          }).catch((err) => console.log('err', err));-->

<!--      await axios.get(this.baseURL + "/api/v1/product/")-->
<!--          .then(res => {-->
<!--            this.products = res.data-->
<!--          }).catch((err) => console.log('err', err));-->

<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.fetchData();-->
<!--  }-->
<!--};-->
<!--</script>-->

<script>
import Navbar from "./components/Navbar.vue";
import axios from 'axios';
import PageFooter from "@/components/PageFooter.vue";
export default {
  components: {Navbar, PageFooter},
  data() {
    return {
      baseURL: "http://localhost:8083", // Change this to your local host address
      products: null,
      categories: null
    }
  },
  methods: {
    async fetchData() {

      // api call to get all the categories
      await axios.get(this.baseURL + "/api/v1/category/")
          .then(res => {
            this.categories = res.data
          }).catch((err) => console.log('err', err));

      // api call to get the products

      await axios.get(this.baseURL + "/api/v1/product/")
          .then(res => {
            this.products = res.data
          }).catch((err) => console.log('err', err));
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
