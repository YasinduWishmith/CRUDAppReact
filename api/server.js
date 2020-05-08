const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./DB');

const userRoute = require('./user.routes');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser:true}).then(() => {
  console.log('Database connected successfully !')
},
  error => {
      console.log('Database could not be connected : ' + error)
  }
)

app.use(cors);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/users',userRoute);

const server = app.listen(PORT, () => {
  console.log('Connected to port ' + PORT)
})

app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});