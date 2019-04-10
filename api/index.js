const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const fs = require('fs')
const configure = JSON.parse(fs.readFileSync('./.config.json'))

const app = express()

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'info.urzhum@gmail.com',
    pass: configure.pass
  },
  tls: {
    rejectUnauthorized: false
  }
})

// middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  let name = 'Имя пользователя: ' + req.body.name
  let phone = 'Номер телефона: ' + req.body.phone

  let HelperOptions = {
    from: '"Пользователь с сайта Уржум" <info.urzhum@gmail.com>',
    to: 'info.urzhum@gmail.com',
    subject: 'Сайт Уржум! Просьба перезвонить!',
    text: name + '\n' + phone
  }

  if (req.body.name.length === 0 || req.body.phone.length === 0) {
    res.end(JSON.stringify(2))
    return false
  } else {
    transporter.sendMail(HelperOptions, (err, info) => {
      if (err) console.log(err)
    })
    res.end(JSON.stringify(1))
  }
})
console.log('test')
module.exports = {
  path: '/api',
  handler: app
}
