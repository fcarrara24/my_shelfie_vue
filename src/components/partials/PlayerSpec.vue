<template >
    
    <div class="specs d-flex flex-row justify-content-between my-w100 " :class="(toggleSelected)?'outlined':''">
        <div class="d-flex flex-column justify-content-center ">
            <div v-if="!editMode" class="playerNameContent font-size-2em">
                {{ player.nickname }}
            </div>
            <div v-if="editMode">
                <input v-model="playerEdit" type="text" class="invisibleInput">
            </div>
        </div>
        <div class="playerActions d-flex flex-row gap-5">
            <div class="playerStats d-flex flex-column justify-content-evenly gap-2">
                <div class="victories my-p-10">
                    <i class="fa-solid fa-trophy"></i>
                    {{ player.victories }}
                </div>
                <div class="partite my-p-10">
                    <i class="fa-solid fa-chess-board"></i>
                    {{ player.matches }}
                </div>
            </div>
            <div class="playerActions d-flex flex-column gap-1">
                <!-- edit button -->
                <div v-if="!editMode" class="edit opt-button" @click="activateEdit">
                    <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <!-- confirm change button -->
                <div v-if="editMode" class="edit opt-button" @click="endEdit">
                    <i class="fa-solid fa-check"></i>
                </div>
                <!-- delete button -->
                <button class="delete opt-button" @click="deletePlayer">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <!-- add player -->
                <button v-if="!toggleSelected" class="add opt-button" @click="addPlayer()">
                    <i class="fa-solid fa-plus"></i>
                </button>
                <!-- remove player -->
                <button v-if="toggleSelected" class="add opt-button" @click="removePlayer()">
                    <i class="fa-solid fa-user-minus"></i>
                </button>
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
            toggleSelected: this.player.alreadySelected,
            editMode: false,
            playerEdit: this.player.nickname,
            id: this.player.id,
        }
    },
    methods: {
        activateEdit(){
            this.editMode = true;
        },
        endEdit(){
                if(this.playerEdit.length > 0){
                    this.editMode = false;

                //constrcting query
                const data = {
                    nickname: this.playerEdit,
                    victories: this.player.victories,
                    matches: this.player.matches
                };
                axios.put(this.store.apiUrl+'/players/'+this.id, data)
                    .then((res)=>{
                        console.log(res);
                        location.reload();
                    })
                    .error((err)=>console.log(err))
            }
        },
        deletePlayer(){
            
            axios.delete(store.apiUrl+'/players/'+this.id).then((res)=>{
                console.log('cancellato')
                this.getAllPlayers;
                location.reload()

            }).error((err)=>{
                console.log(err)
            })
        },
        getAllPlayers(){
            axios.get(store.apiUrl + '/players').then((res)=>{
                this.store.allPlayers = this.store.allPlayers.concat(res.data.data);
                //console.log(this.store)
            })
        },
        addPlayer(){
            if(this.store.selectedPlayers.length < 4){
                this.toggleSelected = true;
                let id = this.player.id
                let playerToAdd = this.store.allPlayers.find(player => player.id === id);
                this.store.selectedPlayers.push(playerToAdd);
            }
           
        },
        removePlayer(){
            this.toggleSelected = false;
            let id = this.player.id
            //updating array accordingly to item to remove 
            this.store.selectedPlayers = this.store.selectedPlayers.filter(item => item.id !== id);
        },
        

    },
    props: {
        player: Object,
        
    }
}
</script>

<style lang="scss" >

@use '/src/assets/style/partials/_variables.scss' as *;

.outlined{
    border: 10px solid greenyellow;
}
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