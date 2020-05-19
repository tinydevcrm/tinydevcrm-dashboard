# Dockerfile to generate files to be copied back to hosts via Docker volume.
#
# From: https://mherman.org/blog/dockerizing-a-react-app/

# Pull official base image
FROM node:12.16.3-alpine3.11 AS copier
LABEL application="tinydevcrm-dashboard-copyfiles"

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
RUN npm install -g serve

# Add app
COPY . ./

# Build
RUN npm run build

# Copy entrypoint.
CMD [ "serve", "-s", "build" ]
