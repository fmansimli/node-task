import Label from "../models/label";
import { getOpenRequests } from "./requests";

export async function getAllLabels(req, res, next) {
  try {
    const labels = await Label.findAll();
    res.status(200).json(labels);
  } catch (error) {
    next(err);
  }
}

export async function getOneLabel(req, res, next) {
  const id = req.params.id;
  try {
    const label = await Label.findByPk(id);
    if (!label) {
      return next();
    }
    res.status(200).json(label);
  } catch (error) {
    next(err);
  }
}

export async function createLabel(req, res, next) {
  const { labelNo, requestId } = req.body;
  try {
    const label = await Label.create({ labelNo, requestId });
    res.status(201).json(label);
  } catch (error) {
    next(error);
  }
}

export async function editLabel() {
  const { labelNo, requestId } = req.body;
  try {
    const upt = await Label.update({ labelNo }, { where: { requestId } });
    res.status(200).json(upt);
  } catch (error) {
    next(error);
  }
}

export async function removeLabel() {
  const { id } = req.body;
  try {
    await Label.destroy({ where: { id } });
    res.status(204).json();
  } catch (error) {
    next(error);
  }
}
