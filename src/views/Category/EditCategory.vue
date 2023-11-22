<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Category</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
        <div class="col-6">
          <form v-if="category">
            <div class="form-group">
            <label>Category Name</label>
            <input type="text" class="form-control"
            v-model="category.categoryName" required>
            </div>
            <div class="form-group">
              <label>description</label>
              <input type="text" class="form-control"
                     v-model="category.description" required>
            </div>
            <div class="form-group">
              <label>imageURL</label>
              <input type="text" class="form-control"
                     v-model="category.imageURL" required>
            </div>
            <button type="button" class="btn btn-primary" @click="editCategory">submit</button>
          </form>
        </div>
      </div>
    </div>
</template>
<!--<script>-->
<!--import axios from "axios";-->
<!--import swal from "sweetalert";-->
<!--export default {-->
<!--  data(){-->
<!--    return{-->
<!--      category: null,-->
<!--      id: null-->
<!--    }-->
<!--  },-->
<!--  props: ["baseUrl", "categories"],-->
<!--  methods:{-->
<!--    async editCategory(){-->
<!--      delete this.category["products"]-->
<!--      console.log('category', this.category)-->
<!--      await axios.post(`${this.baseURL}category/update/${this.id}`,-->
<!--          this.category)-->
<!--      .then(() => {-->
<!--         swal( {-->
<!--          text: "category has been updated successfully",-->
<!--          icon: "success"-->
<!--        })-->
<!--      }).catch(err=> console.log('err', err));-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.id = this.$route.params.id-->
<!--    this.category = this.categories.find(category => category.id == this.id)-->
<!--  }-->
<!--}-->
<!--</script>-->

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  data() {
    return {
      category: null,
      id: null
    };
  },
  props: ["baseUrl", "categories"],
  methods: {
    async editCategory() {
      delete this.category["products"];
      console.log('category', this.category);

      // Check if this.id is a valid number
      if (isNaN(this.id) || this.id === null) {
        console.error('Invalid category ID');
        return;
      }

      await axios.put(`http://localhost:8083/api/v1/category/Update/${this.id}`, this.category)
          .then(() => {
            this.$emit("fetchData");
            this.$router.push({name:'Category'})
            swal({
              text: "Category has been updated successfully",
              icon: "success"
            });
          })
          .catch(err => console.log('err', err));
    }

  },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find(category => category.id == this.id);
  }
};
</script>
