FROM node:alpine

WORKDIR /app

COPY package*.json ./

ENV NODE_ENV production

RUN npm install --production

COPY . .

EXPOSE 8000

CMD [ "node", "app.js" ]