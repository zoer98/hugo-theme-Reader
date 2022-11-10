[English document](./README.md) | [中文文档](./README_zh.md)

<p align="center">
  <a href="https://github.com/zburu/hugo-theme-Reader/">
    <img src="images/logo.png" alt="Logo" width="300">
  </a>
  <p align="center">
  A simple, easy-to-read hugo theme with multiple features integrated.
    <br />
    <a href="https://github.com/zburu/hugo-theme-Reader"><strong>Explore the documentation for this project »</strong></a>
    <br />
    <br />
    <a href="https://hugo-theme-reader.vercel.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/zburu/hugo-theme-Reader/issues">report bugs</a>
    ·
    <a href="https://github.com/zburu/hugo-theme-Reader/issues">propose new features</a>
  </p>

</p>

![hugo-theme-Reader](https://count.zburu.com/get/?name=hugo-theme-Reader)

This README.md is for theme users and developers, welcome to use and submit pr.

> This theme is secondary development based on [yinyang](https://github.com/joway/hugo-theme-yinyang), adding new functions and deleting redundant functions, in order to simplify the code and improve Web page readability, etc.

![](https://cdn.staticaly.com/gh/zburu/pic-cdn@main/20221110/image.1b5c792ko41s.jpg)
 
## Table of contents

- [Table of contents](#table-of-contents)
  - [Getting started guide](#getting-started-guide)
  - [file directory description](#file-directory-description)
  - [configure](#configure)
  - [Contributor](#contributor)
    - [How to participate in this project](#how-to-participate-in-this-project)
  - [author](#author)
  - [Copyright statement](#copyright-statement)
  - [refer to](#refer-to)

### Getting started guide

```shell
git clone git@github.com:zburu/hugo-theme-Reader.git themes/Reader
```

Revise `config.toml`:

```
theme = "Reader"
```


### file directory description
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

### configure 

```toml
baseURL = "https://zburu.com"
languageCode = "en-us"
title = "zburu's blog"
theme = "Reader"
paginate = 15

[outputs]
  home = ["HTML", "RSS", "JSON"]

[params]
  title = "zburu's blog"
  Description = ""
  favicon = "https://cdn.zburu.com/favicon.ico"
  buildDate = "2020-06-14"
  beian = ""

[author]
  name = "zburu"
  homepage = "/"

[permalinks]
  posts = "/archives/:slug.html"

[[params.socials]]
name = "posts"
link = "/posts"

[[params.socials]]
name = "message"
link = "/message"

[[params.socials]]
name = "about"
link = "/about"

[[params.socials]]
name = "search"
link = "/search"

[[params.socials]]
name = "lab"
link = "/lab"
```


### Contributor

Please read **CONTRIBUTING.md** to see the developers who contributed to the project.

#### How to participate in this project

Contributing makes the open source community a great place to learn, inspire, and create. Any contribution you make is **very appreciated**.

Fork the warehouse, submit the warehouse after local development, indicate the modified function when submitting the pr, and ensure that it is submitted without bugs, and I will review the code.


### author

zburu（shuxhan@163.com）

*You can also see all the developers participating in the project in the Contributor list. *

### Copyright statement

The project is signed under the MIT License, see [LICENSE](https://github.com/zburu/hugo-theme-Reader/blob/main/LICENSE)

### refer to

- [https://github.com/joway/hugo-theme-yinyang](https://github.com/joway/hugo-theme-yinyang)



