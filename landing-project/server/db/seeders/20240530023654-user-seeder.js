'use strict';

module.exports = {
  up: (models, mongoose) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return models.users
          .insertMany ([
            {
              _id: "665fd9edc95983db42608a75",
              firstname: "manu",
              lastname: "jhon",
              gender: "Male",
              mobil_no: "9874563210",
              email:"manujhon@gmail.com",
              password : "$2y$07$TVaixWAGYKOmnZfJfFZwpeuxW/qZ/nkVkaghK62rjfQ44EuhUte2y"       //manu123
            }
          ])
          .then((res) => {
            console.log(res.insertedCount)
          })
    
  },

  down: (models, mongoose) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return models.users
        .deleteMany({
          _id: {
            $in: [
              "6657ecec70745989b1757fd7",
            ],
          },
          })
        .then(res => {
        // Prints "1"
        console.log(res.deletedCount);
        });
    
  }
};
