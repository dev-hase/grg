<template>

   <iframe class="ytvideo" width="560" height="315" frameborder="0" :src="'https://www.youtube-nocookie.com/embed/'+videoid+'?rel=0&mute=1'"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</template>

<script>
export default {
    props: ["videoid"]
};  
</script>

<style lang="stylus" scoped>
    .ytvideo 
        box-shadow 2px 1px 3px #111 !important
        filter grayscale(100%)
        margin 1.5rem 0

</style>