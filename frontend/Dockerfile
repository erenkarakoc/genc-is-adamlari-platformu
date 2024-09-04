FROM node:18

WORKDIR /app

RUN apt-get update && \
    apt-get install -y python3 make g++ git && \
    rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 3000

# Uygulamanın başlatılması
CMD ["npm", "start"]
