<template>
  <ShopHome />
</template>

<script>
import ShopHome from './views/ShopHome.vue'


export default {
  name: 'App',
  components: {
    ShopHome,
  }
};
</script>

<style>
body {
    display: block;
    margin: 0px;
}

#app {
  font-family: Product Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

Nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  gap: 350px;
  padding: 0 50px;
  background: #EFF7FF;
  height: 40px;
  text-decoration: none;
  box-shadow: 2px 1px 1px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
