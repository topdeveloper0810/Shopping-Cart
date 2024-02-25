const mongoose = require("mongoose");
const { MONGO_URL } = require("../config/keys");
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
// mongoose.connect(MONGO_URL, { useNewUrlParser: true });
// // Validation
//  mongoose.connection
//   .on('open', () => console.info('Database connected!'))
//   .on('error', err => console.info('Create a database and put the link into config/index.js/MONGO_URL'));

// mongoose.connect(process.env.MONGO_URI);
mongoose
  .connect("mongodb://127.0.0.1:27017/myld", {
    useNewUrlParser: "true",
    useUnifiedTopology: "true",
  })
  .then(() => console.log("MongoDB is Connected."))
  .catch((err) =>
    console.info(
      "Create a database and put the link into config/index.js/MONGO_URL"
    )
  );
// mongoose.connection.on("error", err => {

//   console.log("err", err)

// })
// mongoose.connection.on("connected", () => {

//   console.log("mongoose is connected")

// })
