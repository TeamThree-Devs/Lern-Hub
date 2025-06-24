# Build Stage
FROM node:22.14.0-alpine as build
WORKDIR /app
COPY . .
RUN npm ci && npm run build --configuration production

# Runtime Stage
FROM nginx:alpine
COPY --from=build /app/dist/lern-hub /usr/share/nginx/html
