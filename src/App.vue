<template>
  <h1>hello world</h1>
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
    getAllPlayers(){
      axios.get(store.apiUrl + '/players').then((res)=>{
        console.log(res);
      })
    }
  },
  mounted(){
    this.getAllPlayers();
  }

}
</script>

<style lang="scss" scoped>

</style>