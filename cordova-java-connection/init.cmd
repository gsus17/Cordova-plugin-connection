@ECHO OFF
TITLE Inicializa el proyecto
ECHO Descargando dependencias npm
CALL npm i
ECHO Descargando dependencias bower
CALL bower install
ECHO Descargando dependencias instalando dependencias bower
CALL bower-installer
ECHO Compilando el proyecto
CALL gulp --debug
ECHO Iniciando el servidor local
server