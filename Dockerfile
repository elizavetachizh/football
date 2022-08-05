FROM node:16.16

WORKDIR app

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 80
CMD [ "npm", "run", "start" ]