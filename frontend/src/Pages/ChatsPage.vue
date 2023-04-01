<template>
    <div class="p-lg-0 p-4">
        <div class="position-sticky top-0 bg-white">
            <div class="d-flex justify-content-between px-4 pt-3 align-items-center">
                <h4 class="m-0">Chats</h4>
                <button class="btn btn-purple" @click="chatModalHandler">+</button>
            </div>
            <div class="px-4 mt-2 py-3">
                <input id="search-box" placeholder="Search here....">
            </div>
        </div>
        <div class="mt-4">
            <div class="d-flex justify-content-between align-items-center px-4 py-3 chat-item" @click="openChat(i)" v-for="i in users" :key="i.id">
                <div class="bg-warning rounded-3 border border-2" style="width:2.5rem;height:2.5rem"></div>
                <h6 class="my-0 ms-3 me-auto" v-text="i.name"></h6>
            </div>
        </div>
    </div>
        <!-- Modal to add group -->
        <div class="modal fade" id="chatModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-lg  modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel">Invitation Link</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="my-3">
                        <!-- <h6 class="mb-3">User Name:</h6> -->
                        <!-- <input type="text" id="search-box" placeholder="Enter group name..." -->
                        <div class="bg-light p-4 border rounded-3">adsjkalsdjaksdjslad</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"
                        data-bs-dismiss="modal">Copy Link</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '@/Api/axios';
import { Modal } from 'bootstrap';
export default{
    components:{
        Modal
    },  
    data(){
        return{
            users:[
                {
                    id:1,
                    name:'Jhon Smith'
                },
                {
                    id:2,
                    name:'Shena Wands'
                },
                {
                    id:3,
                    name:'Rahul Gupta'
                },
                {
                    id:4,
                    name:'Meghna Shrivastav'
                },
                {
                    id:5,
                    name:'James Wantel'
                }
            ]
        }
    },
    methods:{
        openChat(item){
            this.$emit('user-selected',item);
        },
        chatModalHandler(){
            // let modal=new Modal(document.getElementById("chatModal"),{keyboard:false});
            // modal.show();
            API.get('./sendMail',{});
        }
    }
}
</script>

<style scoped>
#search-box{
    width:100%;
    height:45px;
    border:0px;
    background-color: whitesmoke;
    border-radius: 5px;
    padding-left:10px;
    color:gray;
    outline:0px
}
.btn-purple{
    /* background-color: rgb(208, 190, 224); */
    background-color:rgb(177, 160, 212);
}
.chat-item{
    cursor: pointer;
    color:gray
}
.chat-item:hover{
    background-color: whitesmoke;
}
.chat-active{
    background-color: blueviolet;
    color:white
}
</style>