<template>
  <!-- Modal -->
  <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Comment</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>

        </div>
        <div class="modal-body">
          <div class="others-comment-list">
            <ul v-for="comment in comments" v-bind:key="comment.id">
              <li><span class="others-comment-name">{{comment.name}}: </span> {{comment.description}}</li>
            </ul>
          </div>
          <h5> Add your Comment</h5>
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
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger delete-btn" data-dismiss="modal" @click="clear">Close</button>
          <button type="button" class="btn btn-submit" @click="saveComment">Save</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "Comments",
  components: {

  },
  props: {
   feedback: {}
  },
  data() {
   return {
     name: '',
     description:'',
     comments: []
   }
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
.btn:focus{
 outline: none !important;
}
.btn:focus:not(:focus-visible) {
  outline: none;
}
.btn-submit {
  background: #ad1fea;
  color: white;
}
.others-comment-list {
  margin-bottom: 2em;
}
.others-comment-name {
  font-weight: bold;
}
</style>