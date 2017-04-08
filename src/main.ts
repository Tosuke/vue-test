import Vue from "vue";
import * as App from "./app.vue";

//mount
new Vue({
  el: "#app",
  render: a => a(App)
});