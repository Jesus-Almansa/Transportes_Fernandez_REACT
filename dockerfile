FROM node:24-alpine3.21

WORKDIR /app

COPY ./transportes-fernandez/ .

RUN npm install

EXPOSE 5173

CMD [ "npm","run","dev" ]