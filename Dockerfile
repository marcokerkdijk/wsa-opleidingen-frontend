FROM node:10.16.0-alpine AS builder
COPY . ./wsa-opleidingen-frontend
WORKDIR /wsa-opleidingen-frontend
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /wsa-opleidingen-frontend/dist/wsa-opleidingen-frontend/ /usr/share/nginx/html