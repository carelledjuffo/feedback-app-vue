<template>
  <form class="form-form">
    <div class="form-group">
      <label for="commentTitle">Title</label>
      <input type="text" class="form-control" id="commentTitle" v-model="title">
    </div>
    <div class="form-group">
      <label for="commentCategory">Category</label>
      <input type="text" class="form-control" id="commentCategory" v-model="category">
    </div>
    <div class="form-group">
      <label for="CommentDescription">Description</label>
      <textarea class="form-control" id="CommentDescription" rows="3" v-model="description"></textarea>
    </div>
    <div class="form-group btn-action">
      <button class="btn btn-secondary" @click="saveComment($event)">Submit</button>
      <button class="btn btn-danger delete-btn">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddComment",
  data() {
    return {
      title: '',
      category:'',
      description:''
    }
  },
  methods: {
    saveComment(event) {
      event.preventDefault();
      let comment = {
        title: this.title,
        category: this.category,
        description: this.description,
        upvote: 0
      }
      this.$emit('newComment',comment);
    },
  }
}
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
</style>