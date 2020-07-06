import express from "express";
import routes from "./routes";

const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send("user index"));
userRouter.get(routes.userDetail, (req, res) => res.send("user detail"));
userRouter.get(routes.editProfile, (req, res) => res.send("edit Profile"));
userRouter.get(routes.changePassword, (req, res) => res.send("cp"));

export default userRouter;
