import express from 'express'
import initDB from './db'
import bodyParser from 'body-parser'
import Route from './route'

async function main() {
  let db = await initDB()

  const app = express()

  app.use(bodyParser.json())

  app.use('/', Route({ 'kkk': 'sss' }, db))

  app.listen(3000, () => console.log('Example app listening on port 3000!'))
}

main()