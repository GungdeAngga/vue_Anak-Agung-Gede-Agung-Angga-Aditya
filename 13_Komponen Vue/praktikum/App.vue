<template>
  <div class="addList">
    <h1>ToDo List</h1>
    <ol class="ol">
      <li v-for="(subject, index) in subjects" :key="index">
        {{ subject.message }}
        <button @click="deleteSubject(index)">hapus</button>
        <button @click="changeIndex(index)">Edit</button>
      </li>
    </ol>
    <div v-if="check === false">
      <input type="text" v-model="isi" value="isi" />
      <button @click="addSubject">Tambahkan</button>
    </div>
    <div v-else>
      <input type="text" v-model="isi" value="isi" />
      <button @click="editSubject(newIndex)">edit</button>
    </div>
    <div v-if="subjects.length > 3">Hebat</div>
  </div>
</template>

<script>
export default {
  name: "addList",
  data() {
    return {
      isi: "",
      check: true,
      subjects: [],
      newIndex: 0,
    };
  },
  methods: {
    addSubject() {
      if (this.isi != "") {
        this.subjects.push({ message: this.isi });
        this.isi = "";
      }
    },
    deleteSubject(id) {
      this.subjects.splice(id, 1);
    },
    changeIndex(id) {
      this.check = true;
      this.newIndex = id;
    },
    editSubject(id) {
      this.subjects.splice(id, 1, { message: this.isi });
      this.check = false;
      this.isi = "";
    },
  },
};
</script>

<style>
</style>