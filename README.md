# 通用后台管理系统

基于 React 19 的现代化后台管理系统模板，具有完整的权限控制、数据可视化、用户管理等功能模块。

## 功能特性

- 🔐 **权限控制**：基于 Token 的路由守卫机制
- 📊 **数据可视化**：集成 ECharts 图表组件
- 📱 **响应式布局**：Ant Design 6 组件库
- 📦 **状态管理**：Redux Toolkit 集中状态管理
- 🔄 **Mock数据**：完整的模拟数据支持
- 📑 **标签页管理**：浏览器风格多标签导航
- ✨ **侧边栏折叠**：可折叠侧边导航菜单

## 技术栈

| 分类 | 技术 | 版本 |
|------|------|------|
| 前端框架 | React | ^19.2.7 |
| 状态管理 | Redux Toolkit | ^2.12.0 |
| 路由管理 | React Router DOM | 6.22.2 |
| UI组件库 | Ant Design | ^6.4.4 |
| 图表库 | ECharts | ^6.1.0 |
| 网络请求 | Axios | ^1.18.0 |
| Mock数据 | Mock.js | ^1.1.0 |
| 日期处理 | Dayjs | ^1.11.21 |
| 构建工具 | Create React App | 5.0.1 |

## 项目结构

```
src/
├── api/                    # 接口管理
│   ├── axios.js            # Axios二次封装
│   ├── index.js            # API接口统一导出
│   ├── mock.js             # Mock拦截配置
│   └── mockServerData/     # Mock数据
├── components/             # 公共组件
│   ├── commonAside/        # 侧边栏组件
│   ├── commonHeader/       # 顶部导航
│   ├── commonTag/          # 标签页组件
│   └── Echarts/            # ECharts图表封装
├── config/                 # 配置文件
│   └── index.js            # 菜单配置
├── pages/                  # 页面组件
│   ├── login/              # 登录页
│   ├── main.js             # 主布局页面
│   ├── home/               # 首页（数据统计）
│   ├── mall/               # 商品管理页
│   ├── user/               # 用户管理页
│   └── other/              # 其他页面
├── router/                 # 路由配置
│   ├── index.js            # 路由表
│   └── routerAuth.js       # 路由守卫
├── store/                  # Redux状态管理
│   ├── index.js            # Store配置
│   └── reducers/           # 切片
└── assets/                 # 静态资源
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

访问 http://localhost:3000 查看应用。

### 构建生产版本

```bash
npm run build
```

### 运行测试

```bash
npm test
```

## 页面功能

| 页面 | 路径 | 功能描述 |
|------|------|----------|
| 登录页 | `/login` | 账号密码登录，获取Token |
| 首页 | `/home` | 数据统计仪表盘，图表展示 |
| 商品管理 | `/mall` | 商品列表管理（预留页面） |
| 用户管理 | `/user` | 用户CRUD操作（搜索、新增、编辑、删除） |
| 页面1 | `/other/pageOne` | 预留页面 |
| 页面2 | `/other/pageTwo` | 预留页面 |

## 核心模块

### 路由权限控制

通过路由守卫组件检查 localStorage 中的 Token，未登录用户自动重定向到登录页。

### 状态管理

使用 Redux Toolkit 管理全局状态，包括侧边栏折叠状态、标签页列表和当前选中菜单。

### Axios封装

封装 HttpRequest 类，统一配置基础URL和拦截器，便于后续扩展。

### Mock数据

使用 Mock.js 拦截API请求，支持完整的CRUD操作模拟，便于前端开发测试。

### ECharts图表

封装通用图表组件，支持折线图、柱状图、饼图等多种图表类型。

## 开发说明

### 添加新页面

1. 在 `src/pages/` 目录下创建新页面组件
2. 在 `src/router/index.js` 中配置路由
3. 在 `src/config/index.js` 中添加菜单配置

### 添加新接口

1. 在 `src/api/index.js` 中定义接口方法
2. 在 `src/api/mockServerData/` 中添加 Mock 数据
3. 在 `src/api/mock.js` 中配置拦截规则

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
