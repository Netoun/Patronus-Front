FROM node:alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN \
  yarn; \
  yarn build;


FROM nginx:alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
