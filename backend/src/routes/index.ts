import { Router } from "express";
import { getProjects } from "../controllers/ProjectController.js";
import { handleContactForm } from "../controllers/ContactController.js";

const router = Router();

router.get("/projects", getProjects);
router.post("/contact", handleContactForm);

export default router;
