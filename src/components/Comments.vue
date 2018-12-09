<template>
  <section class="comments">
    <form class="comments__form" v-on:submit.prevent="postComment">
      <textarea placeholder="Your comment here" v-model="commentText"></textarea>
      <div class="comments__bar">
        <input type="text" placeholder="Username" v-model="userName">
        <button type="submit">
          <AddIcon />
        </button>
      </div>
    </form>

    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <CommentItem :comment="comment"/>
      </li>
    </ul>
  </section>
</template>

<script>
  import CommentItem from '../components/CommentItem.vue'
  import AddIcon from '../assets/icon-add.svg'
  import { fetchEpisodeComments } from '../api'

  export default {
    components: { CommentItem, AddIcon },
    props: [ 'comments' ],
    data() {
      return {
        commentText: '',
        userName: ''
      }
    },
    methods: {
      postComment() {
        this.$emit('postComment', {commentText: this.commentText, userName: this.userName})
        this.commentText = ''
        this.userName = ''
      }
    }
  }
</script>
