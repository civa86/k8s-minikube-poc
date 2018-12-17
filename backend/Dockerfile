FROM node:8.14.0-alpine
EXPOSE 3000
COPY package.json .
COPY package-lock.json .
COPY index.js .
RUN npm install
CMD node index.js