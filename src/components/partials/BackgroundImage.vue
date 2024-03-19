<!-- BackgroundImage.vue -->
<template>
<div class="background-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    <!-- Contenuto del componente -->
    <slot></slot>
</div>
</template>

<script>
export default {
props: {
    imageUrl: {
        type: String,
        required: true
    }
}
};
</script>

<style scoped>
    .background-image {
    background-size: cover;
    height: 100vh;
    width: 100%;
    /* Altri stili per la dimensione e il posizionamento dell'immagine di sfondo */
    }
</style>
