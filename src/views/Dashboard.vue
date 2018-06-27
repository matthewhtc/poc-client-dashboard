<template>
  
  <!-- stack 2 rows of length 12; for each row, separate in 2 and 3 tiles -->
  <div class="dashboard">
    <NavBar/>
    
    <div class="dashboard tile is-ancestor">

      <div class="tile is-vertical">
        <div class="tile is-12">
          <BarChart/>
          <Grid/>
        </div>

        <div class="tile is-12">
          <tile1/>
          <tile2/>
          <tile3/>
        </div>     
      </div>

    </div>
  </div> <!-- .dashboard  -->
</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue'; 
import BarChart from '@/components/BarChart.vue'; 
import Tile1 from '@/components/Tile1.vue'; 
import Tile2 from '@/components/Tile2.vue'; 
import Tile3 from '@/components/Tile3.vue'; 
import NavBar from '@/components/NavBar.vue'; 
import 'bulma/bulma.sass'; // import as sass file 

export default {
  name: 'dashboard',
  components: {
    Grid, 
    BarChart, 
    Tile1, 
    Tile2, 
    Tile3, 
    NavBar
  }
}
</script>

<style lang="scss">

.dashboard {
  margin: 10px; 
}
</style>
