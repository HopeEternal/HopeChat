<template>
  <div id="app">
    <router-view/>
    <footer><a href="https://www.vecteezy.com/free-vector/chat">Chat Vectors by Vecteezy</a></footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
footer {
  font-size: 12px;  
  font-style: italic;
}
</style>
