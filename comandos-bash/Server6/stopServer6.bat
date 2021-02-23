@echo off
TITLE Servidor ACC - 6
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_6="H:\\ServidoresAFRT\\\6-Server-Misano-Mixto"

cls
echo Apagando ACC SERVER 6
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 6...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_1%"
taskkill /f /im accServer6.exe