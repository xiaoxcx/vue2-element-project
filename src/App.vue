<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">关于</el-menu-item>
          <el-menu-item index="3">联系</el-menu-item>
        </el-menu>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key) {
      const routes = {
        '1': '/',
        '2': '/about',
        '3': '/contact'
      };
      if (routes[key]) {
        this.$router.push(routes[key]);
      }
    }
  },
  mounted() {
    // 设置初始激活菜单项
    const pathToIndex = {
      '/': '1',
      '/vue2-element-project/': '1',
      '/about': '2',
      '/vue2-element-project/about': '2',
      '/contact': '3',
      '/vue2-element-project/contact': '3'
    };
    this.activeIndex = pathToIndex[this.$route.path] || '1';
  },
  watch: {
    $route(to) {
      const pathToIndex = {
        '/': '1',
        '/vue2-element-project/': '1',
        '/about': '2',
        '/vue2-element-project/about': '2',
        '/contact': '3',
        '/vue2-element-project/contact': '3'
      };
      this.activeIndex = pathToIndex[to.path] || '1';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  height: 100vh;
}

.el-header {
  padding: 0;
}

.el-main {
  padding: 20px;
}
</style>