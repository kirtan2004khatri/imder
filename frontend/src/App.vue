<!-- eslint-disable -->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Layout from "./components/Layout.vue";
export default{
  components:{
    // Layout
  }
}
</script>

<style>
*{
  font-family: Arial, Helvetica, sans-serif;
}
::-webkit-scrollbar{
    width:3px;
    height:3px;
}
::-webkit-scrollbar-track{
    background-color: transparent;
}
::-webkit-scrollbar-thumb{
    background-color:lightgray;
    border-radius:12px;
}
</style>