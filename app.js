const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todo-list')
// 取得資料庫連線狀態
const db = mongoose.connection

const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use(routes)

app.listen(port, () => {
  console.log(`Todo-list is running on http://localhost:${port}`)
})