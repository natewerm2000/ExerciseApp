<template>
  <div class="container">
    <div class="column">
      <div class="column">
        
      </div>
    </div>
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<style lang="scss">

</style>

<script> 
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Messages from './components/Messages.vue';
export default {
  components: {
    Nav,
    Footer,
    Messages
  }
} 
</script>