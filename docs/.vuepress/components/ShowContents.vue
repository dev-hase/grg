<template>
  <div class="panel-item">
    <router-link :to="{ path: `/` + bereich + `/` }">
      <article>
        <h2 class="panel-heading">{{ bereich }}</h2>
        <img :src=" $withBase(`/img/` + bereich + `.svg`) " />
        <p>{{ beschreibung }}</p>
      </article>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["bereich", "beschreibung"]
};
</script>

