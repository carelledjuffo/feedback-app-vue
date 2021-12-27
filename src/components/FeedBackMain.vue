<template>
  <div class="main-content">
   <!-- <div class="features">
      <div class="features-app-name"></div>
      <div class="features-category">
        <div>
          <button class="single-category">
            <span>UI</span>
          </button>
        </div>
        <div class="single-category"><button>UI</button></div>
        <div class="single-category"><button>UX</button></div>
        <div class="single-category"><button>Enhancement</button></div>
        <div class="single-category"><button>Bug</button></div>
        <div class="single-category"><button>Feature</button></div>
      </div>
      <div class="features-roadmap">kk</div>
    </div> -->
    <div class="comment-main-display">
      <div class="comment-header">
        <p class="comment-amount">{{ sortedList.length }} Suggestions</p>
        <div class="dropdown">
          <button class="btn btn-sort dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{sortingMessage}}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="classify=1">Most Upvotes</a>
            <a class="dropdown-item" @click="classify=2">Least Upvotes</a>
            <a class="dropdown-item" @click="classify=3">Most Comments</a>
            <a class="dropdown-item" @click="classify=4">Least Comments</a>
            <input placeholder="category" class="input-category" @mouseleave="classify=5" v-model="category">
          </div>
        </div>
        <AddFeedback >Add</AddFeedback>
      </div>
      <div
          v-for="feedback in sortedList"
          :key="feedback.id"
          class="single-comment-display"
          @click="setModalData(feedback)"
      >
        <FeedbackDisplay :feedback="feedback"></FeedbackDisplay>
      </div>
      <Comments :feedback="modalData" />
      <DeleteFeedback :id="modalData.id"></DeleteFeedback>
      <EditFeedback :feedback="modalData"></EditFeedback>
    </div>
  </div>
</template>
<script>
import AddFeedback from "./AddFeedback.vue";
import FeedbackDisplay from "./FeedbackDisplay";
import Comments from "@/components/Comments";
import DeleteFeedback from "@/components/DeleteFeedback";
import EditFeedback from "@/components/EditFeedback";

export default {
  name: "App",
  components: {
    DeleteFeedback,
    AddFeedback,
    FeedbackDisplay,
    Comments,
    EditFeedback
  },
  data() {
    return {
      classify: 1,
      modalData: {},
      category: '',
      fbl: this.$store.state.feedbackList
    };
  },
  watch: {
    fbl: function (newVal) {
      console.log(newVal);
    }
  },
  computed: {
    sortingMessage: function () {
       if(this.classify === 1) {
        return 'Most Upvotes'
      }
      if(this.classify === 2) {
        return 'Least Upvotes'
      }
      if(this.classify === 3) {
        return 'Most Comments'
      }if(this.classify === 4) {
        return 'Least Comments'
      }else {
        if(this.category) {
          return this.category;
        } else {
          return '';
        }
      }
    },
    sortedList: function () {
      if(this.classify == 1) {
        return this.sortByVotes('dsc');
      } if(this.classify == 2) {
        return this.sortByVotes('asc');
      }
      if(this.classify == 3) {
        return this.sortByComment('dsc');
      }if(this.classify == 4) {
        return this.sortByComment('asc');
      } else {
        return this.sortByCategory(this.category);
      }
    }
  },
  methods: {
    setModalData(feedback) {
      this.modalData = feedback;
    },
    sortByVotes(sortingMethod) {
      let tempList = [...this.$store.state.feedbackList]
        tempList.sort(function (feedbackA, feedbackB) {
          if(sortingMethod == 'asc') {
            return feedbackA.upvote - feedbackB.upvote ;
          } else {
            return feedbackB.upvote - feedbackA.upvote;
          }
        });
      return tempList;
    },
    sortByComment(sortingMethod) {
      let tempList = [...this.$store.state.feedbackList]
      tempList.sort(function (feedbackA, feedbackB) {
        if(sortingMethod == 'asc') {
          return feedbackA.commentList.length - feedbackB.commentList.length ;
        } else {
          return feedbackB.commentList.length - feedbackA.commentList.length ;
        }
      });
      return tempList;
    },
    sortByCategory(category) {
      let listByCategory = this.sortedList.filter((feedback) => {
        return feedback.category.toLocaleLowerCase() === category.toLocaleLowerCase();
      })
      return  listByCategory;
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
  background: #373f68;
  color: white;
  border-radius: 0.5em;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}
.comment-main-display {
  flex: 0 0 94%;
}
.btn-sort, .btn-sort:hover {
  color: #fff;
  margin-top: 1em;
}
.btn-sort:focus{
  box-shadow: none;
}
.comment-amount {
  font-weight: 630;
}

.comment-header > p {
  font-size: 1em;
  align-self: center;
  margin-top: 7px;
}
.single-comment-display {
  transition: transform .1s ease-in;
}
.single-comment-display:hover {
  transform: scale(1.03);
}
.features {
  margin-bottom: 2em;
  display: flex;
  flex-flow: row;
}
.main-content {
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin-left: 20%;
  margin-right: 20%;
}
.features-app-name, .features-category, .features-roadmap {
  margin-right: 10px;
  min-height: 178px;
  width: 100%;
  border-radius: 10px;
  background: white;
  color:#3a4374;
}
.features-category {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 2em 2em 2em 2em;
}
.single-category {
  background: #f2f4ff;
  color: #4661e6;
  border-radius: 0.5em;
}
.dropdown-toggle::after:active {
  transition: transform 1s ease-in;
  transform: rotateX(180deg);
}
.input-category {
  margin: 1em 1em 1em 1em;
}
.dropdown-item:hover{
  color: #ad1fea;
}
.dropdown-item:active{
  background: #f2f4ff;
}
@media only screen and (max-width: 1200px) {
  .main-content {
    margin-left: 10%;
    margin-right: 10%;
  }
}
@media only screen and (max-width: 520px) {
  .main-content {
    margin-left: 2%;
    margin-right: 2%;
  }
  .comment-header {
    height: 100%;
    margin-bottom: 10%;
  }
}

</style>
