@echo off
TITLE Servidor ACC - 7
COLOR 0A
:: Variables::
::Server_1.exe path
set let=%~dp0

cls
echo Levantando ACC SERVER 7
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 7...
	timeout 1 >nul
)

cd %let%
start accServer7.exe