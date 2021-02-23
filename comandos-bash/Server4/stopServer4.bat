@echo off
TITLE Servidor ACC - 4
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_4="H:\\ServidoresAFRT\\\4-Server-Kyalami-Mixto"

cls
echo Apagando ACC SERVER 4
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 4...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_4%"
taskkill /f /im accServer4.exe