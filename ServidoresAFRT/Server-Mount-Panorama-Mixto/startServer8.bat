@echo off
TITLE Servidor ACC - 8
COLOR 0A
:: Variables::
::Server_1.exe path
set let=%~dp0

cls
echo Levantando ACC SERVER 8
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 8...
	timeout 1 >nul
)

cd %let%
start accServer8.exe