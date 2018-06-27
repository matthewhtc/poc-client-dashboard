<template>
  <div id="app">
    <!-- <div id="nav">
       <router-link to="/">Dashboard</router-link> |
      <router-link to="/about">About</router-link> 
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import 'bulma/bulma.sass'; // import as sass file 
export default {
  
}
</script>

<style lang="scss">
// @import '../../node_modules/bulma/bulma.sass'; 

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.box {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 0px rgba(10, 10, 10, 0.1); 
}
</style>
