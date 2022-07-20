FROM          node:16-alpine3.15
LABEL         author="Monica Apaza"
ENV           PORT=3000
WORKDIR       /var/www
COPY          package.json package-lock.json ./
RUN           npm install
COPY          . ./
EXPOSE        $PORT
ENTRYPOINT     [ "node" , "api/index.js"]