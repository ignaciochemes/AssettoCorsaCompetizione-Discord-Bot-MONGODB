<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/siegmund0/AssettoCorsaCompetizione-Discord-Bot-MONGODB">
    <img src="https://i.imgur.com/L98PTPI.png" alt="Logo" width="600" height="150">
  </a>

  <h3 align="center">Assetto Corsa Competizione Discord Bot</h3>

  <p align="center">
    Developed for AFRT Community. By Tato
    <br />
    <br />
    <a href="https://www.afondoracingteam.com/">AFRT Web</a>
    ·
    <a href="https://github.com/siegmund0/AssettoCorsaCompetizione-Discord-Bot-MONGODB/issues">Report Bug</a>
    ·
    <a href="https://github.com/siegmund0/AssettoCorsaCompetizione-Discord-Bot-MONGODB/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
    <img src="https://i.imgur.com/ulipmvt.png"/>
</p>

Con este bot para discord usted podra controlar sus servidores de ACC mediante comandos, donde existe un preset de configuraciones para todas las pistas. Puede editarlas y configurarlas a su gusto.

Este bot esta desarrollado para la comunidad AFRT (A fondo racing team)

<p align="center">
    <img src="https://i.imgur.com/ByQpFbg.png"/>
</p>
<br>
<p align="center">
    <img src="https://i.imgur.com/1rfarA2.png"/>
</p>

## Lap Time & Best Lap Time
<p align="center">
    <img src="https://i.imgur.com/jQq5L9n.png"/>
</p>

### Built With

Para realizar este proyecto use:
* [Node.js](https://nodejs.org/en/)
* [MongoDb](https://www.mongodb.com/)

<!-- GETTING STARTED -->
## Getting Started

Primero instale la version mas actual de Node.js
Instale LOCALMENTE MongoDB. Tenga en cuenta que la conexion se ralizara de manera local. (Puede configurarla con un cluster que disponga en https://www.mongodb.com/)

### Installation

1. Clone esta repo y asegurece de estar en la rama master
   ```sh
   git clone https://github.com/siegmund0/AssettoCorsaCompetizione-Discord-Bot-MONGODB
   ```
2. Instale los paquetes de NPM
   ```sh
   npm install
   ```
3. Ingrese sus datos en `.env`
   ```
        "TOKEN": "YOUR-DISCORD-BOT-TOKEN-HERE",
        "PREFIX": "!",
        "DB_URI": "YOUR-MONGODB-URL-HERE"
   ```