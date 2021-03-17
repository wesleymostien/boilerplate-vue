# Vue Boilerplate

-   [Setup](#setup)
-   [Scripts](#scripts)
-   [Dependencies](#dependencies)
-   [Project structure](#project-structure)

<br>

---

## Setup

-   First, make sure following items are installed on your system:

    -   ### Node.js

        [Node.js](https://nodejs.org) is the JavaScript server environment needed to run this setup.<br>
        You can check which Node.js version you have installed by executing this command in the terminal: `node -v`

    -   ### NPM

        [NPM](https://www.npmjs.com/) is a Node package manager to install the needed packages and run the available scripts.<br>
        You can check which NPM version you have installed by executing this command in the terminal: `npm -v`

    -   ### Git

        [Git](https://git-scm.com/) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.<br>
        You can check which Git version you have installed by executing this command in the terminal: `git --version`

<br>

-   Clone and checkout Git repository:<br>
    `git clone git@bitbucket.org:axxesit/signify-maxos-fusion.git`

-   Browse to **frontend** folder:<br>
    `cd frontend`

-   To install all needed dependencies:<br>
    `npm install`

-   To start a local dev server:<br>
    `npm run dev`

-   To build files for production deployment:<br>
    `npm run build`

<br>

---

## Scripts

These scripts can be executed in the terminal: `npm run ...`

| script          |                                                                                                 |
| --------------- | :---------------------------------------------------------------------------------------------- |
| `build`         | generate production build : run `lint` script and build Webpack in distribution folder          |
| `dev`           | start Webpack dev server on defined host and port (with hot module reloading)                   |
| `i18n`          | check i18n for missing and unused keys and output an error if it's the case (used for git hook) |
| `lint`          | run scripts: `prettier`, `lint:css:fix`, `lint:js:fix`                                          |
| `lint:css`      | show CSS related linting issues                                                                 |
| `lint:css:fix`  | run `lint:css` script and try to fix as many CSS related linting issues as possible             |
| `lint:js`       | show JavaScript related linting issues                                                          |
| `lint:js:fix`   | run `lint:js` script and try to fix as many JavaScript related linting issues as possible       |
| `prettier`      | format all files with Prettier                                                                  |
| `prettier:i18n` | format i18n locale files with Prettier                                                          |
| `webpack`       | check output of Webpack (without starting a dev server) outputs                                 |

<br>

---

## Dependencies

-   ### Compiling

    -   #### [Babel](https://babeljs.io/)
        Babel is a JavaScript compiler which compiles next generation JavaScript (ES6 / ECMAScript 2015) into code that browsers understand.

-   ### Formatting

    -   #### [Prettier](https://prettier.io/)
        Prettier is an opinionated code formatter and enforces a consistent code style across the entire codebase. It supports many languages, integrates with most editors and options can be defined (&rarr; **file [.prettierrc.json](#Project-structure)**). Just press save and code is formatted, so no need to discuss style in code review. Saves time and energy.

-   ### Linting

    -   #### [ESLint](https://eslint.org/)

        ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. Rules in ESLint are configurable (&rarr; **file [.eslintrc.json](#Project-structure)**), and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues.

    -   #### [Stylelint](https://stylelint.io/)
        A mighty, modern linter that helps you avoid errors and enforce conventions in your styles. Features include:
        -   understands the latest CSS syntax including custom properties and level 4 selectors
        -   extracts embedded styles from HTML, markdown and CSS-in-JS object & template literals
        -   parses CSS-like syntaxes like SCSS, Sass, Less and SugarSS
        -   has over 170 built-in rules to catch errors, apply limits and enforce stylistic conventions
        -   supports plugins so you can create your own rules or make use of plugins written by the community (&rarr; **file [.stylelintrc.json](#Project-structure)**)
        -   automatically fixes the majority of stylistic violations

-   ### Module bundling

    -   #### [Webpack](https://webpack.js.org/)

        Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles. Features include:

        -   [dev server](https://webpack.js.org/configuration/dev-server) : provide a server for development with HMR (hot module reloading).
        -   [loaders](https://webpack.js.org/concepts/loaders/) are transformations that are applied to the source code of a module. They allow you to pre-process files as you import or “load” them.
        -   [plugins](https://webpack.js.org/concepts/plugins/) are the backbone of webpack. They serve the purpose of doing anything else that a loader cannot do.
        -   output a production build with compressed, minified, uglified code and optimized images.
        -   [code splitting](https://webpack.js.org/guides/code-splitting/) allows to split code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which can have a major impact on load time.
        -   linting of JavaScript and styles.
        -   compiling next generation JavaScript (ES6 / ECMAScript 2015) with [Babel](https://babeljs.io/)

-   ### State / Store / API

    -   #### [Axios](https://github.com/axios/axios)

        Axios is used to call the backend API. This is a promise based HTTP client for the browser and node.js.

    -   #### [Vuex](https://vuex.vuejs.org/)

        Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application.

-   ### UI / UX

    -   #### [Vue.js](https://vuejs.org/)

        Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.

    -   #### [Vue I18n](https://kazupon.github.io/vue-i18n/)

        Vue I18n is internationalization plugin of Vue.js. It easily integrates some localization features to your Vue.js application.

    -   #### [Vue Router](https://router.vuejs.org/)

        Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include:

        -   nested route/view mapping
        -   modular, component-based router configuration
        -   route params, query, wildcards
        -   fine-grained navigation control

    -   #### [Vuetify](https://vuetifyjs.com/)

        A Vue UI Library with beautifully handcrafted Material Components.

<br>

| package                                                                                                  |                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@babel/core](https://www.npmjs.com/package/@babel/core)                                                 | Core Babel Node API responsible for compiling JavaScript code programmatically and outputting usable code.                                                                                                                                                                                                                  |
| [@babel/node](https://www.npmjs.com/package/@babel/node)                                                 | CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it.                                                                                                                                                                                   |
| [@babel/plugin-syntax-dynamic-import](https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import) | When using dynamic imports (e.g. [lazy loading routes](https://router.vuejs.org/guide/advanced/lazy-loading.html)), this is needed so that Babel can properly parse the syntax.                                                                                                                                             |
| [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)                                     | Knowing what browser supports what JavaScript feature is essential in transforming your code. This handles what transforms should be applied, based on the input of supported browsers and it will transform JavaScript so it will work on the list provided. (&rarr; **file [.browserslistrc](#Project-structure)**)       |
| [@babel/register](https://www.npmjs.com/package/@babel/register)                                         | Enables to use new features of JavaScript in Webpack config. So not only the code we are going to output runs through Babel, but our JavaScript config files for Webpack will run through it as well.                                                                                                                       |
| [@mdi/js](https://www.npmjs.com/package/@mdi/js)                                                         | JavaScript and TypeScript distribution for the Material Design Icons. This module contains all the path data for all icons.                                                                                                                                                                                                 |
| [autoprefixer](https://www.npmjs.com/package/autoprefixer)                                               | [PostCSS](https://www.npmjs.com/package/postcss) plugin to parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](https://caniuse.com/). Online tester: [https://autoprefixer.github.io/](https://autoprefixer.github.io/).                                                                           |
| [axios](https://www.npmjs.com/package/axios)                                                             | Promise based HTTP client for the browser and node.js.                                                                                                                                                                                                                                                                      |
| [babel-loader](https://www.npmjs.com/package/babel-loader)                                               | Webpack [loader](https://webpack.js.org/loaders/babel-loader/) that allows transpiling JavaScript files using Babel.                                                                                                                                                                                                        |
| [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)                               | Webpack plugin to remove/clean your build folder(s).                                                                                                                                                                                                                                                                        |
| [compression-webpack-plugin](https://www.npmjs.com/package/compression-webpack-plugin)                   | Webpack [plugin](https://webpack.js.org/plugins/compression-webpack-plugin/) to prepare compressed versions of assets to serve them (used for production build).                                                                                                                                                            |
| [core-js](https://www.npmjs.com/package/core-js)                                                         | Sometimes browsers need a little extra help for certain features. This will provide polyfills for those features, based on what browsers need to be supported.                                                                                                                                                              |
| [css-loader](https://www.npmjs.com/package/css-loader)                                                   | Webpack [loader](https://webpack.js.org/loaders/css-loader/) that interprets `@import` and `url()` like `import`/`require()` and resolves them.                                                                                                                                                                             |
| [directory-named-webpack-plugin](https://www.npmjs.com/package/directory-named-webpack-plugin)           | Webpack plugin that treats a file with the name of directory as the index file.                                                                                                                                                                                                                                             |
| [eslint](https://www.npmjs.com/package/eslint)                                                           | ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code by applying a set of rules (&rarr; **file [.eslintrc.json](#Project-structure)**). This package enables the use of ESLint as a command (executable script) in the project.                                                   |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)                           | Turns off all ESLint rules that are unnecessary or might conflict with Prettier.                                                                                                                                                                                                                                            |
| [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack)           | Plugin for ESLint plugin **eslint-plugin-import** to use Webpack configuration for module resolution .                                                                                                                                                                                                                      |
| [eslint-loader](https://www.npmjs.com/package/eslint-import-resolver-webpack)                            | Webpack [loader](https://webpack.js.org/loaders/eslint-loader/) for ESLint.                                                                                                                                                                                                                                                 |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)                               | ESLint plugin to support linting of ES2015+ (ES6+) `import`/`export` syntax, and prevent issues with misspelling of file paths and import names.                                                                                                                                                                            |
| [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)                           | ESLint plugin that runs Prettier as an ESLint rule and reports differences as individual ESLint issues..                                                                                                                                                                                                                    |
| [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)                             | ESLint plugin to enforce best practices for JavaScript promises.                                                                                                                                                                                                                                                            |
| [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)                                     | Official ESLint plugin for Vue.js. This plugin allows to check the `<template>` and `<script>` of **_.vue_** files with ESLint.                                                                                                                                                                                             |
| [eslint-plugin-vuetify](https://www.npmjs.com/package/eslint-plugin-vuetify)                             | ESLint plugin for Vuetify.                                                                                                                                                                                                                                                                                                  |
| [friendly-errors-webpack-plugin](https://www.npmjs.com/package/friendly-errors-webpack-plugin)           | Webpack plugin that recognizes certain classes of webpack errors and cleans, aggregates and prioritizes them to provide a better developer experience by improving logging for the Webpack dev server.                                                                                                                      |
| [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)                                 | Webpack [plugin](https://webpack.js.org/plugins/html-webpack-plugin/) that simplifies creation of HTML files to serve bundles.                                                                                                                                                                                              |
| [husky](https://www.npmjs.com/package/husky)                                                             | Husky uses Git hooks to execute scripts on `git commit`, `git push`, ... (&rarr; **file [.huskyrc.json](#Project-structure)**, to use in combination with **lint-staged**). <br> <br> If Git hooks are not running on OSX, try running this command: `` sudo launchctl config user path `echo $PATH `` and restart machine. |
| [image-webpack-loader](https://www.npmjs.com/package/image-webpack-loader)                               | Webpack loader for minifying images (**.gif**, **.jpg**, **.jpeg**, **.png**, **.svg**, **.webp**) with [imagemin](https://www.npmjs.com/package/imagemin).                                                                                                                                                                 |
| [jspdf](https://www.npmjs.com/package/jspdf)                                                             | Library that enables client-side JavaScript PDF generation.                                                                                                                                                                                                                                                                 |
| [jspdf-autotable](https://www.npmjs.com/package/jspdf-autotable)                                         | Plugin for jsPDF which adds the ability to generate PDF tables either by parsing HTML tables or by using Javascript data directly.                                                                                                                                                                                          |
| [konva](https://www.npmjs.com/package/konva)                                                             | HTML5 Canvas JavaScript framework that extends the 2d context by enabling canvas interactivity for desktop and mobile applications.                                                                                                                                                                                         |
| [lint-staged](https://www.npmjs.com/package/lint-staged)                                                 | Run linters against staged git files (&rarr; **file [.lintstagedrc.json](#Project-structure)**, to use in combination with **husky**).                                                                                                                                                                                      |
| [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)                         | Webpack [plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) that extracts CSS into separate files.                                                                                                                                                                                                            |  |
| [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)   | Webpack plugin to optimize and minimize CSS assets (by default it uses [cssnano](https://www.npmjs.com/package/cssnano) but a custom CSS processor can be specified).                                                                                                                                                       |
| [postcss-loader](https://www.npmjs.com/package/postcss-loader)                                           | Webpack [loader](https://webpack.js.org/loaders/postcss-loader/) to process CSS with [PostCSS](https://www.npmjs.com/package/postcss).                                                                                                                                                                                      |
| [preload-webpack-plugin](https://www.npmjs.com/package/preload-webpack-plugin)                           | A webpack plugin for preloading assets into HtmlWebpackPlugin pages.                                                                                                                                                                                                                                                        |
| [prettier](https://www.npmjs.com/package/prettier)                                                       | Prettier is an opinionated code formatter. It enforces a consistent coding style by applying a set of rules (&rarr; **file [.prettierrc.json](#Project-structure)**). This package enables the use of Prettier as a command (executable script) in the project.                                                             |
| [resolve-url-loader](https://www.npmjs.com/package/resolve-url-loader)                                   | Webpack loader that rewrites relative paths in url() statements based on the original source file.                                                                                                                                                                                                                          |
| [sass-loader](https://www.npmjs.com/package/sass-loader)                                                 | Webpack [loader](https://webpack.js.org/loaders/sass-loader/) that compiles Sass / SCSS into CSS.                                                                                                                                                                                                                           |
| [style-loader](https://www.npmjs.com/package/style-loader)                                               | Webpack [loader](https://webpack.js.org/loaders/style-loader/) that injects CSS into the DOM.                                                                                                                                                                                                                               |
| [stylelint](https://www.npmjs.com/package/stylelint)                                                     | A linter that helps to avoid errors and enforce conventions in styles by applying a set of rules (&rarr; **file [.stylelintrc.json](#Project-structure)**).                                                                                                                                                                 |
| [stylelint-config-recommended](https://www.npmjs.com/package/stylelint-config-recommended)               | The recommended shareable SCSS config for **stylelint**. It turns on all the possible errors rules within stylelint.                                                                                                                                                                                                        |
| [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)                                           | A collection of SCSS specific linting rules for **stylelint** (in a form of a plugin).                                                                                                                                                                                                                                      |
| [stylelint-webpack-plugin](https://www.npmjs.com/package/stylelint-webpack-plugin)                       | Webpack [plugin](https://webpack.js.org/plugins/stylelint-webpack-plugin/) for stylelint.                                                                                                                                                                                                                                   |
| [svg-sprite-loader](https://www.npmjs.com/package/svg-sprite-loader)                                     | Webpack loader for creating SVG sprites.                                                                                                                                                                                                                                                                                    |
| [terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin)                             | Webpack [plugin](https://webpack.js.org/plugins/terser-webpack-plugin/) to minify JavaScript using [terser](https://www.npmjs.com/package/terser).                                                                                                                                                                          |
| [url-loader](https://www.npmjs.com/package/url-loader)                                                   | Webpack [loader](https://webpack.js.org/loaders/url-loader/) that transforms files (images) into base64 URIs.                                                                                                                                                                                                               |
| [vue](https://www.npmjs.com/package/vue)                                                                 | Reactive, component-oriented view layer and JavaScript framework for modern web interfaces.                                                                                                                                                                                                                                 |
| [vue-cookies](https://www.npmjs.com/package/vue-cookies)                                                 | A simple Vue.js plugin for handling browser cookies                                                                                                                                                                                                                                                                         |
| [vue-i18n](https://www.npmjs.com/package/vue-i18n)                                                       | Reactive, component-oriented view layer and JavaScript framework for modern web interfaces.                                                                                                                                                                                                                                 |
| [vue-loader](https://www.npmjs.com/package/vue-loader)                                                   | Vue I18n is internationalization plugin of Vue.js. It easily integrates some localization features to your Vue.js application.                                                                                                                                                                                              |
| [vue-router](https://www.npmjs.com/package/vue-router)                                                   | Official router for Vue.js.                                                                                                                                                                                                                                                                                                 |
| [vue-splide](https://www.npmjs.com/package/@splidejs/vue-splide)                                         | Lightweight, powerful and flexible slider and carousel.                                                                                                                                                                                                                                                                     |
| [vue-template-compiler](https://www.npmjs.com/package/vue-template-compiler)                             | This package can be used to pre-compile Vue 2.0 templates into render functions to avoid runtime-compilation overhead and CSP (Content Security Policy) restrictions. (Used by **vue-loader**.)                                                                                                                             |
| [vue-tippy](https://www.npmjs.com/package/vue-tippy)                                                     | VueJS tooltip plugin powered by [Tippy.js](https://atomiks.github.io/tippyjs/).                                                                                                                                                                                                                                             |
| [vuetify](https://www.npmjs.com/package/vuetify)                                                         | A Vue UI Library with beautifully handcrafted Material Components.                                                                                                                                                                                                                                                          |
| [vuetify-loader](https://www.npmjs.com/package/vuetify-loader)                                           | Webpack loader that will automatically import all Vuetify components as you use them.                                                                                                                                                                                                                                       |
| [vuex](https://www.npmjs.com/package/vuex)                                                               | Centralized State Management for Vue.js.                                                                                                                                                                                                                                                                                    |
| [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)                                 | Persist and rehydrate your Vuex state between page reloads.                                                                                                                                                                                                                                                                 |
| [webpack](https://www.npmjs.com/package/webpack)                                                         | Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.                                                                                                                        |
| [webpack-cli](https://www.npmjs.com/package/webpack-cli)                                                 | This package enables the use of Webpack as a command (executable script) in the project. Webpack CLI also provides a flexible set of commands for developers to increase speed when setting up a custom webpack project.                                                                                                    |
| [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)                                   | Development server for webpack that provides live reloading. This should be used for development only.                                                                                                                                                                                                                      |
| [webpack-merge](https://www.npmjs.com/package/webpack-merge)                                             | Provides a merge function that concatenates arrays and merges objects creating a new object (like Webpack configurations).                                                                                                                                                                                                  |

<br>

---

## Project structure

-   [**`config/`**](./config) : folder for config files
    -   [**`webpack/`**](./config/webpack) : folder for Webpack related configuration
        -   [webpack.babel.js](./config/webpack/webpack.babel.js) : global settings and starting point for Webpack (entry points, output path, loaders, plugins, ...)
        -   [webpack.dev.js](./config/webpack/webpack.dev.js) : settings file used for using Webpack in development (Webpack dev server, ...)
        -   [webpack.options.js](./config/webpack/webpack.options.js) : all Webpack options (loaders, plugins, stats) bundled, so it is easy to inlude them in the appropiate settings file without too much code clutter
        -   [webpack.prod.js](./config/webpack/webpack.prod.js) : settings file for Webpack production build
    -   [config.js](./config/config.js) : global settings config file
    -   [vars.js](./config/vars.js) : global variables
-   [**`dist/`**](./dist) : distribution folder containing production build files
-   [**`public/`**](./public) : folder not be processed by Webpack (will be copied into the build folder untouched)
    -   [index.html](./public/index.html) : HTML template for this project
-   [**`src/`**](./src) : folder containing all source code
    -   [**`api/`**](./src/api): connection and calls to the backend API
    -   [**`asset/`**](./src/asset): folder for all kinds of assets (fonts, icons, images, styles, ...)
    -   [**`component/`**](./src/component) : Vue components
    -   [**`page/`**](./src/page) : Vue pages used for routing
    -   [**`plugin/`**](./src/plugin) : Vue plugins (i18n, router, vuetify, vuex, ...)
    -   [**`script/`**](./src/script) : script files used in frontend
    -   [**`store/`**](./src/store) : holds the Vuex store
    -   [main.js](./src/main.js) : starting point for Vue app and entry point for Webpack
-   [.babelrc](./.babelrc) : config file for Babel transpiler
-   [.browserslistrc](./.browserslistrc) : contains a list of the browsers that need to be supported (used for Babel, PostCSS, Autoprefixer, ...). Online tester: [https://browserl.ist/](https://browserl.ist/)
-   [.dockerignore](./.dockerignore) : exclude files and directories from Docker, to increase the build’s performance
-   [.eslintcache](./.eslintcache) : cache file for ESLint, so it only lints changed files to improve running time
-   [.eslintignore](./.eslintignore) : exclude files from the ESLint linting process
-   [.eslintrc.json](./.eslintrc.json) : settings file for ESLint (JavaScript linter)
-   [.huskyrc.json](./.huskyrc.json) : settings file for Husky (execute Git hooks scripts)
-   [.lintstagedrc.json](./.lintstagedrc.json) : settings file for lint-staged (run linters against staged git files)
-   [.prettierignore](./.prettierignore) : exclude files from being formatted by Prettier
-   [.prettierrc.json](./.prettierrc.json) : settings file for Prettier (code formatter)
-   [.stylelintignore](./.stylelintignore) : exclude files from the Stylelint linting process
-   [.stylelintrc.json](./.stylelintrc.json) : settings file for Stylelint (Sass / SCSS / CSS linter)
-   [Dockerfile](./Dockerfile) : contains all the commands to assemble a Docker image
-   [jsconfig.json](./jsconfig.json) : specifies the root files and the options for the features provided by the JavaScript language service (compiler options, module resolving, ...)
-   [package-lock.json](./package-lock.json) : automatically generated for any operations where npm modifies either the node_modules tree, or package.json file
-   [package.json](./package.json) : holds data related to the project (dependencies, scripts, version, ...)
-   [README.md](./README.md) : this documentation file that holds information about this project in more detail
