@echo off
TITLE Servidor ACC - 12
COLOR 0A
:: Variables::
::Server_1.exe path
set let=%~dp0

cls
echo Apagando ACC SERVER 12
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 12...
	timeout 1 >nul
)

cd %let%
taskkill /f /im accServer12.exe