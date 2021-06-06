FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 8080

CMD [ "npm", "run", "start-dev" ]