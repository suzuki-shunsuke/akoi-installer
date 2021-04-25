FROM alpine:3.13.5
RUN apk add bash curl
COPY entrypoint.sh /entrypoint.sh
COPY akoi-installer /akoi-installer
ENTRYPOINT ["bash", "/entrypoint.sh"]
