<template>
    <div class="list-wrapper">
        <h3>New ToDo Title</h3>
        <input class="text-wrapper" v-model="title" placeholder="Title of task...">
        <br><br>
        <h3>New ToDo Description</h3>
        <textarea class="text-wrapper" rows="5" v-model="description" placeholder="Description of task...">
        </textarea>
        <div class="button button-edit" v-on:click="submit_todo">Save ToDo</div>
        <br><br>
        <span class="msg msg-bad" v-if="!valid_title && fix_title">You must enter a title!</span><br>
        <span class="msg msg-bad" v-if="!valid_description && fix_description">You must enter a description!</span><br>
        <span class="msg msg-bad" v-if="errors">{{errors_msg}}</span>
    </div>
</template>

<script>
import { add_todo } from '@/database'

export default {
    name: "New",
    props: {
        nxtID: Number,
    },
    data() {
        return {
            title: '',
            description: '',
            valid_title: true,
            valid_description: true,
            errors: false,
            errors_msg: '',
        }
    },
    methods: {
        submit_todo() {
            if (this.nxtID == undefined) {
                this.errors = true;
                this.errors_msg = "ID is undefined, return to the home page!"
                return;
            }   
            this.valid_title = this.title != "";
            this.valid_description = this.description != "";
            if (!this.valid_title || !this.valid_description) return;
            add_todo(this.title, this.description);
            this.$router.push({
                name: 'Home',
            });
        }
    },
    computed: {
        fix_title() {
            if (!this.valid_title && this.title == "") {
                return true;
            }
            return false;
        },
        fix_description() {
            if (!this.valid_description && this.description == "") {
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