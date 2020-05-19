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
	GIT_REPO_ROOT=$(GIT_REPO_ROOT) docker-compose -f ${GIT_REPO_ROOT}/infra-dev/docker-compose.development.yaml down -v
	docker images -q -f dangling=true -f label=application=tinydevcrm-dashboard | xargs -I ARGS docker rmi -f --no-prune ARGS

prod-up:
	GIT_REPO_ROOT=$(GIT_REPO_ROOT) docker-compose -f $(GIT_REPO_ROOT)/infra-aws/docker-compose.production.yaml --verbose up -d --build client
	sleep 5
	xdg-open http://localhost:1337

# TODO: Add a teardown strategy, and clean up likely extraneous files as part of
# commits.
# TODO: Figure out how to change ownership of Docker volume for build/ directory
# to avoid having to use `sudo rm -rf` on host.
export HOSTUSER ?= $(shell whoami)
prod-copyfiles:
	GIT_REPO_ROOT=$(GIT_REPO_ROOT) docker-compose -f $(GIT_REPO_ROOT)/infra-aws/docker-compose.production.yaml --verbose up -d --build copier
	GIT_REPO_ROOT=$(GIT_REPO_ROOT) docker-compose -f $(GIT_REPO_ROOT)/infra-aws/docker-compose.production.yaml exec copier npm run build

prod-down:
	GIT_REPO_ROOT=$(GIT_REPO_ROOT) docker-compose -f $(GIT_REPO_ROOT)/infra-aws/docker-compose.production.yaml down -v
	docker images -q -f dangling=true -f label=application=tinydevcrm-dashboard-prod | xargs -I ARGS docker rmi -f --no-prune ARGS

create-stack:

update-stack:

terminate-stack:

deploy-content: prod-copyfiles
