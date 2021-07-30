import Request from "../models/request";

export const getOpenRequests = async (status) => {
  let openRequests = await Request.findAll({
    where: { status },
    attributes: ["suppCode"],
  });
  return openRequests.map((req) => req.suppCode);
};
