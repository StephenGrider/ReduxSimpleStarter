FROM node:latest

WORKDIR /usr/src/app

RUN echo "int chown() { return 0; }" > \
    preload.c && \
    gcc -shared -o /libpreload.so \
    preload.c && \
    rm preload.c
ENV LD_PRELOAD=/libpreload.so

COPY . /usr/src/app
