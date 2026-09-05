# 验收记录 / Verification record

**日期 / Date:** 2026-09-05  
**范围 / Scope:** 公开作品集网页、生成文档、独立合成演示 / Public portfolio, generated documentation and standalone synthetic demonstration.

## 已实际执行 / Executed checks

| 检查 / Check | 结果 / Result |
| --- | --- |
| Python 结构、内容一致性及语法检查 / Structure, consistency and syntax | 10 tests passed |
| Node.js 合成计算与异常校验 / Synthetic calculation and validation | 18 tests passed |
| Chromium 界面与交互 / Interface and interactions | 152 assertions passed |
| 视口与语言组合 / Viewport-language combinations | zh/en × 1440, 1024, 390, 320 px |
| 同步文档 / Generated documents | 19 files checked against the content source |
| 文档内部相对链接 / Relative documentation links | Checked for existing targets |

浏览器：Chromium 144.0.7559.96；Playwright 1.57.0。检查包含项目筛选、Skill 搜索与空状态、两类异常的四种状态组合、真实 JSON 导出内容、重置、深链接展开、语言目标页面、键盘跳转、打印样式恢复项目，以及无 JavaScript 的阅读内容。

Browser: Chromium 144.0.7559.96; Playwright 1.57.0. Checks cover project filters, Skill search and empty state, four exception-state combinations, actual JSON export contents, reset, deep-link reveal, language-target rendering, keyboard skip, print visibility and no-JavaScript fallback content.

## 环境限制 / Environment limitations

当前执行环境阻止浏览器访问本地 HTTP 地址，返回 `ERR_BLOCKED_BY_ADMINISTRATOR`。本次浏览器验收使用测试脚本的显式内存模式，将相同 HTML/CSS/JS 作为测试夹具载入；仅在测试夹具中移除 CSP 和外链加载标签，生产文件没有因此改动。

The execution environment blocked local HTTP browser navigation with `ERR_BLOCKED_BY_ADMINISTRATOR`. Browser QA therefore used the test script's explicit in-memory fixture mode. It loads the same HTML/CSS/JS while removing CSP and external loading tags only from the fixture; production files were not changed for this accommodation.

**因此，这次通过的是渲染与交互测试，不是 HTTP 加载、CSP 执行、跨浏览器或线上 Pages 部署验证。** 自动检查配置在正常 CI 环境默认使用本地 HTTP；其运行结果应以 GitHub Actions 实际记录为准，不从本地结果推定。

**These passes establish rendering and interaction behavior, not HTTP loading, CSP enforcement, cross-browser compatibility or a live Pages deployment.** The CI configuration uses local HTTP by default; its status must be read from actual GitHub Actions results rather than inferred from this run.

## 截图与业务边界 / Screenshots and business scope

预览图来自本次界面的实际 Chromium 渲染，不是企业生产软件截图。合成演示不是四平台私有核算代码。本次没有读取或运行用户本地 Codex 的私有财务项目，也没有核验企业节省工时。

Preview images are actual Chromium renders of this portfolio, not screenshots of private enterprise software. The synthetic example is not the private four-platform calculation engine. This update did not read or run the user's local private Codex project or verify enterprise time savings.

## 复现 / Reproduce

```bash
python tools/build_docs.py --check
python -m unittest discover -s tests -p 'test_*.py' -v
node --test tests/demo.test.cjs
python -m pip install -r requirements-dev.txt
python -m playwright install chromium
python tests/browser_check.py
```

仅在受限测试环境使用 `PORTFOLIO_OFFLINE_QA=1`；已有 Chromium 可设置 `CHROMIUM_EXECUTABLE`。脚本会将实际测试模式、版本和断言写入 `verification/browser-results.json`。

Use `PORTFOLIO_OFFLINE_QA=1` only for a restricted test environment; `CHROMIUM_EXECUTABLE` can select an installed Chromium. The script writes its actual mode, version and assertions to `verification/browser-results.json`.

[返回作品集 / Back to portfolio](../README.md) · [证据口径 / Evidence](../EVIDENCE.md)
