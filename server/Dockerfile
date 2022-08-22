FROM node:16.13.2

WORKDIR /usr/app

COPY packege*.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3333
CMD ["yarn", "dev"]