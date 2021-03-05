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

To consume packages published on Github Package Registry (GPR), setup your environment and pull down the release tag with your favorite package manager.

```bash
# npm
npm install --save <package_name>

# yarn
yarn add <package_name>
```

See the example in [.yarnrc](.yarnrc) to point `@namespace` resolver to GPR. Authentication is required for private packages and can be performed using the command:

```bash
$ npm login --scope=@OWNER --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

## Usage

It's recommended to use `yarn <command> watch` and `yarn storybook` to automatically compile and test while developing locally.

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

## Github Actions

CI/CD workflows are enabled on this repository, see status badges above. Read more about the basics of pipelines on [Github Docs](https://docs.github.com/en/actions).

### Consuming Github Package Registry

Packages published in GPR can be consumed in workflows by mapping the node runtime scope resolver to the Github registry. Note this step requires adding a generated token with scopes `packages:read`, read more on [Github Docs](https://docs.github.com/en/actions/reference/authentication-in-a-workflow). Tokens can be added in the repository settings tab under secrets.

For a complete workflow example, refer to [actions-build-test-node.yml](.github/workflows/actions-build-test-node.yml).

```yml
    with:
        node-version: ${{ matrix.node-version }}
        registry-url: 'https://npm.pkg.github.com/'
        # Github Username where package is pushed/pulled from
        scope: '@namespace'
        always-auth: true
        # Github Packages:Read token
        token: ${{ secrets.PACKAGES_TOKEN }}
    - run: yarn install --frozen-lockfile
      env:
        NODE_AUTH_TOKEN: ${{ secrets.PACKAGES_TOKEN }}
```

### Publishing to Github Package Registry (GPR)

This repository builds and publishes packages using Github Actions workflow instantiated on `[release]` event. Releases can be performed using Github CLI command: `gh release create <tag> [<files>...]`, read more in the [gh cli docs](https://cli.github.com/manual/gh_release_create).

For a complete workflow example, refer to [actions-gpr-publish-release.yml](.github/workflows/actions-gpr-publish-release.yml).

```yml
  publish-gpr:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
          registry-url: https://npm.pkg.github.com/
          token: ${{ secrets.PACKAGES_TOKEN }}
      - run: npm ci
        env:
          NODE_AUTH_TOKEN: ${{secrets.PACKAGES_TOKEN}}
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.PACKAGES_TOKEN}}
```

## Contributing
## License

SEE LICENSE IN LICENSE © [dashbearapp](https://github.com/dashbearapp)
