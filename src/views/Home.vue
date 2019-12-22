<template>
  <div class="container">
    <router-link to="about">
      <el-button type="primary">登陆</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input:'',
      }
    },
  }
</script>

<style lang="scss"  scoped >
  .container {
    display: flex;
    width: 50%;
    margin: 50px auto 0;
    .el-input {
        display: block;
    }
  }

</style>
