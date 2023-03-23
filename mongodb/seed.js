const {nour}=require('./product.js')
const {Ramadan} = require("./product.js");

const DataProduct = require('../data.json');


const insertSampleProducts = function () {
  Ramadan.create(DataProduct)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      nour.close();
    });
};

insertSampleProducts();