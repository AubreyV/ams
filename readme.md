### nginx/default.conf

```
server {
    listen 80;

    root  /var/www/html/ams/public/;
    index index.php

    access_log /var/log/nginx/access.log;
    error_log  /var/log/nginx/error.log;

    location / {
        try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
          fastcgi_split_path_info ^(.+\.php)(/.+)$;
          fastcgi_pass   app:9000;
          fastcgi_index  index.php;

          include        fastcgi_params;
          fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
          fastcgi_param  PATH_INFO $fastcgi_path_info;
      }
}
```

### php/Dockerfile

```
# install composer
FROM php:7.2.12-fpm
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer
RUN apt-get update \
&& apt-get install -y \
git \
zip \
unzip \
vim \
libzip-dev \
zlib1g-dev 

RUN apt-get update \
    && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo_mysql pdo_pgsql

RUN docker-php-ext-install mysqli zip && docker-php-ext-enable mysqli
 
WORKDIR /var/www/html
```

### docker-compose.yml
```
version: '3'
services:
  nginx:
    image: nginx:1.15.6
    ports:
      - "80:80"
    depends_on:
      - app
    volumes:
      - ./docker/nginx/default.conf:/etc/nginx/conf.d/default.conf
      - .:/var/www/html
  app:
    build: ./docker/php
    depends_on:
      - mysql
    volumes:
      - .:/var/www/html
  mysql:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ams
      MYSQL_USER: user
      MYSQL_PASSWORD: password
      MYSQL_ROOT_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - mysql-data:/var/lib/mysql
volumes:
  mysql-data:
```
