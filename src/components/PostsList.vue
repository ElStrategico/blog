<template>
  <div class="container">
    <div>
      <Loader v-if="loader"/>
    </div>
    <PostItem
      v-for="post in allPosts"
      :key="post.id"
      :title="post.title"
      :body="post.body"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loader from "@/components/Loader.vue";
import PostItem from "@/components/PostItem.vue";

export default {
  name: "PostsList",
  components: { PostItem, Loader },
  computed: mapGetters(["allPosts", "loader"]),
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>
