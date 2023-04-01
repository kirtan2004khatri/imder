<template>
    <div class="p-lg-0 p-4">
        <div class="position-sticky top-0 bg-white">
            <div class="d-flex justify-content-between px-4 pt-3 align-items-center">
                <h4 class="m-0">Channels</h4>
                <button class="btn btn-purple" @click="openGroupModal" >+</button>
            </div>
            <div class="px-4 mt-2 py-3">
                <input id="search-box" placeholder="Search here....">
            </div>
        </div>
        <div class="mt-4">
            <div class="d-flex justify-content-between align-items-center px-4 py-3 chat-item" @click="openChat(item)"
                v-for="item in groups" :key="item.id">
                <div class="bg-warning rounded-3" style="width:2.5rem;height:2.5rem"></div>
                <h6 class="text-muted my-0 ms-3 me-auto" v-text="item.name"></h6>
            </div>
        </div>
    </div>
    <!-- Modal to add group -->
    <div class="modal fade" id="groupModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-lg  modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel">Add Group</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="my-3">
                        <h6 class="mb-3">Group Name:</h6>
                        <input type="text" id="search-box" placeholder="Enter group name...">
                    </div>
                    <div class="my-3">
                        <h6 class="mb-3">Add Members:</h6>
                        <button class="btn btn-outline-dark w-100 rounded-2">Select Users</button>
                    </div>
                    <div class="my-3">
                        <h6 class="mb-3">Description:</h6>
                        <textarea id="description-box" rows="5" placeholder="Enter group description here..."></textarea>
                    </div>
                    <div class="my-3">
                        <h6 class="mb-3">Add Group Image</h6>
                        <input type="file" class="form-control">
                        <!-- <textarea id="description-box" rows="5" placeholder="Enter group description here..."></textarea> -->
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"
                        data-bs-dismiss="modal">Create Group</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Modal} from "bootstrap";
export default {
    data() {
        return {
            groups: [
                {
                    id: 1,
                    name: 'Group 1'
                },
                {
                    id: 2,
                    name: 'Group 2'
                },
                {
                    id: 3,
                    name: 'Group 3'
                },
                {
                    id: 4,
                    name: 'Group 4'
                },
                {
                    id: 5,
                    name: 'Group 5'
                }
            ]
        }
    },
    methods: {
        openChat(item) {
            this.$emit('group-selected', item);
        },
        openGroupModal(){
            // console.log(document.getElementById("groupModal"));
            let modal=new Modal(document.getElementById("groupModal"),{
                keyboard:false
            });
            modal.show();
            // $('#groupModal').show();
        }
    }
}
</script>

<style scoped>
#search-box {
    width: 100%;
    height: 45px;
    border: 0px;
    background-color: whitesmoke;
    border-radius: 5px;
    padding-left: 10px;
    color: gray;
    outline: 0px
}
#description-box {
    width: 100%;
    /* height: px; */
    border: 0px;
    background-color: whitesmoke;
    border-radius: 5px;
    padding: 10px;
    color: gray;
    outline: 0px
}
.btn-purple{
    /* background-color: rgb(208, 190, 224); */
    background-color:rgb(177, 160, 212);
}
.chat-item {
    cursor: pointer;
    color: gray
}

.chat-item:hover {
    background-color: whitesmoke;
}

.chat-active {
    background-color: blueviolet;
    color: white
}</style>