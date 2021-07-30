import amqp from "amqplib";
import connectRedis from "../../redis/connection";
const redisClient = connectRedis();

export async function requestConsumer() {
  try {
    const connection = await amqp.connect(process.env.RABBIT_MQ_URL);
    const channel = await connection.createChannel();
    const assertion = await channel.assertQueue("requests");

    console.log("** waiting message for (requests) queue");

    channel.consume("requests", (msg) => {
      const req = JSON.parse(msg.content.toString());

      redisClient.set(`${req.id}`, JSON.stringify(req), (err, stt) => {
        if (err) {
          throw err;
        }
        console.log(`request (${req.id}) wrote to Redis..${stt}`);
        channel.ack(msg);
      });
    });
  } catch (err) {
    console.error(err);
  }
}
