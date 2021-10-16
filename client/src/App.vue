<template>
  <div class="container">
    <div class="column">
      <div class="column">
        
      </div>
    </div>
    <Nav />
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

<script> 
import Nav from "./components/Nav";

export default {
  components: {
    Nav
  }
} 
</script>