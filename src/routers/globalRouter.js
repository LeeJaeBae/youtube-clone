import express from "express";
import routes from "./routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("HOME"));
globalRouter.get(routes.join, (req, res) => res.send("JOIN"));
globalRouter.get(routes.login, (req, res) => res.send("HOME"));
globalRouter.get(routes.logout, (req, res) => res.send("HOME"));
globalRouter.get(routes.search, (req, res) => res.send("HOME"));

export default globalRouter;