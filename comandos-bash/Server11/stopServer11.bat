@echo off
TITLE Servidor ACC - 1
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_11="H:\\ServidoresAFRT\\\11-Server-Silverstone-Mixto"

cls
echo Apagando ACC SERVER 11
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 11...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_11%"
taskkill /f /im accServer11.exe