@echo off
TITLE Servidor ACC - 14
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_14="H:\\ServidoresAFRT\\\14-Server-Zandvoort-Mixto"

cls
echo Levantando ACC SERVER 14
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 14...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_14%"
start accServer14.exe