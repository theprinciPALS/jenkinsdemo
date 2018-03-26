# DOCKER-VERSION 0.3.4
FROM node:9.9-slim

ADD . /mycode
RUN cd mycode; npm install
EXPOSE 80
CMD node /mycode/index.js
