@echo off
TITLE Servidor ACC - 15
COLOR 0A
:: Variables::
::Server_1.exe path
set let=%~dp0

cls
echo Levantando ACC SERVER 15
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Levantando server, espere %%s segundos para iniciar SERVER 15...
	timeout 1 >nul
)

cd %let%
start accServer15.exe