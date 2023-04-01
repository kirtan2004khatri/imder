<template>
    <div class="h-100 d-flex justify-content-center align-items-center" v-if="user==null" style="background: rgba(255,255,255,0.6);">
        <div class="spinner-border text-secondary" style="width:5rem;height:5rem"></div>
    </div>
    <div class="h-100 d-flex justify-content-center align-items-ceter flex-column" v-else>
        <!-- This is for the header of chat -->
        <div class="bg-white d-flex justify-content-between align-items-center px-3 py-3 border-bottom">
            <!-- For user icon and user name -->
            <div class="d-flex justify-content-between align-items-center gap-3">
                <div class="rounded-3 bg-info" style="height:2.5rem;width:2.5rem"></div>
                <h5 class="m-0" v-text="user.name"></h5>
            </div>
            <!-- For video/audio call,info and action icons -->
            <div class="d-flex justify-content-between align-items-center gap-5 me-3">
                <fa icon="search" class="icon-item"></fa>
                <fa icon="phone-volume" class="icon-item" @click="modalHandler('voice_call')"></fa>
                <!-- <fa icon="video" class="icon-item"></fa> -->
                <fa icon="circle-info" class="icon-item" @click="infoHandler"></fa>
                <!-- <fa icon="ellipsis-vertical" class="icon-item"></fa> -->
            </div>
        </div>
        <!-- This is the chat area -->
        <div class="h-100" style="overflow-y: auto;">
            <div v-for="i in chats" :key="i.id">
                <div class="rounded-3 mx-3 mt-3 shadow-sm px-4 py-2"
                    :class="i.from_current_user ? 'ms-auto bg-info text-white' : 'bg-white'"
                    style="width:max-content;max-width: 30rem;">
                    <small class="text-wrap" v-text="i.message"></small>
                </div>
                <span class="text-muted"
                :class="i.from_current_user ? 'float-end me-3' : 'float-start ms-3'"
                style="font-size:10px" v-text="i.time"></span>
            </div>
        </div>
        <!-- This is for the show more and emoji selection pannel -->
        <div class="collapse">
            <div style="height:20rem">
                <Picker :data="emojiIndex" @select="emojiSelector" :show-preview="false" style="width:100%;height:20rem"></Picker>
            </div>
        </div>
        <!-- This is to send messages -->
        <div class="row g-0 py-4 bg-white border-top">
            <div class="col-2 d-flex justify-content-center gap-5 align-items-center">
                <fa icon="ellipsis" class="icon-item" @click="collapseHandler('documents')"></fa>
                <fa icon="smile" class="icon-item" @click="collapseHandler('emojis')"></fa>
            </div>
            <div class="col-8">
                <textarea v-model="chatObj.message" class="form-control" placeholder="Enter your message here...." cols="30" rows="2"></textarea>
            </div>
            <div class="col-2 d-flex justify-content-center gap-5 align-items-center">
                <fa icon="microphone" class="icon-item"></fa>
                <fa icon="paper-plane" class="icon-item"></fa>
            </div>
        </div>
        <!-- Modal for voice call -->
        <div class="modal fade show" id="voiceCallModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="d-flex justify-content-center flex-column align-items-center py-5">
                            <div class="bg-warning rounded-circle" style="width:8rem;height:8rem"></div>
                            <h5 class="m-0 my-4">Jhon Smith</h5>
                            <div class="d-flex justify-content-center aling-items-center">
                                <fa icon="microphone-slash" class="modal-item"></fa>
                                <button class="rounded-circle btn btn-danger mx-4 text-white" data-bs-dismiss="modal">
                                    <fa icon="phone"></fa>
                                </button>
                                <fa icon="user-plus" class="modal-item"></fa>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Info page handler -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="info-canvas" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasLabel">Jhon Smith</h5>
            </div>
            <div class="offcanvas-body">
                Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements
                here.
            </div>
        </div>
    </div>
</template>
 
<script>
import { Modal,Offcanvas,Collapse } from "bootstrap";
import data from "emoji-mart-vue-fast/data/all.json";
import "emoji-mart-vue-fast/css/emoji-mart.css";
import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";
let emojiIndex = new EmojiIndex(data);
export default {
    components:{
        Picker
    },
    data() {
        return {
            chats: [
                {
                    id: 1,
                    from_current_user: true,
                    message: "Hii",
                    time: '12:00pm'
                },
                {
                    id: 2,
                    from_current_user: false,
                    message: "Hello",
                    time: '12:05pm'
                },
                {
                    id: 3,
                    from_current_user: true,
                    message: "How r u ?",
                    time: '1:00pm'
                },
                {
                    id: 4,
                    from_current_user: false,
                    message: "Im fine",
                    time: '1:00pm'
                },
                {
                    id: 5,
                    from_current_user: false,
                    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nostrum vel vero veniam quaerat ut architecto! Nam, itaque soluta. Quasi modi recusandae quis perferendis aut, dignissimos deleniti consectetur veniam facere dolorem! Inventore, sunt beatae nam error, eos laudantium reiciendis illo unde, eligendi sit tempora architecto voluptate asperiores voluptates dolore aliquam?",
                    time: '1:00pm'
                }
            ],
            emojiIndex:emojiIndex,
            chatObj:{
                message:''
            }
        }
    },
    props: {
        user: {
            type: Object,
            default: null
        }
    },
    methods: {
        modalHandler(option) {
            if (option == 'voice_call') {
                console.log("Voice call modal called");
                let modal = new Modal(document.querySelector('#voiceCallModal'));
                modal.show();
            }
        },
        infoHandler() {
            let canvas=new Offcanvas(document.querySelector("#info-canvas"));
            canvas.show();
        },
        emojiSelector(values){
            console.log(values);
            this.chatObj.message+=values.native;
        },
        collapseHandler(option){
            let collapse=new Collapse(document.querySelector('.collapse'));
            collapse.toggle();
        }
    }
}
</script>

<style scoped>
#chat-input {
    width: 100%;
    height: 40px;
    background: whitesmoke;
    border: 0px;
    padding-left: 15px;
    border-radius: 5px;
    outline: 0px;
    border: 0.5px solid lightgray
}

.icon-item {
    color: gray;
    cursor: pointer;
    width: 1.1rem;
    height: 1.2rem;
}

.modal-item {
    color: gray;
    cursor: pointer;
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid gray;
    padding: 10px;
    border-radius: 50%;
}

.icon-item:hover {
    color: darkgray
}

img {
    cursor: pointer;
}
</style>