@echo off
TITLE Servidor ACC - 20
COLOR 0A
:: Variables::
::Server_1.exe path
set let=%~dp0

cls
echo Levantando ACC SERVER 20
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 20...
	timeout 1 >nul
)

cd %let%
start accServer20.exe