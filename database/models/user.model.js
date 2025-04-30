const userModel = (sequelize, DataTypes)=>{
    const user =  sequelize.define("User",{
          username : {
              type : DataTypes.STRING
          },
          password : {
              type : DataTypes.STRING
          },
          email : {
              type : DataTypes.STRING
          }
      })
      return user
  }
  module.exports =userModel