'use strict';

module.exports = {
  up: (models, mongoose) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return models.users
          .insertMany ([
            {
              _id: "6657ecec70745989b1757fd7",
              name: "John",
              // lastname: "Varghese",
              gender: "Male",
              mobile_no: "9874563210",
              email:"johnvarghese12345@gmail.com",
              password : "$2y$10$CJftu6Ojp9tPHeTspEVLX.jgLlIr489Xl/RorZLPBVbnGBQtI4bcS",       //John@123
              user_type : "6668bcc6a10df1c8ac10c153"
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
