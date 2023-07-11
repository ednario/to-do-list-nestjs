FROM node


WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npx", "prisma", "migrate", "dev", "&&", "npm", "run", "start:dev"]