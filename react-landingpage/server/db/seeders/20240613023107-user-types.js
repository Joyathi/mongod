'use strict';

module.exports = {
  up: (models, mongoose) => {
   
      return models.user_types
      .insertMany([
        {
          _id:"666a5bcfe9abbf4199c8ab72",
          user_type:"admin"
        },
        {
          _id:"666a612ae9abbf4199c8ab75",
          user_type:"employee"
        }

      ])

      .then((res) =>{
        console.log(res.insertedCount)
      })
  },
  down:(model, mongoose)=>{
    return models.user_types
    .deleteMany({
         _id:{
          $in:[
            "666a5bcfe9abbf4199c8ab72",
            "666a612ae9abbf4199c8ab75"
          ],
         },
    })
    .then(res=>{
      console.log(res.deletedCount);
    });
  }
};
