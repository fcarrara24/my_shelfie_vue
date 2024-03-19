<template>
    <!-- background -->
    <background-image :image-url="'../../src/assets/images/misc/base_pagina2.jpg'" class="sfondo">
    </background-image>
    
    <!-- content -->
    <div class="container d-flex flex-column justify-content-center" >
        <div class="row align-items-center justify-content-center">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <router-link :to="{ name: 'home' }" class="d-flex justify-content-center" type="submit">
                    <div class="title-container-image">
                        <img src="\src\assets\images\Publisher material\Title 2000x618px.png" alt="" srcset="">
                    </div>
                </router-link>
                <!-- <div v-for="player in store.allPlayers" class="playersContainer"> -->
                    <div class="playerContainer w-100 ">
                    <NewPlayerSpecs class="w-99" />
                    
                    <PlayerSpec  v-for="player in store.allPlayers" :player="{ ...player, alreadySelected: store.selectedPlayers.includes(player) }" class="w-99 outline" :class="store.selectedPlayers.includes(player)"/>

                    </div>


                <!-- </div> -->
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
import {store} from '../data/store.js';
import PlayerSpec from '../components/partials/PlayerSpec.vue';
import BackgroundImage from '../components/partials/BackgroundImage.vue';
import NewPlayerSpecs from '../components/partials/NewPlayerSpecs.vue';
export default {
    name: "PlayerSelection",
    data () {
        return {
            store,
            showSelected: store.selectedPlayers
        }
    },
    methods:{
        setPlayers(){
            axios.get(store.apiUrl + '/players').then((res)=>{
                this.store.allPlayers = this.store.allPlayers.concat(res.data.data);
                //console.log(this.store)
            })
        },
        
    },
    created(){
        this.setPlayers();
    },
    components: {BackgroundImage, PlayerSpec, NewPlayerSpecs},
}
</script>

<style lang="scss" >
@use '/src/assets/style/partials/_variables.scss' as *;
    // for selected elements
    .outlined{
        border: 5px solid green!important;
    }
    .myGolded{
        color: $myGold;
    }
    //scrollbar
    ::-webkit-scrollbar-thumb {
    background: $myGold;
    }
    

    ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: $myWood; /* or add it to the track */
    
    }
    .playerContainer{
        max-height: 30vh;
        overflow-y: auto;
        overflow-x: hidden;

    }
    .playerContainer>*{
        width: 99%;
        box-sizing: border-box;
    }
      .container>*{
        text-align: center;
    }
    .title{
        margin: 20px;
        font-size: 4em;
        font-weight: bolder;
    }
    #app{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container{
        height: 100vh;
    }


    .title-container-image{
        max-width: 60%;
        overflow: hidden;
    }
    img{
        max-width: 100%;
        height: auto;
    }

    .playersContainer{
        color: $myGold;
    }
    .w-99{
        width: 98%;
    }



    .sfondo{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('path/to/your/image.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        z-index: -1; /* Assicura che lo sfondo sia dietro il contenuto */
    }
</style>