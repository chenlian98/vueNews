<template>
  <div class="container">
    <div class="about">
      <header>
        <div class="box">
          <li>
            <router-link to="">处理中心</router-link>
          </li>
          <li>
            <router-link to="">我的工作台</router-link>
          </li>
          <li>
            <router-link to="">关于我们</router-link>
          </li>
        </div>
      </header>
      <div class="search">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <el-table
        :data="article"
        style="width: 100%" v-loading="isLoading">
        <el-table-column
          prop="date"
          label="日期"
          width="180"
          v-model="article.number">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="180"
          v-model="article.title">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          v-model="article.description">
        </el-table-column>
        <el-table-column
          prop=""
          label="操作">
          <el-button  type="primary" icon="el-icon-edit"  >编辑</el-button>
          <el-button  type="danger" icon="el-icon-delete" @click="del" >删除</el-button>
        </el-table-column>
        el-button>
      </el-table>
    </div>
  </div>
</template>

<script>
  import http from 'axios'
  export default {
    data() {
      return {
        isLoading: false,
        article: [],
        //input输入框
        input: ''
      }
    },
    created() {
      this.getArticle()
    },
    methods:{
      async getArticle() {
        // const {id} = this.$route.params
        try {
          this.isLoading = true
          const res = await http.get(`http://localhost:3002/articles`)
          console.log(this.article.number)
          this.article = res.data
        } catch (e) {
          this.$notify.error({
            title: '错误',
            message: '网络错误！！！'
          });
        } finally {
          this.isLoading = false
        }
      },
      del() {
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          // const {id} = this.$route.params
          try {
            await http.delete(`http://localhost:3002/articles/5`)
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.$router.push({
              name: 'about'
            })
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

<style lang="scss"  scoped >
  ul,li {
    list-style: none;
  }
  /deep/ .el-table .el-table__body-wrapper{
    height: 300px ;
    overflow-y: auto ;
  }
  .container {
    .about {
      width: 80%;
      margin: 0 auto;
      header {
        height: 50px;
        background: gray;
        margin-bottom: 40px;
        .box {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content:center;

          li{
            flex: 1;
            height: 100%;
          }
          li:hover,a:hover {
            opacity: 0.9;
            background: orange;
            color: black;
          }
          a{
            display: block;
            line-height: 50px;
            color: #fff;
            text-decoration: none;
            flex: 1;
            text-align: center;
          }
        }

      }

      .search {
        display: flex;
        width: 40%;
        button[type="button"]{
          margin-left: 5px;
        }
      }
    }
  }

</style>
