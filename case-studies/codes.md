# 四级包装码关系管理系统

[中文](codes.md) · [English](codes.en.md)

**已交付企业 · 独立开发**

面向非技术用户的 Windows 本地应用：查询、导入、导出、回滚与备份集中在一个工作流。

```text
Pallet -> Carton -> B4 -> Label
```

## 业务问题

业务需要在 Pallet → Carton → B4 → Label 四级包装关系中，从任意层级追溯上下游，且不依赖独立数据库服务。

## 实现方式

使用 Django 与 SQLite 实现双向查询、扫码及手输、CSV/TXT 导入、连续 TXT 批量导入、进度反馈、分类导出、导入历史、最近一次导入回滚和一键备份。以 PyInstaller 打包为 Windows 便携目录。

## 关键取舍

把数据持久化、误导入恢复和非技术用户的启动方式纳入交付，而不是只完成一个查询页面。

## 我的贡献

独立负责需求解释、关系建模、实现、测试、导入导出边界、回滚备份和最终打包。

## 结果与口径

已交付企业；尚无正式报告的后续生产采纳数据，因此不声称已大规模投入生产。

## 公开证据与边界

交付记录 · 私有实现

以上项目事实来自作者提供的项目记录。没有在这次作品集改版中运行私有生产系统；浏览器演示不能作为企业实测证明。

[原项目记录 / 源仓库](https://github.com/dnggxiao/ai-agent-portfolio/blob/main/projects/four-level-code-system/README.md)

[返回作品集](../README.md) · [口径说明](../EVIDENCE.md)
