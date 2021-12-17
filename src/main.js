import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import { createStore } from "vuex";

const store = createStore({
    state: {
        feedbackList:  [
            {
                id: 0,
                name: 'Kevin',
                title: "Question to the teacher",
                category: "Teacher",
                description:
                    "Why are all teachers in this school alway very severe with students?",
                upvote: 6,
                commentList: []
            },
            {
                id: 1,
                name: 'Myriam',
                title: "Maths class today",
                category: "Student",
                description:
                    "I just never understood a bit of what the teacher was saying today",
                upvote: 10,
                commentList: [
                    {
                        id: 1,
                        name: 'Toni',
                        description: ' Me too you'
                    },
                    {
                        id: 2,
                        name: 'Dori',
                        description: 'Yep same here'
                    },
                    {
                        id: 3,
                        name: 'Sam',
                        description: ' I agree with you'
                    }
                ]
            },
            {
                id: 2,
                name: 'Mimi',
                title: "This is for everyone",
                category: "Everyone",
                description:
                    "Everyone in this place doesn't care so what should I do?",
                upvote: 4,
                commentList: [
                    {
                        id: 1,
                        name: 'Kevin',
                        description: ' I agree with you'
                    },

                ]
            },
            {
                id: 3,
                name: 'Ornel',
                title: "Friends",
                category: "Student",
                description:
                    "Why are all teachers in this school alway very severe with us?",
                upvote: 1,
                commentList: [
                    {
                        id: 1,
                        name: 'Myriam',
                        description: ' I  don\'t agree with you'
                    },
                    {
                        id: 2,
                        name: 'Toyi',
                        description: ' I agree with you'
                    },{
                        id: 3,
                        name: 'Hide',
                        description: ' I agree with you'
                    },
                    {
                        id: 4,
                        name: 'Men',
                        description: ' I agree with you'
                    },{
                        id: 5,
                        name: 'Karen',
                        description: ' seems quit right for me'
                    }
                ]
            },
        ],
        categoryList: [
            'Student','Teacher','Everyone','Admin'
        ]
    },
    mutations: {
        addFeedback(state, feedback) {
            state.feedbackList.push(feedback);
        },
        addComment(state, comment) {
            state.feedbackList[comment.id].commentList.push(comment);
        },
        editFeedback(state, editData) {
            state.feedbackList[editData.id].title = editData.title;
            state.feedbackList[editData.id].category = editData.category;
            state.feedbackList[editData.id].description = editData.description;
            console.log(state.feedbackList);
        },
        deleteFeedback(state, id) {
            state.feedbackList.splice(id, 1);
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
})
createApp(App).use(router).use(store).mount("#app");
