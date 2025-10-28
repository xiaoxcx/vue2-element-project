const path = require('path');

module.exports = {
  // GitHub Pages部署配置
  publicPath: process.env.NODE_ENV === 'production' ? '/vue2-element-project/' : '/',
  
  // 开发服务器配置
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    headers: {
      'Permissions-Policy': 'usb=(self)'
    }
  },
  
  // 路径别名配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  
  // 生产环境配置
  productionSourceMap: false,
  
  // CSS 配置
  css: {
    extract: false, // 开发环境不提取CSS
    sourceMap: false
  },
  
  // 链式配置（高级配置）
  chainWebpack: config => {
    // HTML模板配置
    config.plugin('html').tap(args => {
      args[0].template = './public/index.html';
      return args;
    });
    
    // 添加安全策略到HTML头部
    config.plugin('html').tap(args => {
      args[0].meta = {
        'http-equiv': 'Permissions-Policy',
        content: 'usb=(self)'
      };
      return args;
    });
    
    // 开发环境配置
    if (process.env.NODE_ENV === 'development') {
      config.mode('development');
    }
    
    // 生产环境配置
    if (process.env.NODE_ENV === 'production') {
      config.mode('production');
      config.optimization.minimize(true);
    }
  }
};