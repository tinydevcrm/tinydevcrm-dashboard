#!/usr/bin/env make

export APP_VERSION ?= $(shell git rev-parse --short HEAD)
export GIT_REPO_ROOT ?= $(shell git rev-parse --show-toplevel)

version:
	@ echo '{"Version": "$(APP_VERSION)"}'

# Make sure you have an instance of `tinydevcrm-backend` up and running, as API
# calls will be towards the development version of the API on assumed host
# ports: https://github.com/tinydevcrm-backend
dev-up:
	GIT_REPO_ROOT=$(GIT_REPO_ROOT) docker-compose -f $(GIT_REPO_ROOT)/infra-dev/docker-compose.development.yaml --verbose run --service-ports client

dev-down:
	docker-compose -f ${GIT_REPO_ROOT}/infra-dev/docker-compose.development.yaml down -v
	docker images -q -f dangling=true -f label=application=tinydevcrm-dashboard | xargs -I ARGS docker rmi -f --no-prune ARGS

prod-up:

prod-down:

create-stack:

update-stack:

terminate-stack:

deploy-content:
