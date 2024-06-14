'use strict';

module.exports = {
  up: (models, mongoose) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return models.users
          .insertMany ([
            {
              _id: "6662773aa253762ae5fedeea",
             name: "manu john",
              gender: "Male",
              mobile_no: "9874563211",
              email:"manujohn@gmail.com",
              password : "$2y$10$yp00iyGUD1R.llTepMbWKeoxYRXm206xT1aSidDzs.n7ZO6ViHbsu"//manu@12
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
              "6662773aa253762ae5fedeea",
            ],
          },
          })
        .then(res => {
        // Prints "1"
        console.log(res.deletedCount);
        });
    
  }
};
