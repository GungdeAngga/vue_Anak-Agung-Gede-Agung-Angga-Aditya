<template>
  <v-app class="thisDeskripsi">
    <img :src="listNews[indexNews].urlToImage" />
    {{ listNews[indexNews].author }}
    {{ listNews[indexNews].title }}
    {{ listNews[indexNews].content }}
    <router-link to="/" class="buttonBack"
      ><button>Kembali</button></router-link
    >
  </v-app>
</template>

<script>
export default {
  name: 'thisDeskripsi',
  data() {
    return {
      newDeskripsi: '',
      deskripsi: '',
    }
  },
  computed: {
    listNews() {
      return this.$store.state.news.listNews
    },
    indexNews() {
      return this.$route.params.id.slice(2)
    },
  },
  methods: {
    fecthNews() {
      this.$store.dispatch('news/fecthNews')
    },
  },
}
</script>

<style>
.thisDeskripsi {
  padding: 10px;
  margin: 20px;
  width: 1000px;
}
</style>
