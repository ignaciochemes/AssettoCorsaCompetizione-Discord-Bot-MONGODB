@echo off
TITLE Servidor ACC - 5
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_5="H:\\ServidoresAFRT\\\5-Server-Laguna-Seca-Mixto"

cls
echo Apagando ACC SERVER 5
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 5...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_1%"
taskkill /f /im accServer5.exe