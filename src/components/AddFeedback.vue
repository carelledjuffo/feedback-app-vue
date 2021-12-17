<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn  add-btn" data-toggle="modal" data-target="#exampleModal">
    Add Feedback
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Feedback</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
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
              <select  class="category-select"  id="commentCategory" aria-label="Default select example" v-model="category">
                <option v-for="item in categoryList " v-bind:key="item">{{ item }}</option>
              </select>
            </div>

            <div class="form-group">
              <label for="commentDescription">Description</label>
              <textarea
                  class="form-control"
                  id="commentDescription"
                  rows="3"
                  v-model="description"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger delete-btn" data-dismiss="modal" @click="clear">Close</button>
          <button type="button" class="btn btn-submit" @click="saveFeedback">Save</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AddFeedback",

  data() {
    return {
      title: "",
      category: "",
      description: "",
      categoryList: this.$store.state.categoryList,
    };
  },
  methods: {
    saveFeedback() {
      event.preventDefault();
      let feedback = {
        title: this.title,
        category: this.category,
        description: this.description,
        upvote: 0,
        commentList: [],
      };
      this.$store.commit('addFeedback', feedback);
      this.clear();
    },
    clear() {
      event.preventDefault();
      this.title = '';
      this.category = '';
      this.description = '';
    }
  },
};
</script>

<style scoped>
.form-group {
  margin-top: 2em;
}
.btn-action {
  display: flex;
  justify-content: center;
}
.delete-btn {
  margin-left: 1em;
}
.btn-submit {
  background: #ad1fea;
  color: white;
}
.add-btn {
  margin-top: 1em;
  margin-bottom: 1em;
  color: white;
  background: #ad1fea;
  font-weight: 40px;
  box-shadow: none;
}
.add-btn:before {
  content: '+ ';
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.add-btn a {
  color: white;
  text-decoration: none;
}
.category-select{
  min-width: 100%;
  height: 40px;
}
.category-select > option:hover {
  background: #ad1fea;
}
.modal {
  color: black;
}
</style>
