import { Router } from "express";
import {
  createLabel,
  getAllLabels,
  getOneLabel,
  editLabel,
  removeLabel,
} from "../controllers/labels";

const router = Router();

router.get("/", getAllLabels);

router.get("/:id", getOneLabel);

router.post("/", createLabel);

router.put("/", editLabel);

router.delete("/", removeLabel);

export default router;
