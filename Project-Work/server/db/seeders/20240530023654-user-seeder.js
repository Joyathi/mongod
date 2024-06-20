'use strict';

module.exports = {
  up: (models, mongoose) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return models.users
          .insertMany ([
            {
              _id: "6673b9d6919318ee8b7e338a",
              name: "manu",
              // lastname: "Varghese",
              gender: "Male",
              mobile_no: "9874563210",
              email:"manu12@gmail.com",
              password : "$2y$10$B25QiuCCKFgUHfVWFNXhU.OmJFHMjBhMYA5EKVET.xqIKA4VIkmk.",       //manu@12
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
