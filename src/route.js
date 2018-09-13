import express from 'express'

export default (config, db) => {
  const router = express.Router()

  router.get('/', (req, res) => {
    res.send('home')
  })

  router.get('/get/:key', (req, res) => {
    const { key } = req.params
    res.send({ data: db.getData(key) })
  })

  //post /put/c with {value: ssss}
  router.post('/put/:key', (req, res) => {
    const { key } = req.params
    const { value } = req.body
    db.putData(key, value)
    res.send({ status: 'ok'})
  })

  return router
}