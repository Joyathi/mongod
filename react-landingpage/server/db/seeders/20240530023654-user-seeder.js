'use strict';

module.exports = {
  up: (models, mongoose) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return models.users
          .insertMany ([
            {
              _id: "665ffd343eabb7ec218daac8",
              firstname: "manu",
              lastname: "john",
              gender: "Male",
              mobil_no: "9874563211",
              email:"manujohn@gmail.com",
              password : " manu123"//manu123
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
