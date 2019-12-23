<template>
  <el-container class="container">
    <el-header style="background: aqua">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="aqua"
        @select="handleSelect">
        <el-menu-item index="1">文章中心</el-menu-item>
        <el-menu-item index="2">消息中心</el-menu-item>
        <el-menu-item index="3">订单管理</el-menu-item>
      </el-menu>
    </el-header>
    <el-main style="">
      <el-row justify="end">
        <el-col :span="4" :push="20">
          <router-link :to="{ name: 'article-create' }">
            <el-button>新建</el-button>
          </router-link>
        </el-col>
      </el-row>
      <el-table
        :data="articles"
        stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="#"
          width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="280">
          <template slot-scope="scope">
            <router-link :to="{ name: 'acticle-Show', params: { id: scope.row.id } }">{{scope.row.title}}</router-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述">
        </el-table-column>
        <el-table-column
          width="180"
          label="操作">
          <template slot-scope="scope">
            <el-button type="danger" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import http from 'axios'

export default {
  data() {
    return {
      isLoading: false,
      articles: [],
      //input输入框
      input: '',
      activeIndex: '1',
    }
  },
  created() {
    this.getArticle()
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    async getArticle() {
      // const {id} = this.$route.params
      try {
        this.isLoading = true
        const res = await http.get(`http://localhost:3002/articles`)
        this.articles = res.data
      } catch (e) {
        this.$notify.error({
          title: '错误',
          message: '网络错误！！！'
        });
      } finally {
        this.isLoading = false
      }
    },
    del(row) {
      const { id } = row

      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        // const {id} = this.$route.params
        try {
          await http.delete(`http://localhost:3002/articles/${id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });

          this.getArticle()
          /*this.$router.push({
            name: 'about'
          })*/
        } catch (e) {
          console.log(e)
          this.$notify.error({
            title: '错误',
            message: '网络错误！！！'
          });
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style lang="scss" scoped >
.container {
  height: 100vh;
}
</style>
