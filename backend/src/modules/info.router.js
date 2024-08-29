import { Router } from "express";
import * as infoController from "./info.controller.js";
import { uploadFile } from "../utils/multer.js";
import { isAuth } from "../middleware/isAuth.js";

const router = Router();

router.post(
  "/Project&Skill",
  isAuth,
  uploadFile().fields([
    { name: "skill", maxCount: 1 },
    { name: "project", maxCount: 1 },
  ]),
  infoController.projectAndSkill
);

router.get("/getAll", infoController.getAll);
router.delete("/delete_skill/:id", infoController.deleteSkill);
router.delete("/delete_project/:id", infoController.deleteProject);

router.patch(
  "/edit_project/:id",
  // uploadFile().fields([{ name: "project", maxCount: 1 }]),
  uploadFile().single('project'),

  infoController.edit_project
);



router.patch(
  "/edit_skill/:id",
  // uploadFile().fields([{ name: "skill", maxCount: 1 }]),
  uploadFile().single('skill'),

  infoController.edit_skill
);

router.get('/get_One_Data/:id',infoController.getOneData)
export default router;
