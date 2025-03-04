import express from "express";
import router from "./routes/api";
import bodyParser from "body-parser";
import db from "./utils/database";

async function connectDatabase() {
  try {
    const message = await db();
    const app = express();

    const PORT = 3000;

    app.use(bodyParser.json());

    app.use("/api", router);

    app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

connectDatabase();
