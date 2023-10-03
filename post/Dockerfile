FROM node:18-alpine3.18

WORKDIR /app

COPY package.json ./

COPY prisma ./prisma/

RUN yarn install

RUN yarn add prisma --dev

COPY . .

RUN yarn build

# COPY --from=build /app/package*.json ./
# COPY --from=build /app/dist ./dist
# COPY --from=build /app/prisma ./prisma

EXPOSE 3000

CMD [  "yarn", "start:migrate" ]