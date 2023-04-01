import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import {fas}  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Swal from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

library.add(fas)

createApp(App)
.use(router)
.component("fa",FontAwesomeIcon)
.use(Swal)
.mount("#app");
