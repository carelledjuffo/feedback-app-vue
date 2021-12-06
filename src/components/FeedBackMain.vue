<template>
  <div class="main-content">
    <AddComment v-on:newComment="updateCommentList($event)" class="add-comment"></AddComment>
    <div class="comment-main-display">
      <div class="comment-header">
        <p class="comment-amount">{{commentList.length}} Suggestions</p>
        <button class="btn btn-primary add-btn">Add comment</button>
      </div>
      <div v-for="(comment, index) in commentList" v-bind:key="index" class="single-comment-display">
        <CommentDisplay :comment="comment" ></CommentDisplay>
      </div>
    </div>
  </div>
</template>

<script>
import AddComment from "./AddComment.vue";
import CommentDisplay from "./CommentDisplay";

export default {
  name: "App",
  components: {
    AddComment,
    CommentDisplay,
  },
  data() {
    return {
      commentList: [
        {
          title: 'Question to the teacher',
          category: 'Teacher',
          description: 'Why are all teachers in this school alway very severe with students?',
          upvote: 6
        },
        {
          title: 'Question students',
          category: 'Student',
          description: 'I don\'t unterstand the last lesson on history of computer science',
          upvote: 10
        }
      ],
    };
  },
  methods: {
    updateCommentList(comment) {
      this.commentList.push(comment);
    },
  },
};
</script>

<style>
#app {

}
.comment-header {
  height: 80px;
  min-width: 100%;
  background: #373F68;
  color: white;
  border-radius: 0.5em;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}
.comment-main-display {
  display: flex;
  flex-flow: column;
}
.main-content {
  display: flex;
  justify-content: center;
  flex-flow: row;
  margin: 2em 2em 2em 2em;
}
.comment-main-display {
  flex: 0 0 64%;
}
.add-btn {
  margin-top: 1em;
  margin-bottom: 1em;
}
.comment-amount {
  font-weight:630 ;
}
.add-comment {
  flex: 0 0 30%;
  margin-right: 6%;
}
.comment-header > p {
  align-self: center;
  font-size: 1em;
}

@media only screen and (min-width: 1000px) {
  .main-content{
    margin: 2em 30em 2em 30em;
  }
}
</style>
