declare module "*.vue" {
  import Vue from "vue";
  interface Component extends Vue {}

  const component : Component
  export = component;
}