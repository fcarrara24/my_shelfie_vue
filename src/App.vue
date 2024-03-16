<template>
  <router-view>
  </router-view>
</template>

<script>
 import {store} from './data/store.js';
 import axios from 'axios';


export default {
  name:'App',
  data () {
    return {
      store,
    }
  },
  methods: {
    /**
     * getting all of the players via axios call
     */
    getAllPlayers(){
      axios.get(store.apiUrl + '/players').then((res)=>{
        this.store.allPlayers = this.store.allPlayers.concat(res.data.data);
        //console.log(this.store)
      })
    }
  },
  mounted(){
    this.getAllPlayers();
  }

}
</script>

<style lang="scss" scoped>
  
  @use '/src/assets/style/partials/_variables.scss' as *;
</style>