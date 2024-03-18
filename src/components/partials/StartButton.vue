<template>
    <router-link :to="{ name: 'player' }" type="submit">
        <div id="start_button" class="wood text-decoration-none" @click="StartGame">
            Nuova Partita 
        </div>
    </router-link>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        startGame(){
            console.log("start game");
            alert('started');
        }
    }
}
</script>

<style lang="scss" scoped>

#start_button{
    text-decoration: none;
    font-size: 2em;

    display: inline;
    position: relative;
    top:-0px;

    min-width: 80px;
    min-height: 30px;

    padding: 10px 25px 10px 25px;

    cursor: pointer;

    font-family: 'Arvo',sans-serif;
    font-weight: bold;
    color:#562d19;

    border-radius: 5px;
    border-style: solid;
    border-width: 0 0 6px 0;

    &:hover{
        background-image: none;
        background-color: #8c5324;
        color: white;
       
    }
}

.wood{
  color:#7c4314;
  border-color:#8c5324;
    background-image: url('../../assets/images/woods/light_wood.png');
}


</style>