<template class="position-relative ">
    <!-- background -->
    <div class="backGroundImg position-absolute h-100 z-under">
        <img src="../../src/assets/images/misc/base_pagina2.jpg"   alt="">
    </div>

    <!-- content -->
    <div class="gameContainer d-flex justify-content-between">
        <div class="   shelf position-relative">
            <!-- shelf bg -->
            <img class=" table position-absolute" src="../../src/assets/images/boards/livingroom.png" alt="">
            <!-- card container -->
            <div class="grid" >
                <div ref="squares" v-for="(el, index) in Table.flattenedMatrix()" class="square" @click="selectTile(index)">
                    <img v-if="el !== 0" class="w-100 h-100 "  :src="'../../src/assets/images/item tiles/'+el+'.png'" alt="">
                </div>
               
            </div>
        </div>

        
        <div class="w-50 h-100 game-content">

        </div>

    </div>
</template>

<script>

import {setupGame} from '../model/setup.js'
import Table from '../model/table.js';

export default {
    name: 'Game',
    data () {
        return {
            Table
        }

    },
    methods:{
        selectTile(index){
            const coords = this.indexToCoords(index)
            const solutions = Table.selectTile(coords.x, coords.y);
            console.log(solutions);

            this.resetVisual();

            solutions.forEach((el)=>{
                
                let index = this.decriptIndex(el[0], el[1]);
               
                const selectedSquare = this.$refs.squares[index];
               
                selectedSquare.style.border = '5px solid greenyellow';
            })
            //const selectedSquare = this.$refs.squares[index];
        },
        selectable(index){
            const coords = this.indexToCoords(index);
            return Table.totalSolutions.includes([coords.x, coords.y]);s
        },
        indexToCoords(index){
            let x = Math.floor(index / 9);
            let y = index % 9;
            return {x: x, y: y}
        },
        decriptIndex(x, y){
            return x*9 + y;
        },
        resetVisual(){
            this.$refs.squares.forEach(el =>{
                el.style.border = '';
            })
        }
    },
    
    beforeCreate(){
        setupGame(2);
    }
    

}
</script>

<style lang="scss" scoped>
    .gameContainer{
        width: 100%;
        height: 100vh;
    }
    

    img{
        max-width: 100%;
        min-height: 100%;
        
    }

    .backGroundImg{
        z-index: -1;
        background-size: cover;
        min-height: 100vh;
        
    }
    .backGroundImg>img{
        min-height: 100vh;
        
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(9, 1fr); /* 9 colonne con larghezza uguale */
        grid-template-rows: repeat(9, 1fr); /* 9 righe con altezza uguale */
        gap: 2px; /* Spazio tra le celle */
       
        position: relative;
     
        padding-left: 3.9%;
        padding-right: 4.9%;
        padding-top: 3.9%;
        padding-bottom: 4%;

        width: 100vh;
        height: 100vh;
    }

    .square {
        background-color: rgba(255, 255, 255, 0.138); /* Colore di sfondo del quadrato */
        //border: 1px solid black; /* Bordo nero */
    }
    
    .table{
        aspect-ratio: 1/1;
        width: 100vh!important;
        height: 100vh!important;
        max-width: 100vh!important;
        max-height: 100vh!important;
        min-height: 100vh!important;
    }

    .tileGreen{
        border: 5px solid greenyellow;
    }
    .tileRed{
        border: 5px solid red;
    }
</style>