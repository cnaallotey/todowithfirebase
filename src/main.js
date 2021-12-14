import Vue from "vue";
import App from "./App.vue";
import './index.css';



//const analytics = getAnalytics(app);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
