FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

RUN REACT_APP_API_URL=http://34.233.33.120 

EXPOSE 8080

CMD [ "npm", "start" ]