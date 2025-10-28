<template>
  <div class="about">
    <el-card class="box-card">
      <div slot="header">
        <span>关于我们</span>
      </div>
      <div>
        <h2>项目信息</h2>
        <el-descriptions title="技术栈" :column="2" border>
          <el-descriptions-item label="框架">Vue 2.6.14</el-descriptions-item>
          <el-descriptions-item label="UI组件库">Element UI 2.15.14</el-descriptions-item>
          <el-descriptions-item label="路由">Vue Router 3.5.4</el-descriptions-item>
          <el-descriptions-item label="构建工具">Webpack 5.88.0</el-descriptions-item>
          <el-descriptions-item label="开发服务器">Webpack Dev Server</el-descriptions-item>
          <el-descriptions-item label="包管理器">npm</el-descriptions-item>
        </el-descriptions>
        
        <el-divider></el-divider>
        
        <h3>项目特性</h3>
        <el-row :gutter="20">
          <el-col :span="12">
            <ul>
              <li>基于 Vue2 的现代化前端架构</li>
              <li>集成 Element UI 组件库</li>
              <li>支持 Vue Router 路由管理</li>
              <li>使用 Webpack 进行模块打包</li>
            </ul>
          </el-col>
          <el-col :span="12">
            <ul>
              <li>热重载开发服务器</li>
              <li>Babel ES6+ 语法支持</li>
              <li>CSS 样式加载器</li>
              <li>生产环境构建优化</li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
}

.box-card {
  margin-top: 20px;
}

.el-descriptions {
  margin-top: 20px;
}

ul {
  line-height: 2;
}
</style>