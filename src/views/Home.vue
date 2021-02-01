<template>
  <div class="home">
    <PostSearchFilter />
    <PostsList />
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";
import PostSearchFilter from "@/components/PostSearchFilter.vue";

export default {
  name: 'Home',
  components: {PostsList, PostSearchFilter}
}
</script>
