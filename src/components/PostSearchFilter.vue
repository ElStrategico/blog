<template>
  <div class="container">
    <form class="search-form">
      <div class="form-group">
        <label for="postsCount">Количество постов - {{ countPosts }}</label>
        <input v-model="countPosts" type="text" class="form-control" id="postsCount" />
      </div>
      <div class="form-group">
        <label for="search">Поиск</label>
        <input type="text" class="form-control" id="search" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PostSearchFilter",
  computed: {
    countPosts: {
      get() {
        return this.$store.state.postSearch.countPosts;
      },
      set(value) {
        this.$store.commit("changeCountPosts", value);
        this.$store.dispatch("fetchPosts");
      },
    },
  }
};
</script>

<style>
.search-form {
  background: #f2f2f2;
  margin: 10px;
  padding: 10px;
}
</style>
