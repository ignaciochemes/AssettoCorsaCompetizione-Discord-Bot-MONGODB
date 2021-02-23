@echo off
TITLE Servidor ACC - 13
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_13="H:\\ServidoresAFRT\\\13-Server-Suzuka-Mixto"

cls
echo Apagando ACC SERVER 13
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 13...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_13%"
taskkill /f /im accServer13.exe