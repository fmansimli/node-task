import { Router } from "express";
import SuppSeq from "../models/suppSeq";
import { getOpenRequests } from "../services/requests";

const router = Router();

router.get("/suppCodeAndYear", async (req, res, next) => {
  try {
    const openRequests = await getOpenRequests("open");
    const subSeqs = await SuppSeq.findAll({
      where: {
        suppCode: openRequests,
        year: parseInt(new Date().getFullYear().toString().substr(-2)),
      },
      attributes: ["seq"],
    });

    res.status(200).json(subSeqs);
  } catch (error) {
    next(error);
  }
});

export default router;
