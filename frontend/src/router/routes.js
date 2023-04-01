import { createRouter,createWebHistory } from "vue-router";
import API from "@/Api/axios";

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            name:'home',
            component:()=>import('../Pages/Layout.vue')
        },
        {
            path:'/',
            name:'login',
            alias:'/login',
            component:()=>import('../Pages/Login.vue')
        },
        {
            path:'/register',
            name:'register',
            component:()=>import('../Pages/Register.vue')
        },
        {
            path:'/:pathMatch(.*)*',
            name:'404Page',
            component:()=>import('../Pages/404.vue')
        },
    ]
});

// router.beforeEach((to,from,next)=>{
//     API.get('/check')
//     .then(result=>{       
//         const loggedIn=result.data;
        
//         if(loggedIn){
//             console.log("logged in-------------");
//             if(to.path == '/' || to.path == '/login' || to.path == '/register' ){
//                 next('/home');
//             }
//             else{
//                 next();
//             }
//         }

//         if(!loggedIn){
//             if(to.path == '/' || to.path == '/login' || to.path == '/register' ){
//                 next();
//             }
//             else{
//                 next('/');
//             }
//         }

//     });
// });

export default router;