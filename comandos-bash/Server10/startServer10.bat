@echo off
TITLE Servidor ACC - 10
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_10="H:\\ServidoresAFRT\\\10-Server-Paul-Ricard-Mixto"

cls
echo Levantando ACC SERVER 10
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 10...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_10%"
start accServer10.exe