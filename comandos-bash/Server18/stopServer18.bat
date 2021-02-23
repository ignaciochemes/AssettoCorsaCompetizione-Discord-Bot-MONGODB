@echo off
TITLE Servidor ACC - 18
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_18="H:\\ServidoresAFRT\\\18-Server-Snetterton-Mixto"

cls
echo Apagando ACC SERVER 18
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 18...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_18%"
taskkill /f /im accServer18.exe