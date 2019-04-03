const fs = require('fs')
const path = require('path')

let getFiles = function (dir, files_) {
  files_ = files_ || []
  let files = fs.readdirSync(dir)
  for (var i in files) {
    let name = dir + '/' + files[i]
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_)
    } else {
      files_.push(name)
    }
  }
  return files
}

console.log(getFiles('../static/services/rooms/gallery/vip/'))
