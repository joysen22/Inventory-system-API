const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

// database connection
mongoose
  .connect(process.env.DATABASE, {
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log(`Database connection is successful 🛢`);
  });

// server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
