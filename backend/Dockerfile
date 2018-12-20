FROM node:10-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:10-alpine
COPY --from=build-stage /app/build .
EXPOSE 3000
CMD node index.js

