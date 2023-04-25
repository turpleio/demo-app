FROM node:8-slim
RUN mkdir -p /usr/src/app
COPY index.js /usr/src/app
CMD [ "node", "/usr/src/app/index" ]

