FROM ubuntu
LABEL description = "Dockerfile for building a docker image with ubuntu and nodejs"
RUN apt update
RUN apt upgrade -y

RUN apt-get install wget -y
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.39.0/install.sh | bash