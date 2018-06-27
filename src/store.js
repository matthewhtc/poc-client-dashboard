import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(require('vue-faker')); 
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mockData: [], 
    products: ['RecoWell', 'Reviewsii', 'Tradesii', 'TotalLoss', 'Credsii']
  },
  mutations: {
    CREATE_DATA: (state, link) => {
      for (var i = 0; i < 15; i++) {
        let data = {}; 
        data.firstName = Vue.faker().name.firstName(); 
        data.lastName = Vue.faker().name.lastName(); 
        data.phone = Vue.faker().phone.phoneNumberFormat(); 
        data.email = Vue.faker().internet.email(); 
        data.dateCreated = Vue.faker().date.past();  
        data.product = state.products[ Math.floor((Math.random() * (state.products.length - 1))) ]; 
        state.mockData.push(data);  
      }
    }
  },
  actions: {
    
  }
})