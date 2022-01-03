<template>
  <div class="feedback-comment-main">
    <div class="feedback-comment-header">
      <router-link to="/" class="btn btn-return">Home</router-link>
      <div class="btn-edit">
        <button class="btn btn-edit" data-target="#editModal" data-toggle="modal">
        Edit Feedback
        </button>
      </div>
    </div>
    <div class="feedback-feedback-display">
      <FeedbackDisplay :feedback="feedback"></FeedbackDisplay>
    </div>
    <div class="feedback-feedback-comments">
      <div class="no-of-comments">
        <span>{{feedback.commentList.length}} Comments</span>
      </div>
      <div class="feedback-comments" v-for="comment in feedback.commentList" v-bind:key="comment.id">
        <div class="feedback-comment-name">{{comment.name}}</div>
        <div class="feedback-comment-content">{{comment.description}}</div>
        <hr v-show="comment.id < feedback.commentList.length">
      </div>
    </div>
    <div class="feedback-add-comment">
      <h5> Add Comment</h5>
      <form class="form-form">
        <div class="form-group">
          <label for="cTitle">Name</label>
          <input
              type="text"
              class="form-control"
              id="cTitle"
              v-model="name"
          />
        </div>
        <div class="form-group">
          <label for="cDescription">Description</label>
          <textarea
              class="form-control"
              id="cDescription"
              rows="3"
              v-model="description"
          ></textarea>
        </div>
        <button class="btn btn-submit" @click="saveComment">Add Comment</button>
      </form>
    </div>
    <DeleteFeedback :id="feedback.id"></DeleteFeedback>
    <EditFeedback :feedback="feedback"></EditFeedback>
  </div>
</template>

<script>
import FeedbackDisplay from "@/components/FeedbackDisplay";
import DeleteFeedback from "@/components/DeleteFeedback";
import EditFeedback from "@/components/EditFeedback";
export default {
  name: "FeedbackComment",
  components: {
    FeedbackDisplay,
    DeleteFeedback,
    EditFeedback
  },
  props: {

  },
  data() {
    return {
      feedbackId: this.$route.params.id,
      name: '',
      description:'',
      comments: [],
      feedback: {},
    }
  },
  created() {
    this.feedback = {...this.$store.state.feedbackList[this.feedbackId]}
  },
  watch: {
    feedback: function(newVal) {
      this.comments = newVal.commentList;
    }
  },
  methods: {
    saveComment() {
      let comment = {
        id:this.feedback.id,
        name: this.name,
        description: this.description,
      }
      this.$store.commit('addComment', comment);
      this.clear();
    },
    clear() {
      this.name = '',
      this.description = ''
    }
  }
}
</script>

<style scoped>
.feedback-comment-main {
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin-left: 20%;
  margin-right: 20%;
}
.feedback-comment-header {
  display: flex;
  justify-content: space-between;
}
.btn-return::before {
  content: '<';
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-right: 5px;
}
.btn-return {
  background:#3a4374;
  color: white;
  border-radius: 0.5em;
  font-weight: bold;
}
.btn-edit {
  background: #ad1fea;
  color: white;
  border-radius: 0.5em;
  font-weight: bold;
}
.no-of-comments{
  font-weight: bold;
  font-size: 20px;
  color: #3a4374;
}
.feedback-feedback-comments {
  margin-top: 2em;
  background: white;
  border-radius: 0.5em;
}
.no-of-comments {
  margin-left: 3em;
}
.feedback-add-comment {
  margin-top: 2em;
  background: white;
}

.btn, .btn:hover {
  box-shadow: none;
}
hr {
  margin-left: 2em;
  margin-right: 2em;
}
form {
  margin: 2em 2em 2em 3em;
}
.feedback-add-comment > h5 {
  margin: 1em 1em 1em 3em;
  color: #3a4374;
}
.feedback-add-comment {
  border-radius: 0.5em;
}
.btn-submit {
  background: #ad1fea;
  color: white;
}
.feedback-comments {
  margin: 1em 1em 1em 3em;
}
.feedback-comment-name {
  font-weight: bold;
  color: #3a4374;
}

@media only screen and (max-width: 520px) {
  .feedback-comment-main {
    margin-left: 2%;
    margin-right: 2%;
  }

}
@media only screen and (max-width: 1200px) {
  .feedback-comment-main {
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>