FROM node:22.14.0
WORKDIR /usr/local/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "npm run build && npm run start"]
