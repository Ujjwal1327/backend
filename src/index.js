import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("App is running on ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("DB connection failed ", err);
  });

/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("express not able to talk with db", (err) => {
      console.log("ERROR", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log("app is listening on", process.env.PORT);
    });
  } catch (err) {
    console.log("DB connection Failed", err);
  }
})();
*/
