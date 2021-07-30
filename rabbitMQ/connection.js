import amqp from "amqplib";

export default async function connectQueue(quName) {
  try {
    const connection = await amqp.connect(process.env.RABBIT_MQ_URL);
    const channel = await connection.createChannel();
    const assertion = await channel.assertQueue(quName);
    return channel;
  } catch (error) {
    console.error(error);
  }
}
