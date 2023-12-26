// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// main styles
import "./assets/main.scss";

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
    faStackOverflow
);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
