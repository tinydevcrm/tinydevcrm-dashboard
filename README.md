# `dashboard.tinydevcrm.com`: TinyDevCRM admin dashboard

This README intends to act as a [living
document](https://en.wikipedia.org/wiki/Living_document) for documenting the
TinyDevCRM administrative dashboard.

## System Requirements

-   Operating system: Ubuntu 20.04 LTS:

    ```bash
    $ lsb_release -a
    No LSB modules are available.
    Distributor ID: Ubuntu
    Description:    Ubuntu 20.04 LTS
    Release:        20.04
    Codename:       focal
    ```

-   `docker`, Linux container runtime:

    ```bash
    $ docker -v
    Docker version 19.03.8, build afacb8b7f0
    ```

-   `docker-compose`, multi-container single-host Docker runtime addition:

    ```bash
    $ docker-compose -v
    docker-compose version 1.23.2, build 1110ad01
    ```

-   `make`, Makefile parser

    ```bash
    $ make --version
    GNU Make 4.2.1
    Built for x86_64-pc-linux-gnu
    Copyright (C) 1988-2016 Free Software Foundation, Inc.
    License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
    This is free software: you are free to change and redistribute it.
    There is NO WARRANTY, to the extent permitted by law.
    ```

-   `awscli`, AWS CLI

    ```bash
    $ aws --version
    aws-cli/1.17.14 Python/3.8.2 Linux/5.4.0-28-generic botocore/1.14.14
    ```

-   `git`, distributed version control

    ```bash
    $ git --version
    git version 2.26.2
    ```

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
