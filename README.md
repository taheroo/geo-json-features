# Nodejs Simple Authentication System

## Prerequisites

- [Node JS](https://nodejs.org/)

## Base dependencies

- [express](https://github.com/expressjs/express) minimalist web framework for node.
- [body-parser](https://github.com/expressjs/body-parser#readme) as body parsing middleware.
- [helmet](https://github.com/helmetjs/helmet) Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

## How to Install (CLI)

1. Make sure that you have Node.js and npm installed.
2. Clone this repo using `git clone https://github.com/taheroo/geo-json-features`
3. Run `yarn` in order to install dependencies.</br>
4. Run `yarn start` to start app.
5. You can check the endpoints using Postman by making a request to `localhost:3000/geoJson?bbox=36.7710000,10.1737000,36.7862000,10.2074000`

## Project structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `api`: This folder contains main api configurations.
  - `services`: Folder that contains all the business logic.
  - `utils`: Folder that contains all scripts.
  - `app.js`: Entry point of the application.
