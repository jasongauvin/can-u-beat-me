<p align="center">
    <img src="./front-end-starter.png" alt="front-end-starter" width="200"><br>
    <a href="https://gulpjs.com/">
        <img src="https://img.shields.io/badge/bundler-gulp-brightgreen.svg" alt="gulp">
    </a>
    <a href="#v---dependencies">
        <img src="https://img.shields.io/david/dev/expressjs/express.svg" alt="dev dependencies">
    </a>
    <a href="https://github.com/blyndusk/front-end-starter/blob/doc/LICENSE">
        <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="LICENCE">
    </a>
</p>

# front-end-starter

- [I - Why use this](#i---why-use-this)
- [II - Overall operation](#ii---overall-operation)
- [III - Make it work](#iii---make-it-work)
- [IV - Add new files](#iv---add-new-files)
- [V - Go further](#v---go-further)
- [VI - Dependencies](#vi---dependencies)
  
## I - Why use this

This starter aims to:

- make the development of a website **easier**, **faster** and more **efficient**
- be able to use **advanced technologies** and languages, without worrying about the **browsers retrocompatibilities**
- see changes in **real time** while **developing**
- have a **clean** and **qualitative** result ready to **production launch**
- have **fun** developing stuff

> It's that we can name a **bundler**

## II - Overall operation

### 1. What I use

For that, I chose to use [Gulp](https://gulpjs.com/), a toolkit which allows to develop **matic tasks**, for exampl

- **copy** / **move** files
- **compilation** of several files
- **compatibility** of languages for **actual browsers**
- **all** at the same time

### 2. Concretely

Concretely, we have a **source** ( `./src` ) folder for **developement**, and a **production** ( `./public` ) folder, for **production** (yes).

⚠️ - The **public files** are ignored, because they don't have to be pushed.

#### a) HTML

***HTML*** files will be:

- **copied** from **source** folder
- **minified**
- **pasted** into the **prod** folder

#### b) SCSS

**SCSS** files will be:

- **imported** in `master.scss`
- **copied** from **source** folder
- **compiled** from *SCSS* to *CSS*
- **minified** in the cleanest way
- **renamed** & **pasted** into the **prod** folder

#### c) JS

***SCSS*** files will be:

- **imported** in `app.js`
- **copied** from **source** folder
- **compiled** from **ES6** to **ES5**
- **uglified** (minified with **functions** and **variables** renamed)
- **renamed** & **pasted** into the **prod** folder

#### d) Assets

**Assets** will be:

- **copied** from **source** folder
- **pasted** into the **prod** folder

### 3. Tree

```bash
├── public
│   └── .gitkeep
├── src
│   ├── assets
│   │   └── img
│   ├── index.html
│   ├── js
│   │   ├── app.js
│   │   ├── functions.js
│   │   └── ui.js
│   └── scss
│       ├── global
│       │   ├── _extends.scss
│       │   ├── _fonts.scss
│       │   ├── _global.scss
│       │   ├── _keyframes.scss
│       │   ├── _mixins.scss
│       │   ├── _reset.scss
│       │   └── _variables.scss
│       └── master.scss
├── website_assets
│   ├── .htaccess
│   ├── robots.txt
│   └── sitemap.xml
├── front-end-starter.png
├── gulpfile.js
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── yarn.lock
```

## III - Make it work

> if you have gulp **globally installed**, just `npm i && gulp` or `yarn && gulp` at the **root** of the starter.

### 1. Install gulp in global

⚠️ - I assume that you have *already* installed **yarn** or **npm**.

- `yarn global add gulp` or `npm i -g gulp`

### 2. Install dev dependencies

- `yarn` or `npm i`

### 3. Run tasks

There are 3 things you need to know:

- you can run **just a task** just with `gulp <task>` ( `gulp scss`,`gulp assets` ).
- you can run **all tasks** **one** **time** with `gulp build`.
- you can run tasks **when a file change in real-time** with `gulp watch`.

But the best way is just `gulp`: It will create a **localhost** with **BrowerSync**, **watch** your files and **put modifications** in the browser in **real-time**.

## IV - Add new files

### 1. HTML

- Go to `./src`
- **Create** your file
- Don't forget to **copy** the **style** and **script** link:

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="css/master.min.css">
    </head>
    <body>
        <!-- Code goes here -->
        <script src="js/app.min.js" charset="UTF-8"></script>
    </body>
</html>
```

### 2. SCSS

- Go to `src/scss`
- **Create** your file with **this** structure: `_filename.scss`
- Don't forget to **import** this new file in `master.scss` like that: `@import: 'component/filename'`

### 3. JS

- Go to `src/js`
- **Create** your file with **this** structure: `filename.js`
- Don't forget to **import** this new file in `app.js` like that: `import: './filename'`

### 4. Assets

- Go to `src/ASSETS`
- **Add** some files

**Warning**: a little **specification**: in your files, you have to link your assets who are **in the** `./public` **folder**. It will be **fixed** soon

## V - Go further

> If your want to add some data in front-end, or website SEO models.

### 1. JSON

If you look at the `gulpfile.js` file, you will see that there is a **commented task** named `JSON`. Like the **HTML** task, ***JSON*** will be:

- **copied** from **source** folder
- **minified**
- **pasted** into the **prod** folder

Add **JSON files** in your project could be great if you add some **data** or **dynamic content**.

### 2. Website assets

There is a `website_assets` folder at the root which contains some SEO model files:

- a `.htaccess`, who can be used to **add some site-specific configurations for apache**
- a `sitemap.xml`, used to **reference** all **internal links** of your website
- a `robots.txt`, to choose what you want to **index** and **reference** and link the sitemap

Like the **JSON** task, the ***website assets*** will be:

- **copied** from **source** folder
- **minified**
- **pasted** into the **prod** folder

⚠️ - In the **source** files, they are placed in the `website_assets folder`, but in your website they have to be at the **root directory of your website**, except for your **sitemap**.

## VI - Dependencies

### 1. Gulp

```JSON
"gulp": "^3.9.1",
"gulp-babel": "^8.0.0",
"gulp-clean-css": "^3.10.0",
"gulp-htmlmin": "^5.0.1",
"gulp-jsonminify": "^1.1.0",
"gulp-plumber": "^1.2.0",
"gulp-rename": "^1.4.0",
"gulp-resolve-url": "0.0.2",
"gulp-sass": "^4.0.2",
"gulp-sourcemaps": "^2.6.4",
"gulp-uglify-es": "^1.0.4",
```

### 2. Others

```JSON
"@babel/core": "^7.1.5",
"@babel/preset-env": "^7.1.5",
"browser-sync": "^2.26.3",
"eslint": "^5.9.0",
"eslint-plugin-import": "^2.14.0",
"node-sass": "^4.10.0",
"webpack-stream": "^5.1.1"
```