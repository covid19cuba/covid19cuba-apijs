# Microservicio API

Micro servicio encargado de enviar los datos preprocesados al bot.

## ¿Como fuciona?

Es un servicio API REST, cada endpoint se encarga de enviar ciertos datos ya preprocesados al bot.

## Variables de entorno que deben ser configuradas

`GRAPH_API`: Url de la API encargada de generar los gráficos. La API para generar los graficos es un microservicio independiente escrito en Python.

`PORT`: Puerto donde va a correr el servicio, por defecto es 3000

`MONGO_URI`: URI de la base de datos MongoDB, por defecto: `mongodb://127.0.0.1/coviddb`

## Instalación y ejecución
1. Clonar este repo.
2. Instalar dependencias de node: `yarn install` o `npm install`
3. Compilar de typescript a javascript: `yarn build` o `npm run build`
4. Ejecutar servicio: `yarn start` o `npm run start`
