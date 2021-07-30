import express from "express";
import "dotenv/config";

const app = express();

import dbSync from "./db/dbSync";

//incude error controller
import { get404Page, handleError } from "./controllers/errors";
//include routes
import requestRouter from "./routes/requestRouter";
import labelRouter from "./routes/labelRouter";
import suppSeqRouter from "./routes/suppSeqRouter";

// include request Consumer
import { requestConsumer } from "./rabbitMQ/consumers/requestConsumer";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use routes
app.use("/requests", requestRouter);
app.use("/labels", labelRouter);
app.use("/suppSeqs", suppSeqRouter);

app.get("/", (req, res, next) => {
  res.status(200).json({ status: "ok", message: "everything will be ok.." });
});

app.use(get404Page);
app.use(handleError);

//db synchronization
dbSync();

// listening requests queue
requestConsumer();

app.listen(process.env.PORT, () => {
  console.log(`** server running on  http://localhost:${process.env.PORT} ...`);
});
