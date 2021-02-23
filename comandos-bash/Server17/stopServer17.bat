@echo off
TITLE Servidor ACC - 17
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_17="H:\\ServidoresAFRT\\\17-Server-Oulton-Mixto"

cls
echo Apagando ACC SERVER 17
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 17...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_17%"
taskkill /f /im accServer17.exe