FROM node:20.0.0-slim

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .
COPY .env.production .env

RUN npm install --quite --no-optional --no-fund --loglevel=error

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]