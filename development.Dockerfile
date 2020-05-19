# Development Dockerfile to run hotloading server.
#
# From: https://mherman.org/blog/dockerizing-a-react-app/

# Pull official base image
FROM node:12.16.3-alpine3.11
LABEL application="tinydevcrm-dashboard"

# Set working directory
WORKDIR /app

# Add `/app/node_modules/bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies.
COPY package.json ./
COPY yarn.lock ./

RUN npm install
RUN npm rebuild node-sass

RUN npm install -g react-scripts@3.4.0

# Add app
COPY . ./

# `yarn` should always start on port 3000, map this port within the container to
# the preferred port on the host.
CMD [ "yarn", "start" ]
