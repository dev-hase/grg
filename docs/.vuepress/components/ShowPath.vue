<template>
    <section class="panel">
        <div class="panel-item" v-for="post in posts" v-if="post.path != path">
                <router-link :to="{ path: post.path }">
                    <article> 
                        <h2 class="panel-heading"> {{ post.title }} </h2>
                        <p> {{ post.frontmatter.meta[0].content }} </p>
                    </article>
                </router-link>   
        </div>
    </section>
</template>

<script>
export default {
    props: ["path"],
    computed: {
        
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith(this.path))
                .sort((a, b) => (a.frontmatter.order > b.frontmatter.order) ? 1 : -1)
        },      
    }

};  
</script>

