<template>
  <div class="contact">
    <el-card class="box-card">
      <div slot="header">
        <span>联系我们</span>
      </div>
      <div>
        <h2>联系信息</h2>
        
        <el-row :gutter="40">
          <el-col :span="12">
            <el-form :model="form" :rules="rules" ref="contactForm" label-width="100px">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
              </el-form-item>
              
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" placeholder="请输入您的邮箱"></el-input>
              </el-form-item>
              
              <el-form-item label="主题" prop="subject">
                <el-input v-model="form.subject" placeholder="请输入邮件主题"></el-input>
              </el-form-item>
              
              <el-form-item label="内容" prop="content">
                <el-input 
                  type="textarea" 
                  :rows="4" 
                  v-model="form.content" 
                  placeholder="请输入您要咨询的内容">
                </el-input>
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          
          <el-col :span="12">
            <el-card shadow="never">
              <h3>联系方式</h3>
              <p><i class="el-icon-phone"></i> 电话: 400-123-4567</p>
              <p><i class="el-icon-message"></i> 邮箱: contact@example.com</p>
              <p><i class="el-icon-location"></i> 地址: 北京市朝阳区xxx街道</p>
              
              <el-divider></el-divider>
              
              <h3>办公时间</h3>
              <p>周一至周五: 9:00 - 18:00</p>
              <p>周六: 9:00 - 12:00</p>
              <p>周日: 休息</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        content: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        subject: [
          { required: true, message: '请输入主题', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.contactForm.validate((valid) => {
        if (valid) {
          this.$message.success('提交成功！我们会尽快与您联系。');
          this.resetForm();
        } else {
          this.$message.error('请填写完整信息');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.contactForm.resetFields();
    }
  }
}
</script>

<style scoped>
.contact {
  max-width: 1200px;
  margin: 0 auto;
}

.box-card {
  margin-top: 20px;
}

.el-form {
  margin-top: 20px;
}

p {
  margin: 10px 0;
  line-height: 1.6;
}

.el-icon-phone, .el-icon-message, .el-icon-location {
  margin-right: 10px;
  color: #409EFF;
}
</style>