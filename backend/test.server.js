const express = require('express')
const registerRouter = require('./router')

const app = express()
registerRouter(app)
app.use(express.static('./dist'))

module.exports = app.listen(9000, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + 9000 + '\n')
})
