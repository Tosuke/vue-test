<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  msg = "Welcome to ようこそジャパリパークへ"
}
</script>