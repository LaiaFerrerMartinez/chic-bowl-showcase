FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
# Install all deps (including dev) so we can run the build inside the container
RUN npm install
COPY . .
# Build the production assets
RUN npm run build
EXPOSE 3000
# Start the preview server (npm start should run vite preview)
CMD ["npm", "start"]
