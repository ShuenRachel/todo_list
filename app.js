const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This server is for todo-list')
})

app.listen(port, () => {
  console.log(`Todo-list is running on http://localhost:${port}`)
})