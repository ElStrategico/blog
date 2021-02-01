<template>
  <div class="row post">
    <div class="col-lg-12">
      <h3>{{title}}</h3>
      <p>{{body}}</p>
      <a class="btn btn-success">Подробнее</a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PostItem',
    props: {
        title: String,
        body: String
    }
}
</script>

<style scope>
.post {
    background: #f2f2f2;
    margin: 10px;
    padding: 10px;
}
</style>