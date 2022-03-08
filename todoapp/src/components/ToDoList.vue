<template>
    <div>
      <div class="list-wrapper">
        <ToDoItem v-for="todo in todo_list" v-bind:todo="todo" v-bind:key="todo.id" v-on:done="todo_done"/>
      </div>
      <div class="list-wrapper">
        <div class="item-add-wrapper">
          <div class="button button-add" v-on:click="todo_add">Add New ToDo Item</div>
        </div>
      </div>
    </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue'
import { todo_list, get_todo, delete_todo, add_done } from '@/database'

export default {
  name: 'ToDoList',
  components: {
    ToDoItem,
  },
  data() {
    return {
      nxtID: 0,
      todo_list: [],
    }
  },
  methods: {
    todo_add() {
      this.$router.push({
        name: 'New',
        params: {
          nxtID: this.nxtID
        }
      });
    },
    todo_done(id) {
      let task = get_todo(id);
      add_done(task.title, task.description);
      delete_todo(id);
    }
  },
  mounted() {
    this.todo_list = todo_list;
  }
}
</script>

<style scoped>
.list-wrapper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.item-add-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border: 2px solid gray;
    margin: 10px 0px;
    padding: 5px;
}

@media only screen and (min-width: 750px) {
  .list-wrapper {
    width: 750px;
    margin: 0 auto;
  }
}
</style>