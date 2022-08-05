FROM node:16.16

WORKDIR app

COPY . .

RUN npm install --force

EXPOSE 3000
CMD [ "npm", "run", "start" ]