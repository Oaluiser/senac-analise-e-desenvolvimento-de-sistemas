
FROM node
WORKDIR /Trabalho3
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build
CMD [ "node", "dist/index.js" ]