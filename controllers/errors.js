import Log from "../models/log";

export const handleError = async (err, req, res, next) => {
  try {
    await Log.create({
      title: err.name,
      message: err.message,
      url: req.originalUrl,
    });
    res.status(500).json();
  } catch (error) {
    console.error(`an error ocurred!! message::> ${error.message}`);
    res.status(500).json();
  }
};

export const get404Page = (req, res, next) => {
  res.status(404).json();
};
