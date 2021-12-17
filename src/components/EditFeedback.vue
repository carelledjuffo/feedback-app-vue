<template>
  <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Feedback</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>

        </div>
        <div class="modal-body">
          <form class="form-form">
            <div class="form-group">
              <label for="commentTitle">Title</label>
              <input
                  type="text"
                  class="form-control"
                  id="commentTitle"
                  v-model="title"
              />
            </div>
            <div class="form-group">
              <label for="commentCategory">Category</label>
              <input
                  type="text"
                  class="form-control"
                  id="commentCategory"
                  v-model="category"
              />
            </div>
            <div class="form-group">
              <label for="CommentDescription">Description</label>
              <textarea
                  class="form-control"
                  id="CommentDescription"
                  rows="3"
                  v-model="description"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger delete-btn" data-dismiss="modal" >Close</button>
          <button type="button" class="btn btn-submit" @click="saveChanges" data-dismiss="modal">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditFeedback",
  props: {
    feedback: {}
  },
  data() {
    return {
      title: '',
      category: '',
      description: '',
    };
  },
  watch: {
    feedback: function (newVal) {
         this.title = newVal.title;
          this.category = newVal.category;
          this.description = newVal.description
    }
  },
  methods: {
    saveChanges: function () {
      let editData = {
        id: this.feedback.id,
        title: this.title,
        category: this.category,
        description: this.description

      }
      this.$store.commit('editFeedback', editData);
    },
    clear: function () {
      this.title = '';
      this.category = '';
      this.description = '';
    }
  }

}
</script>

<style scoped>
.btn-submit {
  background: #3a4374;
  color: #f2f4ff;
}
</style>