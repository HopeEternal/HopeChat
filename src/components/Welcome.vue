<template>
  <div class="welcome container center">
    <img src="../assets/logo.png">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text center">Welcome!</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="orange-text text-darken-3">{{ feedback }}</p>
          <button class="btn indigo lighten-1">Enter Chat</button>
        </form>
      </div>
    </div>
    <footer><a href="https://www.vecteezy.com/free-vector/chat">Chat Vectors by Vecteezy</a></footer>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null

  }
  },
  methods: {
    enterChat(){
      if(this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      } else {
        this.feedback = 'You must enter a name to join!'
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 50%;
}
.welcome h2 {
  font-size: 3em;
}
.welcome button{
  margin: 30px auto;
}
footer {
  font-size: 12px;  
  font-style: italic;
}

</style>
