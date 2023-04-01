<template>
    <div class="login-container d-flex justify-content-center align-items-center flex-column">
        <div class="bg-white" id="login-form">
            <div class="d-flex justify-content-between px-4 py-3 aling-items-center">
                <h3 class="text-center text-decoration-underline">Register</h3>
                <img src="../assets/imder.png" style="width:4rem;" class="" alt="">
            </div>
            <form @submit.prevent="registerHandler">

                <div class="px-4">
                    <div class="mb-3">
                        <h6>Username</h6>
                        <input type="text" required v-model="registerObj.username" placeholder="Enter your username">
                    </div>
                    <div class="mb-3">
                        <h6>Email</h6>
                        <input type="email" required v-model="registerObj.email" placeholder="Enter your email">
                    </div>
                    <div class="mb-3">
                        <h6>Password</h6>
                        <input type="password" required v-model="registerObj.password" placeholder="Enter your password">
                    </div>
                    <div class="mb-3">
                        <h6>Confirm Password</h6>
                        <input type="password" required v-model="registerObj.cpassword"
                            placeholder="Enter your password again">
                    </div>
                    <div class="my-4">
                        <button class="btn btn-purple d-block w-100">Register</button>
                    </div>
                    <div>
                        <router-link to="login">
                            <a class="text-center d-block small">Already have an account ? Login</a>
                        </router-link>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import API from '@/Api/axios';
export default {
    data() {
        return {
            registerObj: {
                username: null,
                email: null,
                password: null,
                cpassword: null
            }
        }
    },
    mounted() {
        // console.log(this.$route);
        // console.log(this.$router);
    },
    methods: {
        registerHandler() {
            API.post('/register', this.registerObj)
                .then(result => {
                    if (result.data.register) {
                        this.$swal({
                            position: 'top',
                            toast: true,
                            title: result.data.message,
                            background: '#50C878',
                            showConfirmButton: false,
                            color: 'white',
                            iconColor: 'white',
                            icon: 'success',
                            timer: 2500,
                            timeProgressBar: true
                        });
                        this.$router.push({ name: 'login' });
                    }
                    else {
                        this.$swal({
                            position: 'top',
                            toast: true,
                            title: result.data.message,
                            background: '#DE3163',
                            color: 'white',
                            icon: 'error',
                            iconColor: 'white',
                            showConfirmButton: false,
                            timer: 2500,
                            timerProgressBar: true,
                        });
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
    height: 35rem;
    width: 28rem;
    border-radius: 12px;
    box-shadow: 2px 2px 20px lightgray;
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

#login-form input:focus {
    outline: 2px solid rgba(138, 43, 226, 0.4);
    outline-width: 3px;
}

.btn-purple {
    background-color: blueviolet;
    height: 45px;
    color: white
}

.btn-purple:hover {
    background-color: mediumpurple;
}
</style>