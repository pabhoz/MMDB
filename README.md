# MMDB
Multimedia Database 2019-I Project

## Descripción

El proyecto está dividido en dos partes, un cliente (que es este) encargado del procesamiento de los datos y un [servidor](https://github.com/pabhoz/MMDBServer) encargado de almacenar los registros en MariaDB/MySQL.

El proyecto permite arrojar archivos multimedia a un área y que este sea pocesado y manejado adecuadamente, además, el usuario podrá almacenar dicho elemento en la base de datos junto con su metadata o características, las cuales nos ayudarán posteriormente a consultarle.

## Tecnologías

1. HTML5
2. CSS3
3. JS (ES6 OOP)
4. PHP
5. SHELL/BAT
6. SQL

## APIS HTML5

1. Drag & drop
2. FileReader
3. Audio
4. Video
5. Image
6. Canvas

## Configuración para el proyecto

Como el proyecto maneja archivos multimedia y peticiones de tipo CORS en entornos locales, existen ciertas configuraciones a tener en cuenta tanto en los archivos del servidor (my.conf, php.ini), como en las peticiones (en cuanto a las cabezeras tanto en el cliente como en el servidor). A continuación listaré la lista de acciones a tomar:

### 1. Configuraciones en httpd.conf


#### php.ini
```ini
	; máxima memoria de ejecución
	memory_limit=512M
	; Aceptar un valor máximo de 1GB para el envío por POST
	post_max_size=1024M
	; Maximum allowed size for uploaded files.
	; http://php.net/upload-max-filesize
	; opcional si posteriormente piensan adicionar inputs de tipo file 
	upload_max_filesize=1024M
```

#### my.cnf (en algunos casos my.ini)
```ini
	[mysqldump]
	quick
	max_allowed_packet = 128M
	
	# The MySQL server
	[mysqld]
	max_allowed_packet = 128M
	
	innodb_log_file_size = 256M
```

