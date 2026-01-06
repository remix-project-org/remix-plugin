# Remix Plugin

Remix plugin is a universal plugin system written in Typescript.

It provides an extendable engine that simplifies communication between multiple internal or external sources.


This repository manages multiple projects related to remix plugins. It's divided into two main categories : 
- Engine: A library to manage communication between plugins. 
- Plugin: A library to create an external plugin.

## Engine

The core component of the engine is the `@remix-project/engine` library. It can be extended to run in different environments.

| Name                                                                     | Latest Version       | Next Version
| ------------------------------------------------------------------------ | :------------------: | :------------------:
| [@remix-project/engine](/packages/engine/core)                            | [![badge](https://img.shields.io/npm/v/@remix-project/engine/latest.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/engine) | [![badge](https://img.shields.io/npm/v/@remix-project/engine/next.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/engine)
| [@remix-project/engine-vscode](/packages/engine/vscode)                   | [![badge](https://img.shields.io/npm/v/@remix-project/engine-vscode/latest.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/engine-vscode) | [![badge](https://img.shields.io/npm/v/@remix-project/engine-vscode/next.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/engine-vscode)
| [@remix-project/engine-web](/packages/engine/web)                         | [![badge](https://img.shields.io/npm/v/@remix-project/engine-web/latest.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/engine-web) | [![badge](https://img.shields.io/npm/v/@remix-project/engine-web/next.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/engine-web)
| [@remix-project/engine-node](/packages/engine/node)                       | [![badge](https://img.shields.io/npm/v/@remix-project/engine-node/latest.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/engine-node) | [![badge](https://img.shields.io/npm/v/@remix-project/engine-node/next.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/engine-node)

> To create a new environment connector, check out [@remix-project/engine](/packages/engine/core). 


## Plugin

The core component of the plugin is the `@remix-project/plugin` library. It can be extended to run in different environments.

| Name                                                                     | Latest Version       | Next Version
| ------------------------------------------------------------------------ | :------------------: | :------------------:
| [@remix-project/plugin](/packages/plugin/core)                            | [![badge](https://img.shields.io/npm/v/@remix-project/plugin/latest.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin) | [![badge](https://img.shields.io/npm/v/@remix-project/plugin/next.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin)
| [@remix-project/plugin-vscode](/packages/plugin/vscode)                   | [![badge](https://img.shields.io/npm/v/@remix-project/plugin-vscode/latest.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin-vscode) | [![badge](https://img.shields.io/npm/v/@remix-project/plugin-vscode/next.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin-vscode)
| [@remix-project/plugin-iframe](/packages/plugin/iframe)                         | [![badge](https://img.shields.io/npm/v/@remix-project/plugin-iframe/latest.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin-iframe) | [![badge](https://img.shields.io/npm/v/@remix-project/plugin-iframe/next.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin-iframe)
| [@remix-project/plugin-webview](/packages/plugin/webview)                         | [![badge](https://img.shields.io/npm/v/@remix-project/plugin-webview/latest.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin-webview) | [![badge](https://img.shields.io/npm/v/@remix-project/plugin-webview/next.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin-webview)
| [@remix-project/plugin-child-process](/packages/plugin/child-process)                       | [![badge](https://img.shields.io/npm/v/@remix-project/plugin-child-process/latest.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin-child-process) | [![badge](https://img.shields.io/npm/v/@remix-project/plugin-child-process/next.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin-child-process)

> To create a new environment connector, check out [@remix-project/plugin](/packages/plugin/core). 


## API

Remix plugin offers a set of common APIs for plugins to implement. This set of APIs is used in [remix-ide](https://remix.ethereum.org), therefore every plugin running inside remix-ide should be able to run in an engine that implements these APIs.

| Name                               | Latest Version       | Next Version
| ---------------------------------- | :------------------: | :------------------:
| [@remix-project/plugin-api](/packages/api) | [![badge](https://img.shields.io/npm/v/@remix-project/plugin-api/latest.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin-api) | [![badge](https://img.shields.io/npm/v/@remix-project/plugin-api/next.svg?style=flat-square)](https://www.npmjs.com/package/@remix-project/plugin-api)



> The first goal of **remix plugin** is to enable a plugin to work in the envrionments of multiple engines. If a plugin has dependancies on other plugins, each engine must implement these dependancies.


# Contribute

## Setup
```
git clone https://github.com/ethereum/remix-plugin.git
cd remix-plugin
npm install
```

## See dependancy graph
To better understand the project structure, you can display a dependancy graph with:
```
npm run dep-graph
```
Open your browser on `http://localhost:4211/`.


## Build
This uses nx's affected:build to only update what has been changes since last build.
```
npm run build
```

## Build a specific project
```
npx nx build ${projectName} --with-deps

## Angular Removal (Dec 2025)

This repository no longer depends on Angular. We removed Angular example apps, Angular-related dependencies, and the `ngcc` postinstall step.

- Removed: all `@angular/*` packages and `@nrwl/angular` usage
- Removed: Angular example projects under `examples/example/*`
- Removed: `ngcc` (Angular Compatibility Compiler) postinstall; it was used to convert View Engine packages to Ivy and is no longer needed
- CI updated: CircleCI now uses `cimg/node:20.19.0-browsers` to align with local Node

If you need the old Angular examples, refer to the repository history prior to the `chore/yarn-classic` branch.
```

**Example for engine-vscode :**
```
npx nx build engine-vscode --with-deps
```

## Test
This uses nx's affected:test to only update what has been changes since last test.
```
npm test
```

## Publish
This uses lerna to deploy all the packages with a new version:
```
npm run deploy:latest
```
OR
```
npm run deploy:next
```