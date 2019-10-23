const express = require('express');
const multer = require('multer');
const uploadConfig = require('./Config/upload')

const SessionController = require('./Controllers/SessionController');
const SpotController = require('./Controllers/SpotController');
const DashboardController = require('./Controllers/DashboardController');
const BookingController = require('./Controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.get('/spots',SpotController.index);
routes.post('/spots',upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);

// app.put('/users/:id', (req, res) => {
//     return res.json({ id: req.params.id });
// });

//app.get('/users', (req, res) => {
  //  return res.json({ idade: req.query.idade });
//});

 //app.post('/users', (req, res) => {
  //   return res.json({ idade: req.query.idade });
//});


module.exports = routes;