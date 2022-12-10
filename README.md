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
    <a href="https://hugo-theme-reader.netlify.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/zburu/hugo-theme-Reader/issues">report bugs</a>
    ·
    <a href="https://github.com/zburu/hugo-theme-Reader/issues">propose new features</a>
  </p>

</p>

<img src="https://count.zburu.com/get/?name=hugo-theme-Reader">

This README.md is for theme users and developers, welcome to use and submit pr.

> This theme is secondary development based on [yinyang](https://github.com/joway/hugo-theme-yinyang), adding new functions and deleting redundant functions, in order to simplify the code and improve Web page readability, etc.

Added:
- [x] Picture Lightbox
- [x] article directory
- [x] Article Search
 
### Table of contents

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

1. Third-party comments use artalk.

2. When introducing the `iframe` tag, please use the following format.

3. `config.toml` complete configuration file

[config.toml](./exampleSite/config.toml)


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



