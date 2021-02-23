@echo off
TITLE Servidor ACC - 1
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_0="H:\\ServidoresAFRT\\\0-Server-Barcelona-Mixto"

cls
echo Apagando ACC SERVER 0
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 0...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_0%"
taskkill /f /im accServer0.exe