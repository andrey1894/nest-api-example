FROM node:16.16-alpine

WORKDIR /app

COPY ["package.json", "yarn.lock"]

RUN npm install -g sequelize-cli
RUN yarn

COPY . .

COPY ./dist ./dist

CMD ["yarn", "start:dev"]
