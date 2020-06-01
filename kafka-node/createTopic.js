const kafka = require('kafka-node')
const config = require('./config')

const client = new kafka.KafkaClient({kafkaHost: config.kafkaHost})

const topicToCreate = [{
  topic: config.KafkaTopic,
  partitions: 1,
  replecationFactor: 1
}]

client.createTopics(topicToCreate, (err, result) => {
  console.log(result, 'topic create')
})