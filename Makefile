#!/usr/bin/env make

export APP_VERSION ?= $(shell git rev-parse --short HEAD)
export GIT_REPO_ROOT ?= $(shell git rev-parse --show-toplevel)

DOCKER_IMAGE_NAME='tinydevcrm-dashboard'
DOCKER_IMAGE_VERSION='latest'
DOCKER_CONTAINER_NAME='tinydevcrm-dashboard'

version:
	@ echo '{"Version": "$(APP_VERSION)"}'

# Make sure you have an instance of `tinydevcrm-backend` up and running, as API
# calls will be towards the development version of the API on assumed host
# ports: https://github.com/tinydevcrm-backend
dev-up:
	docker build $(GIT_REPO_ROOT) \
		--file $(GIT_REPO_ROOT)/development.Dockerfile \
		--tag $(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_VERSION)
	docker run \
		-it \
		--rm \
		--network=host \
		--volume=$(GIT_REPO_ROOT):/app \
		--volume /app/node_modules \
		$(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_VERSION)

dev-down:

prod-up:

prod-down:

create-stack:

update-stack:

terminate-stack:

deploy-content:
