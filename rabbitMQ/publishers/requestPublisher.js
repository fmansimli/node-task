import connectQueue from "../connection";

let channel;
(async () => {
  channel = await connectQueue("requests");
})();

export function requestPublisher(request) {
  try {
    channel.sendToQueue("requests", Buffer.from(JSON.stringify(request)));
    console.log(`message => ${request.id}=>  to =>(requests)`);
  } catch (err) {
    console.error(err);
  }
}
