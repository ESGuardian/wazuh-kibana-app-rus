# Wazuh - Kibana App Русская версия

## Необходимы

- Wazuh HIDS 2.0
- Wazuh RESTful API 2.0
- Kibana 5.5.0 
- Elasticsearch 5.5.0

## Установка

```/usr/share/kibana/bin/kibana-plugin install https://github.com/ESGuardian/LittleBeat/raw/master/addons/wazuh-ids/wazuhapp_rus.zip ```

## Замена оригинальной wazuhapp

Удалите плагин, используя kibana-plugin tool

```/usr/share/kibana/bin/kibana-plugin remove wazuh ```

Установите новый плагин

```/usr/share/kibana/bin/kibana-plugin install https://github.com/ESGuardian/LittleBeat/raw/master/addons/wazuh-ids/wazuhapp_rus.zip ```

## Восстановление оригинальной wazuhapp

```/usr/share/kibana/bin/kibana-plugin remove wazuh ```

Установите оригинальный плагин

```/usr/share/kibana/bin/kibana-plugin install https://github.com/ESGuardian/LittleBeat/raw/master/addons/wazuh-ids/wazuhapp.zip ```


## Используются программы и компоненты

* API from Elastic and Kibana (elastic.co).
* Angular Material (material.angularjs.org).
* Bootstrap (getbootstrap.com).
* AngularJS.
* Node.js (Ryan Dahl).
* NPM packages Angular animate, aria, cookies, md5, needle and cron.

## License and copyright

Wazuh App Copyright (C) 2016 Wazuh Inc. (License GPLv2)  
Косметические изменения ESGuardian касаются только языка интерфейса

## Ссылки

* [LittleBeat wiki](https://github.com/ESGuardian/LittleBeat/wiki)
* [Wazuh website](https://wazuh.com)
* [Wazuh documentation](https://documentation.wazuh.com)
* [Elastic stack](https://elastic.co)
