<!-- eslint-disable -->
<template>
    <div class="row g-0" style="height:100vh;width:100%">
        <!-- Side bar -->
        <div class="col-lg-4 col-12 h-res border-end">
            <!-- side bar container -->
            <div class="row g-0 h-100">
                <!-- sidebar icon tray -->
                <div class="col-lg-2 col-12 h-100 bg-dark d-flex flex-lg-column justify-content-lg-start gap-4 pt-lg-3 align-items-center justify-content-center py-lg-0 py-2">
                    <div id="logo"></div>
                    <!-- <img src="../assets/imder3.png" style="width:2.5rem;" class="rounded-circle" alt=""> -->
                    <fa icon="user" 
                    title="Profile"
                    :class="current_page=='profile' ? 'icon-active' : 'icon-item'"
                    @click="pageHandler('profile')"></fa>

                    <fa icon="comments" 
                    title="Chats"
                    :class="current_page=='chats' ? 'icon-active' : 'icon-item'"
                    @click="pageHandler('chats')"></fa>

                    <fa icon="users" 
                    title="Channels"
                    :class="current_page=='groups' ? 'icon-active' : 'icon-item'"
                    @click="pageHandler('groups')"></fa>

                    <fa icon="gear" 
                    title="Settings"
                    :class="current_page=='settings' ? 'icon-active' : 'icon-item'"
                    @click="pageHandler('settings')"></fa>

                    <fa icon="arrow-right-from-bracket" 
                    title="Logout"
                    class="icon-item"
                    @click="pageHandler('logout')"
                    ></fa>
                </div>
                <!-- Side bar content renders here according to the selection -->
                <div class="col-lg-10 col-12 h-100 bg-white" id="scroll-box">
                    <component :is="current_page" @group-selected="groupSelectionHandler" @user-selected="userSelectionHandler"></component>
                    <!-- <Chats></Chats> -->
                </div>
            </div>
        </div>
        <!-- Main content for large screen-->
        <div class="col-lg-8 d-lg-block d-none h-res" id="main-container">
            <div class="d-flex h-100 flex-column justify-content-center align-items-center" v-if="recived_user == null &&recived_group == null">
                <div class="text-center"> 
                    <h2 class="m-0 pb-4">Welcome to Imder Chat's</h2>
                    <p class="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, optio est? Error impedit hic adipisci consequatur commodi recusandae dolores quasi ullam ex dignissimos repellat saepe, eum id! Pariatur neque laudantium commodi, id facere voluptas soluta consequatur, delectus architecto, aspernatur dolores!</p>
                    <!-- <button class="btn btn-purple">Get Started</button> -->
                </div>
            </div>
            <chat-box :user="recived_user || recived_group" v-else></chat-box>
        </div>
        <!-- Main container for mobiles and tablets -->
        <div class="col-lg-8 d-lg-none position-absolute h-100 d-block" v-if="show_chat_box" id="main-container">
            <chat-box :user="recived_user || recived_group"></chat-box>
        </div>
    </div>
</template>

<script>
import Chats from './ChatsPage.vue';
import Groups from './GroupsPage.vue';
import Profile from './ProfilePage.vue';
import Settings from './SettingsPage.vue';
import InlineSvg from 'vue-inline-svg';
import ChatBox from '../components/ChatBox.vue';
import API from '@/Api/axios';
export default{
    data(){
        return{
            current_page:'chats',
            recived_user:null,
            recived_group:null,
            iconsPack:{
                profile:'whitesmoke',
                chats:'whitesmoke',
                groups:'whitesmoke',
                settings:'whitesmoke'
            },
            show_chat_box:false
        }
    },  
    components:{
        Chats,
        Groups,
        InlineSvg,
        Profile,
        ChatBox,
        Settings
    },
    mounted(){

    },  
    methods:{
        userSelectionHandler(item){
            this.recived_user=item;
            this.show_chat_box=true;
            // console.log("User selected ",item);
        },  
        groupSelectionHandler(item){
            this.recived_group=item;
            this.show_chat_box=true;
            // console.log("Group selected ",item);
        },
        pageHandler(name){
            this.recived_user=this.recived_group=null;
            if(name!==this.current_page && name!=='logout'){
                this.current_page=name;  
            }
            else{
                this.$swal({
                    title:'Confirm Logout',
                    icon:'question',
                    showConfirmButton:true,
                    showCancelButton:true,
                    confirmButtonText:'Yes',
                    cancelButtonText:'No',
                    allowOutsideClick:false,
                    confirmButtonColor:'mediumseagreen',
                    cancelButtonColor:'tomato',
                    background:'whitemsmoke',
                    width:'30rem'
                })
                .then(response=>{
                    if(response.isConfirmed){
                        API.get('/logout')
                        .then(result=>{
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
                            this.$router.push({name:'login'})
                        });
                    }
                });
            }
        }
    }
}
</script>

<style scoped>
#main-container{
    background:url('../assets/chatbg.svg');
    object-fit:cover;
    /* object-fit: scale-down; */
}
#scroll-box{
    overflow-y:auto;
}

#logo{
    width:3rem;
    background: url('../assets/imder2.png')no-repeat center center/cover;
    height:3rem;
    border-radius: 50%;
}

.icon-item{
    /* font-size:18px; */
    color:white;
    border:2px solid white;
    cursor: pointer;
    border-radius: 50%;
    padding:8px;
    height:1.2rem;
    width:1.2rem;
}
.icon-item:hover{
    color:blueviolet;
    border:2px solid blueviolet;
    background-color: white;
    box-shadow: 0px 0px 8px white;
    transition: 0.2s ease-in-out;
}
.icon-active{
    color:blueviolet;
    border:2px solid blueviolet;
    background-color: white;
    /* box-shadow: 0px 0px 8px white; */
    border-radius: 50%;
    padding:8px;
    height:1.2rem;
    width:1.2rem;
}

.btn-purple{
    background-color: blueviolet;
    color:white;
}
.btn-purple:hover{
    background-color:rgb(109, 33, 180);
    color:white;
}
/* 
 */

@media only screen and (min-width:992px) {
    .h-res{
        height:100%;
    }
}

@media only screen and (max-width:992px) {
    .h-res{
        align-self:flex-start;
    }
}

</style>