<template>
  <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Delete</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>

        </div>
        <div class="modal-body">
          <h4>Delete this feedback?</h4>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-close" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger" @click="deleteFeedback" data-dismiss="modal">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteFeedback",
  props: {
    id: Number,
  },
  methods: {
    deleteFeedback: function () {
      console.log(this.id)
      this.$store.commit('deleteFeedback', this.id);
    }
  }
}
</script>

<style scoped>
.btn-close {
  background: #ad1fea;
  color: white;
}
</style>