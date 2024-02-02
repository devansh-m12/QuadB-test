import { Router } from "express";
import Profile from "../controller/display.controller.js";

const profileRouter = Router();
const profile = new Profile();

profileRouter.get("/fetch", profile.fetchAll);
profileRouter.get("/all", profile.getAllData);
profileRouter.get("/",(req,res)=>{
    res.send("Hello from backend");
});

export default profileRouter;