FROM nginx:1.29-alpine

COPY index.html site.css site.js /usr/share/nginx/html/
COPY imersao_engenhariadedados_ia/*.html /usr/share/nginx/html/imersao_engenhariadedados_ia/

EXPOSE 80
