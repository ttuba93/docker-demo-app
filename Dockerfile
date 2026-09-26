FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

ENV PORT=3000
ENV APP_MESSAGE="Hello from Docker!"

EXPOSE 3000

USER node

CMD ["node", "app.js"]
