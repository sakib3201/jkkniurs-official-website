FROM node:18.17.0-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
