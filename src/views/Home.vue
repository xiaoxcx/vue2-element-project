<template>
  <div class="home">
    <div v-if="error" class="error-message">
      <el-alert
        title="设备访问错误"
        :description="error"
        type="error"
        show-icon
        :closable="false">
      </el-alert>
      <el-button type="primary" @click="reloadIframe" style="margin-top: 20px;">
        重新加载
      </el-button>
    </div>
    
    <iframe 
      ref="scrcpyIframe"
      src="http://localhost:5173/panda-web-scrcpy/" 
      width="100%" 
      height="100%"
      allow="usb"
      allowfullscreen
      scrolling="no"
      frameborder="0"
      style="pointer-events: auto;"
      @load="onIframeLoad"
      @error="onIframeError">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      error: ''
    }
  },
  methods: {
    onIframeLoad() {
      console.log('iframe加载成功');
      this.error = '';
    },
    onIframeError() {
      this.error = '无法加载设备控制界面。请确保panda-web-scrcpy服务正在运行在端口5173上。';
    },
    reloadIframe() {
      this.error = '';
      if (this.$refs.scrcpyIframe) {
        this.$refs.scrcpyIframe.src = this.$refs.scrcpyIframe.src;
      }
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  height: 800px;
  position: relative;
}

.error-message {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 90%;
  max-width: 600px;
}

iframe {
  border: none;
  background: transparent;
  pointer-events: auto;
  user-select: auto;
  -webkit-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
}

.box-card {
  margin-top: 20px;
}

.el-card {
  margin-bottom: 20px;
}
</style>