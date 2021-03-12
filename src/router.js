const commissionController = require('./app/commissions/commission.controller');
const router = require('express').Router();

class Router {
  constructor(app) {
    this.app = app;
    this.configureRoutes();
  }

  configureRoutes() {
    router.get('/commissions/get', commissionController.getCommissions);
    router.get('/commissions/csv', commissionController.downloadCommissionsCSV);
    router.get('/commissions/pdf', commissionController.downloadCommissionsPDF);

    this.app.use('/api/v1', router);
  }
}

module.exports = Router;