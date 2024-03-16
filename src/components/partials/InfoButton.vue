<template>
    <div id="start_button" class="wood " @click="downloadRules">
        <i class="fa-solid fa-circle-info"></i>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        async downloadRules(){
             // Assume that 'rules.pdf' is the name of the PDF file
            const fileName = 'rules.pdf';

            // Fetch the PDF file
            const response = await fetch('src/assets/images/download/Rulebook_ITA_My-Shelfie.pdf');
            const pdfBlob = await response.blob();

            // Create a Blob URL for the PDF file
            const url = window.URL.createObjectURL(new Blob([pdfBlob]));

            // Create an anchor element
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;

            // Trigger the click event on the anchor element
            document.body.appendChild(link);
            link.click();

            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        }
    }
}
</script>

<style lang="scss" scoped>

#start_button{

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