######################  etapa de build  ######################
FROM node:24-alpine3.21 AS builder
WORKDIR /app

# 1. solo los manifests para aprovechar la cache
COPY transportes-fernandez/package*.json ./

# 2. instala dependencias *dentro* del contenedor
RUN npm ci          # usa las versiones fijadas en package-lock.json

# 3. copia el resto (el .dockerignore evita node_modules/dist)
COPY transportes-fernandez/ .

# 4. por seguridad –si esbuild ya estaba en cache npm– lo recompilamos
RUN npm rebuild esbuild && npm run build   # genera /app/dist
##############################################################

######################  imagen final  ########################
FROM nginx:1.27-alpine

RUN apk update && apk upgrade && rm -rf /var/cache/apk/*

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 443
CMD ["nginx","-g","daemon off;"]
##############################################################