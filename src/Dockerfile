FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY public ./

RUN npm install

COPY . .

EXPOSE 8081
CMD [ "npm", "start" ]