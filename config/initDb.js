const mongoose = require("mongoose");

const mongoUri =
  process.env.MONGODB_URI ||
  `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds139956.mlab.com:39956/heroku_5mlp82b4`;

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

module.exports = () => {
  return mongoose
    .connect(mongoUri, dbOptions)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.error(err));
};
