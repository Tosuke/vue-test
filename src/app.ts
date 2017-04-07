import Vue from "vue";
import Component from "vue-class-component";
import * as Template from "./app.html";

@Template
@Component
export default class App extends Vue {
  msg = "Welcome to ようこそジャパリパークへ";
}