FROM node

WORKDIR /app

RUN apt update && apt install python3 make g++ git \
   && rm -rf /var/cache/apk/*

COPY . .

RUN npm install --save --force

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
