<template>
  <div class="chat container">
    <h2 class="teal-text text-darken-2 center">Welcome to Hope Chat!</h2>
      <div class="card">
        <div class="card-content">
          <ul class="messages" v-chat-scroll>
            <li v-for="message in messages" :key="message.id">
              <span class="teal-text text-darken-3">{{ message.name }}</span>
              <span class="grey-text text-darken-3">{{ message.content }}</span>
              <span class="grey-text time">{{ message.timestamp }}</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <NewMessage :name="name" />
        </div>
      </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage
  },
  data(){
    return {
      messages: []

    }
  },
  created(){
    let ref = db.collection('messages').orderBy('timestamp')
    
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type == 'added') {
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }
      })
    })
  }
}
</script>

<style>
body {
  background-image: url("../assets/Blue_triangulated_background_texture_vector.png")
 
}
.chat h2 {
  font-size: 3.5em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.2em;
}
.chat .time {
  display: block;
  font-size: .8em;
}

.messages{
  max-height: 300px;
  overflow: auto;
}

.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-track {
  background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>