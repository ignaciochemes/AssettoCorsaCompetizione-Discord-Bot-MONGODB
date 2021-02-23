@echo off
TITLE Servidor ACC - 5
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_5="H:\\ServidoresAFRT\\\5-Server-Laguna-Seca-Mixto"

cls
echo Levantando ACC SERVER 5
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 5...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_5%"
start accServer5.exe