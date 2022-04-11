<template>
  <div class="listNews">
    <h1>Breaking News</h1>
    <div class="row">
      <div class="box-news" v-for="(news, index) in listNews" :key="index">
        <router-link :to="'/thisDeskripsi/id' + index">
          <img :src="news.urlToImage" />
          {{ news.author }}
          {{ news.title }}
          {{ news.description }}
          {{ news.publishedAt }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listNews() {
      return this.$store.state.news.listNews;
    },
  },
  methods: {
    fecthNews() {
      this.$store.dispatch('news/fecthNews');
    },
  },
  mounted() {
    this.fecthNews();
  },
};
</script>

<style>
.box-news {
  box-sizing: border-box;
  padding: 10px;
  width: 30%;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
