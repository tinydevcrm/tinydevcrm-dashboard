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
	GIT_REPO_ROOT=$(GIT_REPO_ROOT) docker-compose -f $(GIT_REPO_ROOT)/infra-aws/docker-compose.production.yaml --verbose up -d --build
	sleep 5
	xdg-open http://localhost:5000

prod-down:
	GIT_REPO_ROOT=$(GIT_REPO_ROOT) docker-compose -f $(GIT_REPO_ROOT)/infra-aws/docker-compose.production.yaml down -v
	docker images -q -f dangling=true -f label=application=tinydevcrm-dashboard-prod | xargs -I ARGS docker rmi -f --no-prune ARGS

export AWS_STACK_NAME ?= tinydevcrm-dashboard

create-stack:
	# Copy infra-aws/stack-params.example.json to infra-aws/stack-params.json
	# and replace parameters.
	#
	# Change AWS CloudFormation stack name and AWS IAM profile as need be.
	# Default is generated from `tinydevcrm-backend`.
	aws cloudformation create-stack \
		--stack-name $(AWS_STACK_NAME) \
		--template-body file://infra-aws/stack.yaml \
		--parameters file://infra-aws/stack-params.json \
		--capabilities CAPABILITY_NAMED_IAM \
		--profile tinydevcrm-user

update-stack:
	aws cloudformation deploy \
		--stack-name $(AWS_STACK_NAME) \
		--template-file $(GIT_REPO_ROOT)/infra-aws/stack.yaml \
		--capabilities CAPABILITY_NAMED_IAM \
		--profile tinydevcrm-user

terminate-stack:
	aws cloudformation delete-stack \
		--stack-name $(AWS_STACK_NAME) \
		--profile tinydevcrm-user

# Change $S3_BUCKET_URI as needed.
export S3_BUCKET_URI ?= dashboard.tinydevcrm.com
deploy-content:
	aws s3 sync ./build s3://$(S3_BUCKET_URI) --profile tinydevcrm-user
