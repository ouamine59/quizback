FROM mlocati/php-extension-installer:2 AS php_extension_installer_upstream

FROM php:8.2.9-fpm-alpine

WORKDIR /srv/http

RUN apk add --no-cache \
        bash \
        acl \
        fcgi \
        file \
        gettext \
        git \
    ;

COPY --from=php_extension_installer_upstream --link /usr/bin/install-php-extensions /usr/local/bin/

RUN set -eux; \
    install-php-extensions \
        apcu \
        intl \
        opcache \
        pdo_mysql \
    ;

###> recipes ###
###< recipes ###

ENV COMPOSER_ALLOW_SUPERUSER=1

ENV PATH="${PATH}:/root/.composer/vendor/bin"
RUN PATH=$PATH:/srv/http/vendor/bin:bin:/usr/local/bin

COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

ENV APP_ENV=dev XDEBUG_MODE=off

COPY ./app/ /srv/http/

RUN composer install

RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony5/bin/symfony /usr/local/bin/symfony

EXPOSE 8065
CMD ["symfony", "server:start", "--port=8065"]