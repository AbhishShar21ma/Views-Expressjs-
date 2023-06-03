import express from "express";
const router = express.Router();
import { controlhome } from "./homecontroller.js";
import { controlabout } from "./aboutcontroller.js";
router.get("/home", controlhome);
router.get("/about", controlabout);

export default router;
