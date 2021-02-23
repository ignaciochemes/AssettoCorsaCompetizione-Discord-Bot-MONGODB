@echo off
TITLE Servidor ACC - 7
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_7="H:\\ServidoresAFRT\\\7-Server-Monza-Mixto"

cls
echo Levantando ACC SERVER 7
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 7...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_7%"
start accServer7.exe