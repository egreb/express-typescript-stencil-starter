import * as express from 'express'
import * as path from 'path'

const app:express.Application = express()

app.use(express.static(path.join(__dirname, '../www')))

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../www', 'index.html'))
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
