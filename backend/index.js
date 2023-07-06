const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

const db = require('./queries');

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.put('/put_signup/:id', db.updateChemist);

app.post('/signup', db.createchemist_signup);
app.get('/signup/:id', db.getUsersChemist_id);
app.get('/signup', db.getUsersChemist);

app.post('/users_master', db.createlogin);
app.get('/users_master', db.getLoginUsers);
app.get('/users_master/:id', db.getLoginUsers_id);

app.post('/adding_operator', db.createadding_operator);
app.get('/adding_operator/:id', db.getoperator_id);
app.get('/adding_operator', db.getoperator);

app.post('/product_master', db.ProductInquiry);


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});



