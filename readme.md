<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Assetto Corsa Competizione Discord Bot</h3>

  <p align="center">
    Desarrollado para AFRT con amor. By Tato
    <br />
    <a href="https://github.com/siegmund0/AssettoCorsaCompetizione-Discord-Bot-MONGODB"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.afondoracingteam.com/">AFRT Web</a>
    ·
    <a href="https://github.com/siegmund0/AssettoCorsaCompetizione-Discord-Bot-MONGODB/issues">Report Bug</a>
    ·
    <a href="https://github.com/siegmund0/AssettoCorsaCompetizione-Discord-Bot-MONGODB/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Con este bot para discord usted podra controlar sus servidores de ACC mediante comandos, donde existe un preset de configuraciones para todas las pistas. Puede editarlas y configurarlas a su gusto.

Este bot esta desarrollado para la comunidad AFRT (A fondo racing team)


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
3. Ingrese sus datos en `config.js`
   ```JSON
   {
        "TOKEN": "YOUR-DISCORD-BOT-TOKEN-HERE",
        "PREFIX": "!",
        "DB_URI": "YOUR-MONGODB-URL-HERE"
   }
   ```