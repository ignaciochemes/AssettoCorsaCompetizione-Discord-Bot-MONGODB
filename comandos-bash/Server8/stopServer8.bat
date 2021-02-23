@echo off
TITLE Servidor ACC - 8
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_8="H:\\ServidoresAFRT\\\8-Server-Mount-Panorama-Mixto"

cls
echo Apagando ACC SERVER 8
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 8...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_8%"
taskkill /f /im accServer8.exe