@echo off
TITLE Servidor ACC - 3
COLOR 0A
:: Variables::
::Server_1.exe path
set let=%~dp0

cls
echo Apagando ACC SERVER 3
FOR /L %%s IN (5,-1,0) DO (
	cls
	echo Apagando server, espere %%s segundos para terminar el proceso SERVER 3...
	timeout 1 >nul
)

cd %let%
taskkill /f /im accServer3.exe