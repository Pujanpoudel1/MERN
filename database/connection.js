const { Sequelize, DataTypes } = require("sequelize");
// another way for accesing sequelize

// const sequelize = require("sequelize")
// const Sequelize =sequelize.Sequelize;
// const DataTypes =sequelize.DataTypes;

// sequilize-->object
// Sequelize-->class
// new Sequelize()--> class instantiation
//object creation

// const bookModel = require("./models/book.model")
//import gareko

const sequelize = new Sequelize(
  "postgresql://postgres.kzeidsbekxpivdmkdpac:iamthedangerskylerwhite@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

sequelize.authenticate()
.then(()=>{
    console.log("Authentication is done, Connected!!")
})
.catch((err)=>{
    console.log("Error!"+err)
})
// const bookModel = require("./models/book.model")
// const info ={}
// info.name="Pujan Poudel",
// info.age=22;

// const info={
//     name: "Pujan Poudel",
//     age: 22
// }

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.books = require("./models/book.model")(sequelize,DataTypes)
db.users = require("./models/user.model")(sequelize,DataTypes)
// const db ={
//     Sequelize : Sequelize,
//     sequelize : sequelize
// }

//code for migrate
sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate has been done!!")
})
//for changing the individiual data on database 
//sequelize.sync({alter: true})
//for changing the whole data 
// sequelize.sync({force:true})
//we have to change 'True' to 'False' after changing the value of data
module.exports = db