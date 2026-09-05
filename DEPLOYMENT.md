# 发布与维护 / Deployment & maintenance

## 中文

### 启用 GitHub Pages

本站是静态 HTML/CSS/JavaScript，不需要付费服务器、API 密钥或构建框架。

打开本仓库的 **Settings → Pages**，在 **Build and deployment** 中设置：

- Source：**Deploy from a branch**
- Branch：**main**
- Folder：**/docs**
- 点击 **Save**

首次构建完成后，以 Pages 设置页显示的实际地址为准。此仓库的预期地址为：

- 中文：`https://dnggxiao.github.io/ai-agent-portfolio/`
- 英文：`https://dnggxiao.github.io/ai-agent-portfolio/index.en.html`

**这两条是启用后的预期地址，不表示当前已经上线。** `docs/.nojekyll` 已包含在仓库中。若出现 404，先确认 Pages 已启用、源目录为 `/docs`、构建已完成，而不是继续修改首页文件。

官方依据：[GitHub Pages 发布源配置](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

### 本地预览

```bash
python -m http.server 8000 --directory docs
```

打开 `http://localhost:8000`。中文入口为 `index.html`，英文入口为 `index.en.html`。页面资源全部在 `docs/` 内，也可在允许本地脚本的浏览器中直接打开 HTML 文件。

### 修改内容

| 文件 | 作用 |
| --- | --- |
| `docs/content.js` | 六个项目、五项 Skill 的中英文内容和来源 |
| `docs/app.js` | 双语界面文案、渲染、筛选、搜索与交互示意 |
| `docs/styles.css` | 配色、排版、响应式、焦点与打印样式 |
| `docs/index.html` / `docs/index.en.html` | 两个语言入口与无脚本替代链接 |
| `README.md` / `README.en.md` | GitHub 中英文首页 |
| `skills/README.md` / `skills/README.en.md` | 每项 Skill 的完整介绍 |

修改项目事实时，同步更新对应的 README 与 Skill 文档。新成果应能关联到真实项目记录；不要把“已交付”改成“生产使用”，除非实际状态已经确认。不要将客户资料、账号、Cookie 或内部文件复制进内容文件。

### 检查

```bash
python -m unittest discover -s tests -v
node --check docs/app.js
node --check docs/content.js
```

发布前手动检查两个语言入口、顶部语言链接、五类项目筛选、Skill 搜索空结果、详情展开、关联项目跳转，以及 320px / 390px / 桌面布局。

本次构建已在 Chromium 的内联测试页面中检查中英文 1440px、390px 和 320px 布局、筛选、搜索及校验状态交互。测试环境限制了实际 URL 导航，因此不把这些结果说成线上访问或跨浏览器兼容测试。上线后仍需验证真实 Pages 地址。

## English

### Publish

This is a static site. No paid server, API key or framework build is required.

In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then **main** and **/docs**, and save. The `.nojekyll` file is included. Wait for the build, then use the address actually reported by Pages.

Expected URLs after enablement are listed above. They are not a claim that hosting is already live. For a 404, check enablement, the `/docs` source and build completion first.

See the [official publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Maintain

Run the local preview and validation commands above. `content.js` holds bilingual project/Skill records; `app.js` holds interface copy and behavior; `styles.css` holds the visual system. Update the Markdown versions when facts change. Never commit production data or credentials.

Check both language entries, navigation targets, project categories, Skill search and empty states, expandable details, related-project links, keyboard focus and narrow layouts.

The build was checked in Chromium using an inline fixture at 1440px, 390px and 320px in both languages. The environment blocked actual URL navigation, so this is not a live deployment or cross-browser test. Verify the real Pages URL after publication.
