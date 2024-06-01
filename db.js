const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const mongoUri = process.env.mongoUri;

//console.log(process.env.mongoUri);

const connectDb = async () => {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(mongoUri);
  console.log(mongoose.connection.readyState, " --- Connection State");
};

module.exports = {
  connectDb,
  mongoose,
};