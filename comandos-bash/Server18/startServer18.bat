@echo off
TITLE Servidor ACC - 18
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_18="H:\\ServidoresAFRT\\\18-Server-Snetterton-Mixto"

cls
echo Levantando ACC SERVER 18
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 18...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_18%"
start accServer18.exe