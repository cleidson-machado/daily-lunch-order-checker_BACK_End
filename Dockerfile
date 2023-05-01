FROM node:16.0 as build

WORKDIR /app

COPY . .
COPY .env.production .env

RUN npm install --quite --no-optional --no-fund --loglevel=error

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start:prod"]