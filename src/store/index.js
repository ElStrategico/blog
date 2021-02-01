import Vue from 'vue'
import Vuex from 'vuex'
import posts from '@/store/modules/posts.js'
import postSearch from '@/store/modules/posts-search.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { posts, postSearch }
})