FROM node:11.1.0-alpine

EXPOSE 8080
COPY . /app
WORKDIR /app

ENTRYPOINT ["node"]
CMD ["index.js"]
