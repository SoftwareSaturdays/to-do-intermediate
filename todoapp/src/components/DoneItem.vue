<template>
  <div class="item-wrapper">
    <div class="item-action-wrapper">
        <div class="button button-add" v-on:click="restore_done">Restore</div>
        <div class="item-text-wrapper">{{ todo.title }}</div>
        <div class="button button-edit" v-on:click="view_todo">View</div>
        <div class="button button-delete" v-on:click="delete_todo">Delete</div>
    </div>
    <p v-if="view">
      {{ todo.description }}
    </p>
  </div>
</template>

<script>
import { delete_done } from "@/database";

export default {
  name: "DoneItem",
  props: {
    todo: Object,
  },
  data() {
    return {
      view: false,
    }
  },
  methods: {
    view_todo() {
      this.view = !this.view;
    },
    delete_todo() {
      delete_done(this.todo.id);
    },
    restore_done() {
      this.$emit('restore', this.todo.id);
    },
  },
};
</script>

<style scoped>
.item-wrapper {
  border: 2px solid gray;
  margin: 10px 0px;
  padding: 5px;
}

.item-wrapper p {
  text-align: left;
  margin: 10px 10%;
}

.item-action-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.item-text-wrapper {
  width: 40%;
  text-align: left;
  padding: 5px;
  color: grey;
  text-decoration:line-through;
}
</style>