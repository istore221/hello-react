# Set the base image
FROM nginx:1.13.6

# Set Maintainer
MAINTAINER A.L.K Thejitha "istore221@gmail.com"

# Set a health check for the container
HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://127.0.0.1 || exit 1

# ENV_VARS
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.9.1

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh


# Install
RUN apt-get -y update && \
apt-get install -y \
build-essential libssl-dev \
vim \
git \
apt-transport-https \
curl && \
curl https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash && \
source $NVM_DIR/nvm.sh && \
source ~/.bashrc && \
nvm install $NODE_VERSION && \
nvm alias default $NODE_VERSION && \
nvm use default && \
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
apt-get update -y && \
apt-get install yarn -y


# ENV_VARS
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $PATH:$NVM_DIR/versions/node/v$NODE_VERSION/bin

# WORKDIR
WORKDIR /usr/share/nginx/html/hello-react

# Bundle app source & Install app dependencies
ADD . .

# Install dependencies and build
RUN yarn install && \
    yarn build:prod && \
    cp -rf dist/* /usr/share/nginx/html/ && \
    rm -rf /usr/share/nginx/html/hello-react

# WORKDIR
WORKDIR /usr/share/nginx/html

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Start nginx
CMD ["nginx"]

#https://stdout.roman.zone/jenkins-docker-python

# Expose port 80
EXPOSE 80
