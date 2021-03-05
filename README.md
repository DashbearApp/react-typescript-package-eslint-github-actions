# react-ts-package-eslint-github-actions

> React typescript flavored package with ESLint, Prettier configs, Storybook and CI/CD pipelines using Github Actions

[![NPM](https://img.shields.io/npm/v/react-ts-package-eslint-github-actions.svg)](https://www.npmjs.com/package/react-ts-package-eslint-github-actions) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Overview

This is a template repository scaffolded using `create-react-library -t typescript` with added Github Actions workflows for build, test, release cycle of CI/CD pipelines.

**Linting** conformity is provided by `eslint` and `prettier` customized and extended with better typescript support. Rulesets are designed for modern `es2020`, for VS Code developers, be sure to install both [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugins from the marketplace to enable auto format and inline rule warnings.

**Local build, run, test** configurations are included for `.vscode` using `launch.json` options for `yarn:start` events.

Packages are designed for development as **UI components** and contain base theme layout support for [@chakra-ui/react](). This behavior can be easily customized in your fork by removing related packages and [theme](theme/) folder.

* Github Actions
   * Workflow: `Build Test on Node 10x-15x`
   * Workflow: `Publish Release to GPR`
* Linting
   * [.editorconfig](.editorconfig) # optional: disable if you encounter issues with your IDE
   * [.eslintrc](.eslintrc)
   * [.prettierrc](.prettierrc)
* Storybook
   * See example [stories](storybook/stories) or read docs to create your own for testing packages.
* VS Code
   * Launch: `yarn:start`
   * Build: `yarn:build`
* Packages
   * `Typescript`, `@types/node`, `@types/<package_name>`
   * `@chakra-ui/react` `@chakra-ui/icons` including dependencies, see [docs](https://chakra-ui.com/docs/getting-started)
   * `storybook` with plugins
   * For more see [package.json](package.json).

## Install

```bash
npm install --save react-ts-package-eslint-github-actions
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'react-ts-package-eslint-github-actions'
import 'react-ts-package-eslint-github-actions/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

SEE LICENSE IN LICENSE © [dashbearapp](https://github.com/dashbearapp)
