@echo off
TITLE Servidor ACC - 1
COLOR 0A
:: Variables::
::Server_1.exe path
set SERVER_ACC_0="H:\\ServidoresAFRT\\\0-Server-Barcelona-Mixto"

cls
echo Levantando ACC SERVER 0
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 0...
	timeout 1 >nul
)

cd "%SERVER_ACC_0%"
start accServer0.exe