// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// main styles
import "./assets/main.scss";
import "hamburgers/dist/hamburgers.min.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
    faGoogle,
    faVuejs,
    faHtml5,
    faCss3,
    faJs,
    faBootstrap,
    faGitAlt,
    // faGithub,
    // faGitlab,
    faSass,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
/* import specific icons */
import { faICursor } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
    faGoogle,
    faVuejs,
    faHtml5,
    faCss3,
    faJs,
    faBootstrap,
    faGitAlt,
    // faGithub,
    // faGitlab,
    faSass,
    faStackOverflow,
    faICursor
);
// Import Swiper styles
import "swiper/css";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("swiper", Swiper);
app.component("swiper-slide", SwiperSlide);
app.mount("#app");
