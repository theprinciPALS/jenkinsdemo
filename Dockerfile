# DOCKER-VERSION 0.3.4
FROM node:alpine-9

ADD . /mycode
RUN cd mycode; npm install
EXPOSE 80
CMD node /mycode/index.js
