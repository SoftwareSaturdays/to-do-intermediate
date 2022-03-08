<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
      watch: {
      '$route' (to) {
        document.title = to.meta.title || 'ToDo App'
      }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.button {
    border: 1px solid black;
    padding: 7px;
    margin: 5px;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
}

.button-done {
    color: #48b526;
}

.button-done:hover {
    background-color: #48b526;
    color: white;
    border: 1px solid white;
}

.button-edit:hover {
    background-color: #407fc2;
    color: white;
    border: 1px solid white;
}

.button-delete {
    color: #bf2c2c;
}

.button-delete:hover {
    background-color: #bf2c2c;
    color: white;
    border: 1px solid white;
}

.button-add {
    color: #8936b3;
}

.button-add:hover {
    background-color: #8936b3;
    color: white;
    border: 1px solid white;
}
</style>
