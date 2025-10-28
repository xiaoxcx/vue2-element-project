# Vue2 + Element UI 项目

这是一个基于 Vue2、Element UI 和 Vue Router 的前端项目，使用 Webpack 作为构建工具。

## 技术栈

- **Vue 2.6.14** - 渐进式 JavaScript 框架
- **Element UI 2.15.14** - 基于 Vue 2.0 的桌面端组件库
- **Vue Router 3.5.4** - Vue.js 官方的路由管理器
- **Webpack 5.88.0** - 模块打包工具
- **Babel** - JavaScript 编译器

## 项目结构

```
vue2-element-project/
├── public/
│   └── index.html          # HTML 模板
├── src/
│   ├── views/              # 页面组件
│   │   ├── Home.vue        # 首页
│   │   ├── About.vue       # 关于页面
│   │   └── Contact.vue     # 联系页面
│   ├── router/
│   │   └── index.js        # 路由配置
│   ├── App.vue             # 根组件
│   └── main.js             # 入口文件
├── webpack.config.js        # Webpack 配置
├── .babelrc                # Babel 配置
├── package.json            # 项目依赖
└── README.md               # 项目说明
```

## 安装依赖

```bash
npm install
```

## 开发环境运行

```bash
npm run dev
# 或
npm run serve
```

项目将在 http://localhost:8080 启动

## 构建生产版本

```bash
npm run build
```

构建后的文件将生成在 `dist/` 目录中。

## 功能特性

- ✅ Vue2 框架支持
- ✅ Element UI 组件库集成
- ✅ Vue Router 路由管理
- ✅ Webpack 热重载开发服务器
- ✅ Babel ES6+ 语法支持
- ✅ CSS 样式加载器
- ✅ 响应式布局
- ✅ 表单验证
- ✅ 导航菜单

## 页面说明

### 首页 (/)
- 项目介绍和欢迎信息
- 技术栈展示卡片

### 关于页面 (/about)
- 项目技术栈详细信息
- 项目特性介绍

### 联系页面 (/contact)
- 联系表单（包含验证）
- 联系信息展示

## 自定义配置

### 修改端口
在 `webpack.config.js` 中修改 `devServer.port`：

```javascript
devServer: {
  port: 3000,  // 修改为需要的端口
  // ...
}
```

### 添加新页面
1. 在 `src/views/` 目录下创建新的 Vue 组件
2. 在 `src/router/index.js` 中添加路由配置
3. 在 `src/App.vue` 的导航菜单中添加对应链接

## 注意事项

- 确保 Node.js 版本 >= 12.0.0
- 项目使用 npm 作为包管理器
- 开发时支持热重载，修改代码会自动刷新页面

## CI/CD 状态

[![CI/CD Pipeline](https://github.com/xiaoxcx/vue2-element-project/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/xiaoxcx/vue2-element-project/actions)

## GitHub Pages

项目已配置自动部署到 GitHub Pages：
- 访问地址：https://xiaoxcx.github.io/vue2-element-project/
- 自动部署：每次推送到 main 分支时自动更新