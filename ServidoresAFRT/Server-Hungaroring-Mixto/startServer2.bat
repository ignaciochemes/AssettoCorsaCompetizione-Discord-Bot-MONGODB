@echo off
TITLE Servidor ACC - 2
COLOR 0A
:: Variables::
::Server_1.exe path
set let=%~dp0

cls
echo Levantando ACC SERVER 2
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 2...
	timeout 1 >nul
)

cd %let%
start accServer2.exe