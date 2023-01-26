FROM node

RUN apt-get update

RUN mkdir /home/@danielson73s/ngx-bootstrap

WORKDIR  /home/@danielson73s/ngx-bootstrap

COPY ./ ./

RUN npm i

RUN npm run build

RUN npm run link

RUN npm run build:dynamic

EXPOSE 3000

CMD ["node", "demo/dist/server.js"]

