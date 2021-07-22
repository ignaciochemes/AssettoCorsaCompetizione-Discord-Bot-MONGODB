@echo off
TITLE Servidor ACC - 10
COLOR 0A
:: Variables::
::Server_1.exe path
set let=%~dp0

cls
echo Apagando ACC SERVER 10
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 10...
	timeout 1 >nul
)

cd %let%
taskkill /f /im accServer10.exe