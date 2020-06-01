const express = require('express')
const producer = require('./kafkajs/produce')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const { body } = req
  producer.producerApp(body.message)
  res.json('ok')
})

app.listen(3000, () => {
  console.log('server Up in port 3000')
})
