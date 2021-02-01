import axios from "axios";

export default {
    state: {
        posts: [],
        loader: false
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
        loader(state) {
            return state.loader;
        }
    },
    actions: {
        async fetchPosts(context) {
            context.commit('setLoader', true);

            let limit = context.rootState.postSearch.countPosts;
            let response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

            context.commit('setPosts', response.data);

            context.commit('setLoader', false);
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoader(state, loader) {
            state.loader = loader;
        }
    }
}