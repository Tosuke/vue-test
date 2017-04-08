<template lang="pug">
  h1 = {{ msg }}
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  msg = "Welcome to ようこそジャパリパークへ"
}
</script>