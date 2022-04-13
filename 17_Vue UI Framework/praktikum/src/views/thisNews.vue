<template>
  <v-app class="listNews">
    <nav style="margin-left: 10%; padding: 1px 16px">
      <h1 style="flex-grow: 1; margin: 0px; margin-left: 3rem">
        Breaking News
      </h1>
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </nav>
    <ul>
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div
      class="row"
      style="margin-left: 10%; padding: 1px 16px; height: 1000px"
    >
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
  </v-app>
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
      this.$store.dispatch("news/fecthNews");
    },
  },
  mounted() {
    this.fecthNews();
  },
};
</script>

<style>
nav {
  background-color: darkblue;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 1);
}

.topnav input[type="text"] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 10%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: #04aa6d;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}

.box-news {
  padding: 10px;
  margin: 20px;
  width: 1000px;
}
</style>
