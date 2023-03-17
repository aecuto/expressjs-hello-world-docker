const express = require('express')
const app = express()
const port = 8000

const morgan = require('morgan')

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).send({msg: 'Hello World!'})
})

app.get('/:name', (req, res) => {
  res.status(200).send({msg: 'Hello World!', name: req.params.name})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})