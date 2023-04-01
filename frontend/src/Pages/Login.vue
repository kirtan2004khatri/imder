<template>
    <div class="login-container d-flex justify-content-center align-items-center flex-column">
        <div class="bg-white" id="login-form">
            <div class="d-flex justify-content-between px-4 py-3 aling-items-center">
                <h3 class="text-center text-decoration-underline">Login</h3>
                <img src="../assets/imder.png" style="width:4rem;" class="" alt="">
            </div>
            <form @submit.prevent="loginHandler">
                <div class="px-4">
                    <div class="mb-4">
                        <h6>Email</h6>
                        <input type="email" required v-model="loginObj.email" placeholder="Enter your email">
                    </div>
                    <div class="mb-4">
                        <h6>Password</h6>
                        <input type="password" required v-model="loginObj.password" placeholder="Enter your password">
                    </div>
                    <div class="my-4">
                        <button class="btn btn-purple d-block w-100">Login</button>
                    </div>
                    <div>
                        <router-link to="/register">
                            <a class="text-center d-block small" href="#">Don't have a account ? Create One</a>
                        </router-link>
                        <router-link to="/register">
                            <a class="text-center d-block small" href="#">Forgot password ?</a>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import API from '../Api/axios';
export default {
    data() {
        return {
            loginObj: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        loginHandler() {
            API.post('/login', this.loginObj)
                .then(result =>{
                    if(result.data.login){
                        this.$swal({
                            position:'top',
                            toast:true,
                            title:result.data.message,
                            background:'#50C878',
                            showConfirmButton:false,
                            color:'white',
                            iconColor:'white',
                            icon:'success',
                            timer:2500,
                            timeProgressBar:true
                        });
                        this.$router.push({name:'home'});
                    }
                    else{
                        // alert(result.data.message);
                        this.$swal({
                            position:'top',
                            toast:true,
                            title:result.data.message,
                            background:'#DE3163',
                            color:'white',
                            icon:'error',
                            iconColor:'white',
                            showConfirmButton:false,
                            timer:2500,
                            timerProgressBar:true,
                        });
                        this.loginObj.email=null;
                        this.loginObj.password=null;
                    }
                });
        }
    }
}
</script>

<style scoped>
.login-container {
    height: 100vh;
    width: 100%;
    background: url('../assets/background.svg') no-repeat center center/cover;
    background-color: whitesmoke;
}

#login-form {
    height: 25rem;
    width: 20rem;
    border-radius: 12px;
    box-shadow: 2px 2px 30px lightgray;
}

#login-form input {
    width: 100%;
    height: 45px;
    border: 1px solid lightgray;
    outline: 0px;
    background-color: whitesmoke;
    padding-left: 10px;
    border-radius: 5px;
}

#login-form input:focus{
    outline:2px solid rgba(138,43,226,0.4);
    outline-width:3px;
}

.btn-purple {
    background-color: blueviolet;
    height: 45px;
    color: white
}

.btn-purple:hover {
    background-color: mediumpurple;
}</style>