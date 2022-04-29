<template>
  <div class="todo-list-item">
    <div class="list">
      <div v-if="editMode" class="todo-edit">
        <div class="index-column">{{ index + 1 }}.</div>

        <ApolloMutation
          :mutation="
            (gql) =>
              gql`
                mutation MyMutation($id: Int!, $name: String!) {
                  update_todo_list_by_pk(
                    pk_columns: { id: $id }
                    _set: { name: $name }
                  ) {
                    id
                    name
                  }
                }
              `
          "
          :variables="{ id: todoItem.id, name: editedTodo }"
          :refetchQueries="refetchQueriesAfterMyMutation"
        >
          <template v-slot="{ mutate, loading, error }">
            <input
              v-model="editedTodo"
              @keyup.enter="mutate()"
              type="text"
              class="edit-column"
            />

            <!-- <button :disabled="loading" @click="mutate()">Click me</button> -->
            <p v-if="error">An error occurred: {{ error }}</p>
          </template>
        </ApolloMutation>
      </div>
      <div v-else class="todo">{{ index + 1 }}. {{ todoItem.name }}</div>

      <ApolloMutation
        :mutation="
          (gql) => gql`
            mutation DeleteTodo($id: Int!) {
              delete_todo_list_by_pk(id: $id) {
                id
                name
              }
            }
          `
        "
        :variables="{ id: todoItem.id }"
        :refetchQueries="refetchQueriesAfterMyMutation"
      >
        <template v-slot="{ mutate, loading, error }">
          <button @click="mutate()" class="action">Delete</button>

          <!-- <button :disabled="loading" @click="mutate()">Click me</button> -->
          <p v-if="error">An error occurred: {{ error }}</p>
        </template>
      </ApolloMutation>
      <button @click="editHandler" class="action">Edit</button>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag"

export default {
  name: "TodoListItem",
  props: {
    index: Number,
    todoItem: Object,
  },
  data() {
    return {
      editedTodo: "",
      editMode: false,
      isEmpty: false,
    };
  },
  mounted() {
    this.editedTodo = this.todoItem.body;
  },
  computed: {
    refetchQueriesAfterMyMutation() {
      return [
        {
          query: gql`
            query MyQuery {
              todo_list {
                id
                name
              }
            }
          `,
        },
      ];
    },
  },
  methods: {
    changeEditMode() {
      this.editMode = !this.editMode;
    },
    editHandler() {
      this.editMode ? this.editTodo() : this.changeEditMode();
    },
    editTodo() {
      this.isEmpty = !this.editedTodo;
      if (!this.isEmpty) {
        this.$emit("edit-todo", this.todoItem.id, this.editedTodo);
        this.changeEditMode();
      }
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  margin: 20px 0;
}

.todo {
  width: 80%;
}

.todo-edit {
  display: flex;
  width: 80%;
}

.index-column {
  width: 2%;
}

.edit-column {
  width: 98%;
}

.error-empty {
  color: red;
}
</style>
