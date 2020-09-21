
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({ success: true })
})

app.get('/version', (req, res) => {
  res.json({ success: true, version: '1.0.0' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})