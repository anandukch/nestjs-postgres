FROM node:16-alpine

WORKDIR /anandu/src/app

COPY package*.json ./

RUN npm install

# RUN npm run build

EXPOSE 3000

################
## PRODUCTION ##
################

# FROM node:14 AS production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.8.0/wait /wait
# RUN chmod +x /wait
# WORKDIR /anandu/src/app

# COPY --from=development /anandu/src/app/ .
COPY . ./


# EXPOSE 3000

# run app
# CMD [ "node", "dist/main"]
CMD [ "yarn", "start:dev" ]