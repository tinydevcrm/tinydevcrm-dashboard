# Docker image for development / configuration purposes.

FROM ubuntu:18.04

RUN apt-get -y update
RUN apt-get -y upgrade

# Install build dependencies #
RUN apt-get install -y curl

# Install Node.js v13.x
RUN curl -sSL https://deb.nodesource.com/setup_13.x | bash
RUN apt-get -y update
RUN apt-get install -y nodejs

ENTRYPOINT [ "/app/entrypoint.sh" ]
