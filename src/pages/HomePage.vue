<template class="template">

    
    

    
   <!-- background -->
    <background-image :image-url="'../../src/assets/images/misc/base_pagina2.jpg'" class="sfondo">
    </background-image>

    <!-- content -->
    <div class="container d-flex flex-column justify-content-center" >
        <div class="row align-items-center justify-content-center">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="title-container-image">
                    <img src="\src\assets\images\Publisher material\Title 2000x618px.png" alt="" srcset="">
                </div>
                
                <div class="d-flex flex-row gap-2">
                    <PlayerButton/>
                    <StartButton/>
                    <InfoButton/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import StartButton from '../components/partials/StartButton.vue';
    import InfoButton from '../components/partials/InfoButton.vue';
    import PlayerButton from '../components/partials/PlayerButton.vue';
    import BackgroundImage from '../components/partials/BackgroundImage.vue';
    export default {
        name: "HomePage",
        data () {
            return {

            }
        },
        components: {StartButton, InfoButton, PlayerButton, BackgroundImage}
    }
</script>



<style lang="scss" scoped>

    //settaggio di uno sfondo

    .template {
        background-image: url('src/assets/images/misc/base_pagina2.jpg');
        background-size: cover; /* per adattare l'immagine alla dimensione della finestra del browser */
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