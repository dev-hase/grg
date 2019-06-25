<template>

       <iframe class="ytvideo" width="560" height="315" frameborder="0" :src="'https://www.youtube-nocookie.com/embed/'+videoid+'?rel=0&mute=1'+startAt+endAt+'&modestbranding=1&showinfo=0&iv_load_policy=3'"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
        box-shadow 2px 1px 3px #111 !important
        filter grayscale(100%)
        margin 1.5rem 0

</style>