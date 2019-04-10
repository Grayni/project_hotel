const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const fs = require('fs')
const configure = JSON.parse(fs.readFileSync('./.config.json'))
const { Nuxt, Builder } = require('nuxt')
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

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

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

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
