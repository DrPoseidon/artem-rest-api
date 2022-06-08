FROM node:12
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 7001
CMD [ "node", "index.js" ]