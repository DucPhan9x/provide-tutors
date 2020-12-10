import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import { envVariables } from "../configs";
const { nodeEnv, jwtSecret } = envVariables;
const morgan = nodeEnv !== "production" && require("morgan");

export const defaultMiddleware = (app) => {
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );
    app.use(cookieParser(jwtSecret));
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(
        helmet({
            contentSecurityPolicy: false,
        })
    );
    app.use(cors());
    app.use(express.static("public"));
    app.use(express.static(path.join(__dirname, "js")));
    app.get("/", function (req, res) {
        res.send("hi");
    });
    app.get("/api", function (req, res) {
        res.send("hihi");
    });
    morgan && app.use(morgan("dev"));
};
