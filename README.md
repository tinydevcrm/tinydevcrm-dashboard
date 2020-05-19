# `dashboard.tinydevcrm.com`: TinyDevCRM admin dashboard

This README intends to act as a [living
document](https://en.wikipedia.org/wiki/Living_document) for documenting the
TinyDevCRM administrative dashboard.

## System Requirements

## Build Requirements

For best results, make sure you have
[`tinydevcrm-backend`](https://github.com/tinydevcrm/tinydevcrm-backend)
installed and running.

## Getting Started

```bash
git clone https://tinydevcrm/tinydevcrm-dashboard
cd tinydevcrm-dashboard
make dev-run
```

## Overview

## Other Commands

### Running tests on development

```make
make runcmd npm test
```

### Create a production build and serving files

```bash
make prod-up
```

### Creating a production build with files hosted locally

```bash
make prod-copyfiles
```

### Toolchain

Tool | Purpose | Notes
--- | --- | ---
[`yarn`](https://github.com/yarnpkg/yarn) | package manager | chosen over [`npm`](https://www.npmjs.com/) for possible performance, licensing, security, versioning, and build determinism improvements.
[`react-router`](https://github.com/ReactTraining/react-router) | client-side routing |
[`antd`](https://github.com/ant-design/ant-design) | UI design and UI component base library |
[`bootstrap`](https://github.com/twbs/bootstrap) | layout library |
[`node-sass`](https://github.com/sass/node-sass) | SASS pre-processor | also enables CSS modules like pre-processing

## Licensing

See [LICENSE](LICENSE).
