FROM node:20-alpine

WORKDIR /app

COPY ./transportes-fernandez/ .

RUN npm install

EXPOSE 5173

CMD [ "npm","run","dev" ]