<template>
    <div class="video-box">
        <div class="youtube" :id="videoid" :data-params="combineParams" style="width:640px;height:360px;"></div>
    </div>    
</template>

<script>  
export default {
    props: ["videoid", "start", "end", "mute"],
    mounted() {
        let YTScript = document.createElement('script')
        YTScript.setAttribute('src', '/YouTube.js')
        document.head.appendChild(YTScript)
    },
    computed: {
        startAt: function () {
            if (this.start) return this.start.replace (/^/,'&start=')
            else return ''
        },
        endAt: function () {
            if (this.end) return this.end.replace (/^/,'&end=')
            else return ''
        },
        muteState: function () {
            if (this.mute) return this.mute.replace (/^/,'&mute=')
            else return ''
        },
        combineParams: function () {
            let myParams = this.muteState + this.startAt + this.endAt
            return myParams
        }
        
    }

};  
</script>

<style lang="stylus" scoped>
        
    .video-box
        position relative
        margin 3.2rem 0
        border-radius .5rem
        box-shadow 3px 4px 5px #555 !important
        
        border-style solid
        border-width 3rem 1rem
        
        border-image-slice 70 27 68 27
        border-image-width 3.3rem 0.75rem 3.3rem 0.75rem
        border-image-outset 0px 0px 0px 0px
        border-image-repeat stretch stretch
        border-image-source url("/img/film.jpg")
        
        filter grayscale(100%) sepia(30%)
  
        
    .youtube 
        background-color #000
        background-position center
        background-size cover
        background-repeat no-repeat
        position relative
        display block
        overflow hidden
        transition all 200ms ease-out
        cursor pointer
        margin auto
        min-width 100%
        max-width 100%
        
        z-index 1

</style>