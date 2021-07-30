import { Router } from "express";

import {
  getAllRequests,
  getOneRequest,
  createRequest,
  removeRequest,
  editRequest,
} from "../controllers/requests";

const router = Router();

router.get("/", getAllRequests);

router.get("/:id", getOneRequest);

router.post("/", createRequest);

router.put("/", editRequest);

router.delete("/", removeRequest);

export default router;
