# Estágio de construção
FROM node:alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:alpine

WORKDIR /app

COPY --from=builder /app .

# Estágio de produção
RUN yarn cache clean

EXPOSE 3438

CMD [ "yarn", "start" ]
