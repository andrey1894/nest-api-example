FROM node:16.16-alpine

WORKDIR /app

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY . .

COPY ./dist ./dist

CMD ["yarn", "start:dev"]
