FROM node:18-alpine
RUN apk add --no-cache vips-dev vips make python3 gcc g++ libc6-compat
WORKDIR /app
COPY . .
RUN npm install sharp
EXPOSE 3000
CMD ["npm", "start"]
