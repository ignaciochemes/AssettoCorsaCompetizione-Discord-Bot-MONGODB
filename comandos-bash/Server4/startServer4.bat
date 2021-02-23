@echo off
TITLE Servidor ACC - 4
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_4="H:\\ServidoresAFRT\\\4-Server-Kyalami-Mixto"

cls
echo Levantando ACC SERVER 4
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 4...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_4%"
start accServer4.exe