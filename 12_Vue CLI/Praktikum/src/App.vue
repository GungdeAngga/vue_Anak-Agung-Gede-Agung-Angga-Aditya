<template>
  <div id="app">
    <ol>
      <li v-for="item in items" :key="item.name">
        {{ item.name }}
      </li>
    </ol>
    <input type="text" v-model="TaskBaru" />
    <button @click="addItems">Tambahkan</button>
    <p v-if="items.length >= 4">Hebat!!</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      TaskBaru: "",
      items: [],
    };
  },
  methods: {
    addItems() {
      if (this.TaskBaru === "") {
        alert("input kosong mohon diisi");
      } else {
        this.items.push({ name: this.TaskBaru });
        this.TaskBaru = "";
      }
    },
  },
};
</script>
