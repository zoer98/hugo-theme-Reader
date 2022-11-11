[English document](./README.md) | [中文文档](./README_zh.md)

<p align="center">
  <a href="https://github.com/zburu/hugo-theme-Reader/">
    <img src="images/logo.png" alt="Logo" width="300">
  </a>
  <p align="center">
   一款简单的、易于阅读的 hugo 主题，集成了多种功能。
    <br />
    <a href="https://github.com/zburu/hugo-theme-Reader"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="https://hugo-theme-reader.vercel.app/" target="_blank">查看Demo</a>
    ·
    <a href="https://github.com/zburu/hugo-theme-Reader/issues">报告Bug</a>
    ·
    <a href="https://github.com/zburu/hugo-theme-Reader/issues">提出新特性</a>
  </p>

</p>

![hugo-theme-Reader](https://count.zburu.com/get/?name=hugo-theme-Reader)

本篇 README.md 面向主题使用者和开发者，欢迎使用和提交 pr.

>本主题是在 [yinyang](https://github.com/joway/hugo-theme-yinyang) 的基础上进行二次开发，增加了新的功能以及删除多余的功能，目的是精简代码，提高网页可读性等。

<details>
<summary>截图展示</summary>
<img src="https://cdn.staticaly.com/gh/zburu/pic-cdn@main/20221110/image.1b5c792ko41s.jpg">
</details>
 
### 目录

- [目录](#目录)
- [上手指南](#上手指南)
- [文件目录说明](#文件目录说明)
- [配置](#配置)
- [贡献者](#贡献者)
  - [如何参与本项目](#如何参与本项目)
- [作者](#作者)
- [版权说明](#版权说明)
- [参考](#参考)

### 上手指南

```shell
git clone git@github.com:zburu/hugo-theme-Reader.git themes/Reader
```

修改 `config.toml`:

```
theme = "Reader"
```


### 文件目录说明
eg:

```shell
+---archetypes
+---exampleSite
|   +---content
|   +---layouts
|   \---static
+---layouts
|   +---partials
|   +---shortcodes
|   \---_default
\---static
    +---css
    +---fonts
    +---images
    +---js
    \---search
```

### 配置 

第三方评论使用 [giscus](https://giscus.app)，配置时请修改 `/layouts/partials/giscus.html` 文件。

```toml
baseURL = "https://zburu.com"
languageCode = "en-us"
title = "子舒的博客"
theme = "Reader"
paginate = 15

[outputs]
  home = ["HTML", "RSS", "JSON"]

[params]
  title = "子舒的博客"
  Description = "七碗受至味，一壶得真趣，空持百千偈，不如吃茶去。"
  favicon = "https://cdn.zburu.com/favicon.ico"
  buildDate = "2020-06-14"
  beian = "浙ICP备2022002453号-2"

[author]
  name = "子舒"
  homepage = "/"

[permalinks]
  posts = "/archives/:slug.html"

[[params.socials]]
name = "归档"
link = "/posts"

[[params.socials]]
name = "留言"
link = "/message"

[[params.socials]]
name = "关于"
link = "/about"

[[params.socials]]
name = "搜索"
link = "/search"

[[params.socials]]
name = "实验室"
link = "/lab"
```


### 贡献者

请阅读**CONTRIBUTING.md** 查阅为该项目做出贡献的开发者。

#### 如何参与本项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是**非常感谢**的。

fork 仓库，本地开发完成提交仓库，在提交 pr 时注明修改的功能等，保证在没有 bug 的前提下提交，我会进行 review code.


### 作者

子舒（shuxhan@163.com）

 *您也可以在贡献者名单中参看所有参与该项目的开发者。*

### 版权说明

该项目签署了MIT 授权许可，详情请参阅 [LICENSE](https://github.com/zburu/hugo-theme-Reader/blob/main/LICENSE)

### 参考

- [https://github.com/joway/hugo-theme-yinyang](https://github.com/joway/hugo-theme-yinyang)



