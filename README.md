
---

## 🚀 快速上手

### 方式一：直接运行（本地预览）
1. 克隆或下载本项目到本地。
2. 双击 `index.html` 即可在浏览器中打开使用。

### 方式二：部署到 GitHub Pages
1. 将项目推送到 GitHub 仓库。
2. 进入仓库 `Settings` → `Pages`，选择 `main` 分支作为源。
3. 等待片刻，访问 `https://你的用户名.github.io/仓库名` 即可。

### 方式三：自定义域名（可选）
在仓库 `Settings` → `Pages` 中绑定自己的域名，并添加 CNAME 记录即可。

---

## 🛠️ 自定义指南

你可以轻松修改导航内容：

### 修改网址分类或链接
编辑 `index.html` 中的 `<div class="nav-section">` 区块，按照现有的结构增删或修改 `<a class="site-item">` 链接。

### 更换搜索引擎
- 在 `script.js` 的 `ENGINES` 对象中添加或修改搜索引擎配置（url、queryParam）。
- 在 `index.html` 的 `.search-tabs` 中添加对应的标签（`data-engine` 需与配置键一致）。

### 调整样式
所有样式集中在 `style.css` 中，你可以自由修改配色、字体、间距等，无需担心影响逻辑。

---

## 📄 许可证

本项目采用 **MIT License**，你可以自由使用、修改、分发，包括商业用途。详情请见 [LICENSE](LICENSE) 文件（如未附带，则默认遵循 MIT）。

---

## 🤝 贡献

欢迎提交 Issue 或 Pull Request，让这个导航页变得更好！

---

## 💬 反馈

如果你有任何建议或问题，请通过 GitHub Issues 提出，或发送邮件至 [你的邮箱]。

---

**Enjoy your browsing!** 🚀
