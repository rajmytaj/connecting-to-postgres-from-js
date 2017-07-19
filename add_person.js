var myArgs = process.argv.slice(2,5);

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : 'localhost',
    user : 'development',
    password : 'development',
    database : 'vagrant'
  }
});

// const reformatResults = function (resultsRow) {
//   resultsRow.forEach((item, index) => {
//     let firstName = item.first_name;
//     let lastName = item.last_name;
//     let birthDate = item.birthdate.toString().substring(0,15);
//     console.log(`- ${index +1}: ${firstName} ${lastName}, born '${birthDate}'`);
//   });
// }
console.log(myArgs);
console.log("rohit ", myArgs[2]);

knex('famous_people').insert({first_name: myArgs[0], last_name: myArgs[1], birthdate: myArgs[2]})
.asCallback(function(err, rows) {
  if (err) return console.error(err);
});

knex.destroy();