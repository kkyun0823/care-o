import express from "express";
import globalRouter from "./router";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.use("/", globalRouter);

export default app;
