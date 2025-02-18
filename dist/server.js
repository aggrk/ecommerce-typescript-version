import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/confing.env` });
// const PORT = Number(process.env.PORT);
console.log(process.env);
// app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
