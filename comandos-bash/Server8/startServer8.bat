@echo off
TITLE Servidor ACC - 8
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_8="H:\\ServidoresAFRT\\\8-Server-Mount-Panorama-Mixto"

cls
echo Levantando ACC SERVER 8
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 8...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_8%"
start accServer8.exe