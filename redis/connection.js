import redis from "redis";

export default function connectRedis() {
  const redisClient = redis.createClient(); //default, localhost => port:6379

  redisClient.on("error", (error) => {
    console.error(error);
  });

  return redisClient;
}
