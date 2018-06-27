<template>
  <div class="grid tile is-parent is-6">
    <article class="tile is-child box">
      <p class='title'>Grid</p>

      <div class="content">
        <div class="table__wrapper">
        <table class="table">
          <thead>
            <th></th>
            <th>Product</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date</th>
          </thead>
          <tbody v-for="row in mockData">
            <td>{{ row.id }}</td>
            <td>{{ row.product }}</td>
            <td>{{ row.firstName }} {{ row.lastName }}</td>
            <td>{{ row.phone }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.dateCreated | moment("MMMM Do")}}, {{ row.dateCreated | moment("YYYY")}}</td>
          </tbody>
        </table>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'; 
export default {
  name: 'grid',
  data: function() {
    return {
      product: [], 
      name: [], 
      phone: [], 
      email: [], 
      date: []
    }
  },
  props: {
    
  }, 
  computed: {
    ...mapState(['mockData'])
  },
  methods: {
    ...mapMutations(["CREATE_DATA"]),
  }, 
  created: function() {
    this.CREATE_DATA(); 
    // console.log(this.$moment); 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table__wrapper {
  overflow-x: auto;
}
</style>
