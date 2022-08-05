FROM node:16.16

WORKDIR app

COPY package.json .

RUN npm install --force
RUN npm install cross-env -D

COPY . .

CMD [ "npm", "run", "start" ]