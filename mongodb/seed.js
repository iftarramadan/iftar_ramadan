const { db } = require("./index.js");
const Product = require("./product.js");

const DataProduct = require('../data.json');


const insertSampleProducts = function () {
  Product.create(DataProduct)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSampleProducts();