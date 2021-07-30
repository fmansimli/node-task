import Request from "../models/request";
import { requestPublisher } from "../rabbitMQ/publishers/requestPublisher";

export const getAllRequests = async (req, res, next) => {
  try {
    const requests = await Request.findAll();
    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};

export const getOneRequest = async (req, res, next) => {
  const id = req.params.id;
  try {
    const request = await Request.findByPk(id);
    if (!request) {
      return next();
    }
    res.status(200).json(request);
  } catch (error) {
    next(error);
  }
};

export const createRequest = async (req, res, next) => {
  const {
    status,
    suppCode,
    materialName,
    suppName,
    materialSort,
    category,
    fullBatchQty,
    fullLabelsQty,
    lastBatchQty,
    lastLabelsQty,
  } = req.body;
  try {
    const request = await Request.create({
      status,
      suppCode,
      materialName,
      suppName,
      materialSort,
      category,
      fullBatchQty,
      fullLabelsQty,
      lastBatchQty,
      lastLabelsQty,
    });

    requestPublisher(request);

    res.status(201).json(request);
  } catch (error) {
    next(error);
  }
};
export const editRequest = async (req, res, next) => {
  const { id, suppName, materialName } = req.body;
  try {
    const update = await Request.update(
      { materialName, suppName },
      { where: { id } }
    );
    res.status(200).json(update);
  } catch (error) {
    next(error);
  }
};

export const removeRequest = async (req, res, next) => {
  const { id } = req.body;
  try {
    await Request.destroy({ where: { id } });
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
