@echo off
TITLE Servidor ACC - 2
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_2="H:\\ServidoresAFRT\\\2-Server-Hungaroring-Mixto"

cls
echo Apagando ACC SERVER 0
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 2...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_2%"
taskkill /f /im accServer2.exe