FROM node:alpine
COPY . /app
WORKDIR /app
EXPOSE 50000
CMD ["node", "index.js"]
