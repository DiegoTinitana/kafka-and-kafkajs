var kafka = require("kafka-node"),
  client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'}),  
  Consumer = kafka.Consumer,
  consumer = new Consumer(client, [{ topic: "test", partition: 0 }], {
    autoCommit: false
  });

  consumer.on("message", (message) => {
    console.log('hola')
    console.log(message, '>>>>>>');
  });
  




