<template>
    <div>Add Category</div>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Add Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                <div class="form-group">
                    <label> Name</label>
                    <input type="text" class="form-control" v-model="categoryName">
                </div>
                <div class="form-group">
                    <label> Description</label>
                    <textarea type="text" class="form-control" v-model="description"/>
                </div>
                <div class="form-group">
                    <label> Image</label>
                    <input type="text" class="form-control" v-model="imageUrl">
            </div>
            <button type="button" class="btn btn-submit" @click="addCategory">Submit</button>
            </form>
            </div>
            <div class="col-3"></div>
          
        </div>
    </div>
</template>
<!--<script>-->

<!--const axios = require("axios");-->
<!--const sweetalert = require("sweetalert");-->
<!--//-->
<!--// export default {-->
<!--//     data(){-->
<!--//         return{-->
<!--//             categoryName:"",-->
<!--//             description:"",-->
<!--//             imageUrl:"",-->
<!--//-->
<!--//         }-->
<!--//     },-->
<!--//     methods:{-->
<!--//         addCategory(){-->
<!--//             console.log(this.categoryName, this.description);-->
<!--//             const newCategory = {-->
<!--//                 categoryName: this.categoryName,-->
<!--//                 description: this.description,-->
<!--//                 imageUrl: this.imageUrl,-->
<!--//             };-->
<!--//           const baseURL = "";-->
<!--//           axios({-->
<!--//             method: "post",-->
<!--//             url: `${baseURL}/category/create`,-->
<!--//             data: JSON.stringify(newCategory),-->
<!--//             headers: {-->
<!--//               "Content-Type": "application/json",-->
<!--//             },-->
<!--//           })-->
<!--//               .then(() => {-->
<!--//                 sweetalert({-->
<!--//                   text: "Category added successfully",-->
<!--//                   icon: "success",-->
<!--//                 });-->
<!--//               })-->
<!--//               .catch((err) => {-->
<!--//                 console.log(err);-->
<!--//               });-->
<!--//         },-->
<!--//     },-->
<!--// };-->
<!--const baseURL = "http://localhost:8080"; // Update the base URL to your local API server-->
<!--axios({-->
<!--  method: "post",-->
<!--  url: `${baseURL}/api/v1/category/create`, // Update the API endpoint as well-->
<!--  data: JSON.stringify(newCategory),-->
<!--  headers: {-->
<!--    "Content-Type": "application/json",-->
<!--  },-->
<!--})-->
<!--    .then(() => {-->
<!--      sweetalert({-->
<!--        text: "Category added successfully",-->
<!--        icon: "success",-->
<!--      });-->
<!--    })-->
<!--    .catch((err) => {-->
<!--      console.log(err);-->
<!--    });-->

<!--</script>-->

<script>
const axios = require("axios");
const sweetalert = require("sweetalert");

export default {
  data() {
    return {
      categoryName: "",
      description: "",
      imageUrl: "",
      newCategory: {} // Define the newCategory object here
    };
  },
  methods: {
    addCategory() {
      console.log(this.categoryName, this.description);
      this.newCategory = { // Assign values to newCategory object
        categoryName: this.categoryName,
        description: this.description,
        imageURL: this.imageUrl
      };

      const baseURL = "http://localhost:8083";
      axios({
        method: "post",
        url: `${baseURL}/api/v1/category/create`,
        data: JSON.stringify(this.newCategory), // Use this.newCategory
        headers: {
          "Content-Type": "application/json"
        }
      })
          .then(() => {
            sweetalert({
              text: "Category added successfully",
              icon: "success"
            });
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }
};
</script>
<style scoped></style>