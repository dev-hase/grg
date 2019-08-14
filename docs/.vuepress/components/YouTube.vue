<template>
    <div class="iframe-box">
       <iframe class="ytvideo" width="560" height="315" frameborder="0" :src="'https://www.youtube-nocookie.com/embed/'+videoid+'?rel=0&mute=1'+startAt+endAt+'&modestbranding=1&showinfo=0&iv_load_policy=3'"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    props: ["videoid", "start", "end"],
    computed: {
        startAt: function () {
            if (this.start) return this.start.replace (/^/,'&start=')
            else return ''
        },
        endAt: function () {
            if (this.end) return this.end.replace (/^/,'&end=')
            else return ''
        }
    }
};  
</script>

<style lang="stylus" scoped>
    .ytvideo 
        filter grayscale(100%)
        
    .iframe-box
        position relative
        margin 1.5rem 0
        border-radius .5rem
        box-shadow 3px 4px 5px #555 !important

        border-top 2.5rem solid transparent
        border-bottom 2.5rem solid transparent
        border-left .2rem solid transparent
        border-right .1rem solid transparent
        
        border-image-slice 169 27 186 27
        border-image-width 2.5rem 0.2rem 2.5rem 0.2rem
        border-image-outset 0px 0px 0px 0px
        border-image-repeat stretch stretch
        border-image-source url("/img/film.png")
        

</style>