FROM nginx:1.15-alpine
COPY dist /usr/share/nginx/html/
WORKDIR /etc/nginx/html
