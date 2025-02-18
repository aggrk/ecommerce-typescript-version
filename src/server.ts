import * as http from "http";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./confing.env" });

// const PORT = Number(process.env.PORT);
console.log(process.env);

// app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
