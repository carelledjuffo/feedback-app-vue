<template>
  <div>
    <div class="fb-display" style="width: 200px">
      <div class="fb-upvote">
        <span class="btn upvote-btn" >
          <span class="arrow-up" @click="upvote++">
           <svg height="7" width="10" xmlns="http://www.w3.org/2000/svg">
             <path xmlns="http://www.w3.org/2000/svg" d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd">
             </path>
           </svg>
           </span>
         <span> {{ upvote }} </span>
          <span class="arrow-down" @click="upvote--">
            <svg height="7" width="10" xmlns="http://www.w3.org/2000/svg">
             <path xmlns="http://www.w3.org/2000/svg" d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd">
             </path>
           </svg>
           </span>
        </span>
      </div>
      <div class="fb-body">
        <div class="fb-title">
          <p>{{ title }}</p>
        </div>
        <div class="fb-description">
          <p>{{ description }}</p>
        </div>
        <div>
          <button class="fb-category">
            <span>{{ category }}</span>
          </button>
        </div>
      </div>
    <!--  <div class="btn-edit">
        <button class="btn btn-edit" data-target="#editModal" data-toggle="modal">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
              </svg>
            </span>
        </button>
      </div> -->
      <div class="btn-comment">
        <button class="btn btn-comment" data-target="#commentModal" data-toggle="modal">
            <span>
              <svg height="16" width="18" xmlns="http://www.w3.org/2000/svg">
                <path
                    xmlns="http://www.w3.org/2000/svg" d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                    fill="#CDD2EE" fill-rule="nonzero">
                </path>
              </svg>
            </span>
          <span class="no-of-comments">{{ feedback.commentList.length }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FeedbackDisplay",
  components: {

  },
  props: {
    feedback: {},
  },
  data() {
    return {
      title: this.feedback.title,
      category: this.feedback.category,
      description: this.feedback.description,
      upvote: this.feedback.upvote,
      noOfComments: this.feedback.commentList.length
    };
  },
  methods: {
    updateVotes() {
      this.upvote++;
    },
  },
};
</script>

<style scoped>
.fb-display {
  display: flex;
  flex-flow: row;
  background: white;
  margin-top: 1.5em;
  border-radius: 1em;
  min-width: 100%;
  min-height: 150px;
}
.fb-upvote {
  flex: 0 0 10%;
  margin-right: 2%;
  margin-left: 2%;
  align-self: center;
}
.upvote-btn {
  color: #3a4374;
  border-radius: 0.4em;
  font-weight: bold;
}
.fb-body {
  flex: 0 0 76%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.fb-category {
  background: #f2f4ff;
  color: #506ae7;
  border-radius: 0.3em;
  border: none;
  margin-bottom: 0.3em;
}
.fb-title {
  font-size: 1.5em;
  margin-top: 0.5em;
  color: #3a4374;
  font-weight: 630;
}
.btn-comment {
  flex: 0 0 8%;
  align-self: center;
}
.btn-edit {
  flex: 0 0 8%;
  align-self: center;
  box-shadow: none;
}
.btn.btn-comment {
  box-shadow: none;
}
.no-of-comments {
  margin-left: 0.3em;
  color: #3a4374;
  font-weight: bold;
}
.upvote-btn {
  display: flex;
  flex-flow: column;
}
</style>
