import router from "@/router"

export default {
    state: {
        countPosts: 10,
        query: null
    },
    getters: {
        countPosts(state) {
            return router.currentRoute.query.limit ? router.currentRoute.query.limit : state.countPosts;
        },
        query(state) {
            return state.query;
        }
    },
    mutations: {
        changeCountPosts(state, countPosts) {
            state.countPosts = countPosts;
        }
    }
}