const { Kafka } = require("kafkajs");
const kafka = new Kafka({ clientId: "my-app", brokers: ["localhost:9092"] });
const producer = kafka.producer();

const producerApp = async (message) => {
  await producer.send({
    topic: "test",
    messages: [{ value: message }],
  });
};

 module.exports = {
   producerApp
 }
