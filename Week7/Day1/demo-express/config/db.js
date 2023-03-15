const knex = require('knex');

const db = knex ({
    client: 'localhost',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'yx4pdchuki',
      database : 'dvdrental'
    }
  });

  db.select('*').from('country')
  .then(rows => {
    console.log(rows);
  })

  .catch(err => {
    console.log(err)})
