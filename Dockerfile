FROM node:16-alpine

ADD . /aviationhub/
WORKDIR /aviationhub/
RUN corepack enable
RUN yarn install
CMD [ "yarn", "start:prod" ]