<template>
  <div class="container">
    <el-form :model="articleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="articleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="articleForm.description"></el-input>
      </el-form-item>
      <el-form-item label="详情" prop="detail">
        <quill-editor class="my-editor" v-model="articleForm.detail"></quill-editor>
        <!--<el-input type="textarea" v-model="articleForm.detail"></el-input>-->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: "ArticleCreate.vue",
  components: {
    quillEditor
  },
  data() {
    return {
      articleForm: {
        title: '',
        description: '',
        detail: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 6, max: 30, message: '长度在 6 到 30 个字符', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入描述', trigger: 'blur' }
        ],
        detail: [
          { required: true, message: '请输入详情', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.articleForm)
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 1000px;
  margin: 0 auto;
}
.my-editor {
  .ql-container.ql-snow {
    height: 300px;
  }
}
</style>