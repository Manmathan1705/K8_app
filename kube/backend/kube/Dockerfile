FROM node:16-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node *.json ./

USER node

COPY --chown=node:node . .

EXPOSE 4000

CMD [ "node", "index.js" ]