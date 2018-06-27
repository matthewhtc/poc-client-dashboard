<template>
  <div class="bar-chart tile is-parent is-6">
    <article class="tile is-child box">
      <p class='title'>Bar Chart</p>

      <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
    </article>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'; 
import 'bulma/bulma.sass'; // import as sass file 
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  border-color: white; 
}
</style>