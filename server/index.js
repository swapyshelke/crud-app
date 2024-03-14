import express from "express";
import connection from "./database.js";
import Router from "./routes/route.js";
import "dotenv/config";
import cors from 'cors'
import bodyParser from "body-parser";


const app = express();

const PORT = 3030;

// database credentials
const username_db = process.env.DB_USERNAME;
const password_db = process.env.DB_PASSWORD;




// midlewares
app.use(cors());
app.use("/", Router);
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.json("hello from server");
});

connection(username_db, password_db);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
