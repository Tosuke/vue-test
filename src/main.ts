import Vue from "vue";
import App from "./app.ts";

//mount
new Vue({
  el: "#app",
  render: a => a(App)
});