<template>
  <div class="grid tile is-parent is-6">
    <article class="tile is-child box">
      <p class='title'>Grid</p>

      <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
    </article>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'; 
export default {
  name: 'grid',
  props: {
    msg: String
  }, 
  methods: {
    ...mapMutations(["CREATE_DATA"]),
    ...mapActions([
      
    ]), 
   
  }, 
  created: function() {
  
    this.CREATE_DATA(); 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
