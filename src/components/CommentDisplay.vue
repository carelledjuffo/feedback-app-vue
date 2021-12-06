<template>
<div>
  <div class="comment-display" style="width: 200px;">
    <div class="comment-upvote">
      <button class="btn upvote-btn" @click="updateVotes">{{upvote}}</button>
    </div>
    <div class="comment-body">
      <div class="comment-title">
         <p>{{title}}</p>
      </div>
      <div class="comment-description">
        <p>{{description}}</p>
      </div>
      <div>
        <button class="comment-category"><span >{{category}}</span></button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {},
  },
  data() {
    return {
      title: this.comment.title,
      category: this.comment.category,
      description: this.comment.description,
      upvote: this.comment.upvote
    }
  },
  methods: {
    updateVotes() {
      this.upvote++;
    }
  }

}
</script>

<style scoped>
.comment-display {
  display: flex;
  flex-flow: row;
  background: white;
  margin-top: 1.5em;
  border-radius: 1em;
  min-width: 100%;
}
.comment-upvote {
  flex: 0 0 10%;
  margin-right: 2%;
  margin-left: 2%;
  align-self: center;
}
.upvote-btn {
  background: #F2F4FF;
  color: #3A4374;
  border-radius: 0.4em;
}
.comment-body {
  flex: 0 0 90%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.comment-category {
  background: #F2F4FF;
  color: #506AE7;
  border-radius: 0.3em;
  border: none;
  margin-bottom: 0.3em;
}
.comment-title {
  font-size: 1.5em;
  margin-top: 0.5em;
  color: #3A4374;
  font-weight: 630;
}
</style>