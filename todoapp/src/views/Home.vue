<template>
  <div>
    <h1>ToDo App - Intermediate</h1>
    <h3>A VueJS app built for Software Saturdays Fall 20201.</h3>
    <h3>For more information, visit our <a href="https://purdueieee.org/software" target="_blank">website</a>.</h3>
    <hr>
    <h4>Current ToDo List</h4>
    <div class="list_wrapper">
      <ToDoList />
    </div>
    <hr>
    <h4>Finished ToDo List</h4>
    <div class="list-wrapper">
      <DoneItem v-for="done in done_list" v-bind:todo="done" v-bind:key="done.id" v-on:restore="restore_done"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue'
import DoneItem from '@/components/DoneItem.vue'
import { done_list, delete_done, add_todo, get_done } from '@/database'

export default {
  name: 'Home',
  components: {
    ToDoList,
    DoneItem,
  },
  data() {
    return {
      done_list: [],
    }
  },
  mounted() {
    this.done_list = done_list;
  },
  methods: {
    restore_done (id) {
      let task = get_done(id);
      add_todo(task.title, task.description);
      delete_done(id);
    }
  }
}
</script>

<style scoped >
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