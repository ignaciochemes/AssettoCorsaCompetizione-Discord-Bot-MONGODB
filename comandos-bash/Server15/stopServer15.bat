@echo off
TITLE Servidor ACC - 15
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_15="H:\\ServidoresAFRT\\\15-Server-Zolder-Mixto"

cls
echo Apagando ACC SERVER 15
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 15...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_15%"
taskkill /f /im accServer15.exe