@echo off
TITLE Servidor ACC - 16
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_16="H:\\ServidoresAFRT\\\16-Server-Donington-Mixto"

cls
echo Levantando ACC SERVER 16
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 16...
	timeout 1 >nul
)

cd /d C:
cd "%SERVER_ACC_16%"
start accServer16.exe