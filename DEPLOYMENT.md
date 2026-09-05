# 运行、发布与维护 / Run, publish and maintain

## 本地查看 / Local preview

在仓库根目录执行 / From the repository root:

```bash
python -m http.server 8000 --directory docs
```

打开 `http://localhost:8000`；英文入口为 `http://localhost:8000/index.en.html`。HTML、CSS 和 JavaScript 均在本地，页面不需要外部 API、字体、分析脚本或账号密钥。

Use the URLs above for Chinese and English. All page assets are local; the page needs no external API, fonts, analytics or account keys.

## GitHub Pages

在仓库 **Settings → Pages → Build and deployment** 中，Source 选择 **Deploy from a branch**，Branch 选择 **main**，目录选择 **/docs**，保存。以该页面返回的网址和构建状态为准。

In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/docs**, then save. Use the URL and build status reported by GitHub.

本次使用的 GitHub 连接不提供 Pages 设置写入操作；源代码已提交不等于托管已开启。不要仅根据预期网址对外宣称已上线。

The connection used for this update does not expose a Pages-settings write action. Committed source does not itself enable hosting. Do not present an expected URL as a verified deployment.

## 内容更新 / Content maintenance

`docs/content.js` 是项目和 Skill 事实的单一数据来源。修改后执行：
`docs/content.js` is the single source for project and Skill facts. After an edit, run:

```bash
python tools/build_docs.py
python tools/build_docs.py --check
```

此命令同步中英文 README、Skill 文档、案例说明和无脚本 HTML。界面文案与交互位于 `docs/app.js`，样式位于 `docs/styles.css`。

This synchronizes bilingual READMEs, Skill documentation, case studies and no-script HTML. Interface copy and behavior live in `docs/app.js`; styling is in `docs/styles.css`.

## 自动检查 / Checks

```bash
python -m unittest discover -s tests -p 'test_*.py' -v
node --test tests/demo.test.cjs
python -m pip install -r requirements-dev.txt
python -m playwright install chromium
python tests/browser_check.py
```

浏览器检查在本地临时服务器运行。已有 Chromium 时，可通过 `CHROMIUM_EXECUTABLE` 指定路径。开发依赖不属于网站运行依赖。

Browser checks use a temporary local server. Set `CHROMIUM_EXECUTABLE` to use an existing Chromium. Development dependencies are not website runtime dependencies.

CI 只测试网页和合成演示，不测试私有生产系统，也不自动改动 Pages 设置。
CI tests the website and synthetic example, not private production systems, and does not change Pages settings.

## 发布前核对 / Before publication

检查最新验收记录、两种语言、窄屏、案例链接和下载内容。避免提交真实财务数据、客户信息、凭据、Cookie 或本地环境文件。项目效益口径以 [EVIDENCE.md](EVIDENCE.md) 为准。

Review the latest verification record, both languages, narrow screens, case links and downloads. Do not commit actual finance data, customer details, credentials, cookies or local environment files. See [EVIDENCE.md](EVIDENCE.md) for claim boundaries.
