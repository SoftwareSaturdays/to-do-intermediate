<template>
    <div class="list-wrapper">
        <h3>Edit ToDo Title</h3>
        <input class="text-wrapper" v-model="task_e.title" placeholder="Title of task...">
        <br><br>
        <h3>Edit ToDo Description</h3>
        <textarea class="text-wrapper" rows="5" v-model="task_e.description" placeholder="Description of task...">
        </textarea>
        <div class="list-wrapper">
            <div class="button button-edit" v-on:click="save_todo">Save ToDo</div>
            <br><br>
            <span class="msg msg-bad" v-if="!valid_title && fix_title">You must enter a title!</span><br>
            <span class="msg msg-bad" v-if="!valid_description && fix_description">You must enter a description!</span><br>
            <span class="msg msg-bad" v-if="errors">{{errors_msg}}</span>
        </div>
    </div>
</template>

<script>
import { edit_todo, get_todo } from '@/database'

export default {
    name: "Edit",
    data() {
        return {
            id_e: 0,
            task_e: {},
            valid_title: true,
            valid_description: true,
            errors: false,
            errors_msg: '',
        }
    },
    props: {
        id: Number,
        task: Object,
    },
    mounted() {
        if (this.id === undefined) {
            this.$router.replace({
                name: 'Home',
            });
        }
        let task = get_todo(this.id);
        this.id_e = task.id;
        this.task_e = task;
    },
    methods: {
        save_todo() {
            if (this.id_e == undefined) {
                this.errors = true;
                this.errors_msg = "ID is undefined, return to the home page!"
                return;
            }   
            this.valid_title = this.task_e.title != "";
            this.valid_description = this.task_e.description != "";
            if (!this.valid_title || !this.valid_description) return;
            edit_todo(this.id_e, this.task_e.title, this.task_e.description);
            this.$router.push({
                name: 'Home',
            });
        }
    },
    computed: {
        fix_title() {
            if (!this.valid_title && this.task_e.title == "") {
                return true;
            }
            return false;
        },
        fix_description() {
            if (!this.valid_description && this.task_e.description == "") {
                return true;
            }
            return false;
        }
    }
}
</script>

<style scoped>
.list-wrapper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.text-wrapper {
    width: 100%;
}

.msg {
    font-weight: bold;
    font-size: 1.5em;
}

.msg-bad {
    color: rgb(189, 27, 27);
}

.msg-good {
    color: rgb(12, 124, 12)
}

@media only screen and (min-width: 750px) {
  .list-wrapper {
    width: 750px;
    margin: 0 auto;
  }
}
</style>