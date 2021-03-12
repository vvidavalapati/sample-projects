const express = require('express');
const cors = require('cors');
const router = require('./router');

class App {

  constructor() {
    this.app = express();
    this.init();
  }

  init() {
    this.configureMiddleware();
    this.handleRoutes();
    this.start();
    this.handleExceptions();
  }

  configureMiddleware() {
    this.app.use(cors());
    this.app.options('*', cors());
  }

  handleRoutes() {
    new router(this.app);
  }

  start() {
    this.app.listen(3000, (err) => {
      if (err) {
        console.log(`Error - ${err}`);
        process.exit(10);
      }
      console.log(`App is listening on http://localhost:3000`);
    });
  }

  handleExceptions() {
    process.on('uncaughtException', (err) => {
      try {
        console.log(err);
      } catch(e) {
        console.log(e);
      }

      process.exit(1);
    });
  }
}

new App();