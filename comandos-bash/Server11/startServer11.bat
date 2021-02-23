@echo off
TITLE Servidor ACC - 11
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_11="H:\\ServidoresAFRT\\\11-Server-Silverstone-Mixto"

cls
echo Levantando ACC SERVER 11
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 11...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_11%"
start accServer11.exe