import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category'
import Admin from "../views/Admin.vue";
import Product from "../views/Product/Product.vue";
import AddProduct from "@/views/Product/AddProduct.vue";
import EditCategory from "@/views/Category/EditCategory.vue";
import EditProduct from "@/views/Product/EditProduct.vue";
import ShowDetails from "@/views/Product/ShowDetails.vue";
import ListProducts from "@/views/Category/ListProducts.vue";
import UserSignup from "@/views/UserSignup.vue";
import UserSignIn from "@/views/UserSignIn.vue";
import WishList from "@/views/Product/WishList.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    // category detail page
    {
        path: '/category/show/:id',
        name: 'ListProducts',
        component: ListProducts
    },

 { path: '/admin/category/add',
 name: 'AddCategory',
 component:AddCategory
},
    {
        path: '/admin/category',
        name: 'Category',
        component: Category
    },
    //category edit
    {
        path:'/admin/category/:id',
        name:'EditCategory',
        component:EditCategory
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/admin/product',
        name: 'AdminProduct',
        component: Product
    },
    //add product
    {
        path:'/admin/product/new',
        name:'AddProduct',
        component: AddProduct
    },
    //edit product
    {
        path:'/admin/product/:id',
        name:'EditProduct',
        component:EditProduct
    },
    // show details of product
    {
        path: '/product/show/:id',
        name: 'ShowDetails',
        component:ShowDetails
    },

// sign up and sign in
    {
        path: '/signup',
        name: 'UserSignup',
        component: UserSignup
    },
// sign In and sign in
    {
        path: '/signIn',
        name: 'UserSignIn',
        component: UserSignIn
    },

    {
        path: '/wishlist',
        name: 'WishList',
        component: WishList
    }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
