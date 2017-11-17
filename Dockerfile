FROM node:8

WORKDIR /home/react-x-movies

EXPOSE 3000

COPY . /home/react-x-movies

RUN npm install -g yarn --quiet

RUN yarn install

CMD ["yarn", "start"]