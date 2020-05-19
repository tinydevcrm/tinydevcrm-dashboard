# `dashboard.tinydevcrm.com`: TinyDevCRM admin dashboard

This README intends to act as a [living
document](https://en.wikipedia.org/wiki/Living_document) for documenting the
TinyDevCRM administrative dashboard.

## System Requirements

## Build Requirements

Make sure you have
[`tinydevcrm-backend`](https://github.com/tinydevcrm/tinydevcrm-backend)
installed and running.

## Getting Started

```bash
git clone https://tinydevcrm/tinydevcrm-dashboard
cd tinydevcrm-dashboard
make dev-up
```

## Overview

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
