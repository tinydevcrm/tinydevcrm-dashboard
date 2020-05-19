# Development Dockerfile to run hotloading server.
#
# From: https://mherman.org/blog/dockerizing-a-react-app/

# Pull official base image
FROM node:12.16.3-alpine3.11 AS builder
LABEL application="tinydevcrm-dashboard-prod"

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

# Build
RUN npm run build

FROM nginx:1.17.4-alpine AS server
LABEL application="tinydevcrm-dashboard-prod"

COPY --from=builder /app/build /usr/share/nginx/html
COPY infra-aws/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
