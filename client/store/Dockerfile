FROM node:v16.13.2

WORKDIR /usr/app

COPY packege*.json  ./
RUN yarn install

COPY . .

EXPOSE 3000
CMD ["yarn", "start"]