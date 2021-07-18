@echo off
TITLE Servidor ACC - 12
COLOR 0A
:: Variables::
::Server_1.exe path
set let=%~dp0

cls
echo Levantando ACC SERVER 12
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 12...
	timeout 1 >nul
)

cd %let%
start accServer12.exe