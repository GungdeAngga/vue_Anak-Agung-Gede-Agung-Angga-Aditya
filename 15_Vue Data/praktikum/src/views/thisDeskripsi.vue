<template>
  <div class="thisDeskripsi">
    <img :src="listNews[indexNews].urlToImage" />
    {{ listNews[indexNews].author }}
    {{ listNews[indexNews].title }}
    {{ listNews[indexNews].content }}
    <router-link to="/" class="buttonBack"><button>Kembali</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'thisDeskripsi',
  data() {
    return {
      newDeskripsi: '',
      deskripsi: '',
    };
  },
  computed: {
    listNews() {
      return this.$store.state.news.listNews;
    },
    indexNews() {
      return this.$route.params.id.slice(2);
    },
  },
  methods: {
    fecthNews() {
      this.$store.dispatch('news/fecthNews');
    },
  },
};
</script>

<style></style>
