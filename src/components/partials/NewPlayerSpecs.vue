<template>
    <div class="specs d-flex flex-row justify-content-between">
        <div class="d-flex flex-row justify-content-center ">
            <div class="font-size-2em">
                NUOVO:&nbsp;
            </div>
            <div>
                <input v-model="newPlayer" type="text" class="invisibleInput">
            </div>
        </div>
        <div class="playerActions d-flex flex-row gap-5 justify-content-center h-100">
            <div class="playerActions d-flex flex-column gap-1">
                <!-- create button -->
                <div class="edit opt-button" @click="createPlayer">
                    <i class="fa-solid fa-user-plus"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {store} from '../../data/store.js';
export default {
    name: 'PlayerSpec',
    data () {
        return {
            store,
            newPlayer: ''
        }
    },
    methods: {
        createPlayer(){
            if(this.newPlayer.length > 0){


                //constrcting query
                const data = {
                    nickname: this.newPlayer,
                    victories: 0,
                    matches: 0
                };
                axios.post(this.store.apiUrl+'/players', data)
                    .then((res)=>{
                        this.newPlayer = '';
                        console.log(res);
                        location.reload();
                    })
                    .error((err)=>console.log(err))
            }
        },
    },
}
</script>

<style lang="scss" >

@use '/src/assets/style/partials/_variables.scss' as *;

.invisibleInput{
    background-color: transparent;
    font-size: 2em;
    font-weight: bolder;
    outline: none;
    border: 0px solid;
}
.my-w100{
    width: 100%;
}
.font-size-2em{
    font-size: 2em;
}
.opt-button{
    padding: 5px;
    border: 1px solid $myWood;
    border-radius: 5px;
    color: $myGold;
    background-color: $myWood;
}
.specs {
  margin: 10px;
  backface-visibility: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  background: linear-gradient(180deg,#fea 0%,#dc8 49%,#a95 51%,#dc8 100%);
  border-radius: 5px;
  border: 1px solid #ba6;
  border-width: 1px 1px 1px 1px;
  padding: 10px;
  box-shadow: inset 0px 1px 0px rgba(255,255,255,1),0px 1px 3px rgba(0,0,0,0.3);
    color: $myWood;
  font-size: 16px;
  font-family: Helvetica Neue;
  font-weight: 900;
  font-style: normal;
  text-shadow: 0px -1px 0px rgba(0,0,0,0.4);
    text-decoration: none;
  }


.specsPattern{
   color: $myWood;
  background: linear-gradient(top, #a95, #f2f2f2 25%, #ffffff 38%, #c5c5c5 63%, #f7f7f7 87%, #a95);
  background: -webkit-linear-gradient(top, #a95, #fea 25%, #ffffff 38%, #dc8  63%, #fea 87%, #a95);}


</style>