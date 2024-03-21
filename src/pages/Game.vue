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
                    <img ref="images" v-show="el !== 0" class="w-100 h-100 "  :src="'../../src/assets/images/item tiles/'+el+'.png'" alt="">
                </div>
            </div>

        </div>

        <div class="w-50 h-100 game-content d-flex flex-row justify-content-between ">
            <div class="opzioni w-50 mt-4 d-flex flex-row gap-2">
                <div v-for="selectable in 3" class=" squareSelect ">
                    <img v-if="selectable-1 < arrayColors.length " :src="'../../src/assets/images/item tiles/'+arrayColors[selectable -1]+'.png'" alt="">
                    <img v-else src="../../src/assets/images/misc/sfondo parquet.jpg" alt="">
                </div>
            </div>
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
            Table,
            firstClick: true,
            prevElement: [],
            arrayColors: []
        }

    },
    methods:{
        selectTile(index){
            if(this.firstClick){
                const coords = this.indexToCoords(index);
                //seleziono il primo elemento che pesco 
                this.prevElement = [coords.x, coords.y];
                const solutions = Table.selectTile(coords.x, coords.y);
                //console.log(solutions);

                this.resetVisual();

                solutions.forEach((el)=>{

                    let index = this.decriptIndex(el[0], el[1]);

                    const selectedSquare = this.$refs.squares[index];

                    selectedSquare.style.border = '5px solid greenyellow';

                    this.firstClick = false;
                })
            } else { 
                const coords = this.indexToCoords(index);
                //se l'elemento è selezionabile
                if(this.selectable(index)){
                    //taking elements drawn
                    const colors = Table.validateAndTake(this.prevElement, this.indexToCoordsPlain(index))
                    
                    this.arrayColors= colors;
                    //alert('colors')
                    this.resetVisual();

                } else {
                    this.resetVisual();
                }

                this.firstClick = true;
            }
            //const selectedSquare = this.$refs.squares[index];
        },
        selectable(index){
            const coords = this.indexToCoords(index);
            const contieneArrayXY = Table.totalSolutions.some(arrayXY => {
                // Verifica se l'array xy corrente corrisponde all'array xy da cercare
                return arrayXY[0] === coords.x && arrayXY[1] === coords.y;
            });
            return contieneArrayXY;
        },
        indexToCoords(index){
            let x = Math.floor(index / 9);
            let y = index % 9;
            return {x: x, y: y}
        },
        indexToCoordsPlain(index){
            let x = Math.floor(index / 9);
            let y = index % 9;
            return {0: x, 1: y};
        },
        decriptIndex(x, y){
            return x*9 + y;
        },
        resetVisual(){
            //console.log(Table.flattenedMatrix());
            const flatMatrix = Table.flattenedMatrix();
            this.$refs.squares.forEach((el, index) =>{
                el.style.border = '';

            });
            //console.log(this.$refs.images)
            this.$refs.images.forEach((el, index) =>{
                //el.style.display = 
                flatMatrix[index] >0 ? el.style.display = 'block' : el.style.display = 'none'; 
            });
        }
    },
    
    beforeCreate(){
        setupGame(2);
    }

    
    

}
</script>

<style lang="scss" scoped>
@use '/src/assets/style/partials/_variables.scss' as *;
    .squareSelect{
        background-color: greenyellow;
        aspect-ratio: 1 / 1;
        border: 4px solid $myGold;
        border-radius: 5px;
        
    }

    .opzioni{
        max-width: 21vw;
        max-height: 7vw;
        aspect-ratio: 3/1;
        
    }
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