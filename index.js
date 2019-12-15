#!/usr/bin/env node

const fs = require('fs')
const util = require('util')

// Method no2
const lstat = util.promisify(fs.lstat)

fs.readdir(process.cwd(), (err, filenames) => {

  if (err) {
    console.log(err)
  }

})

// Method no.1
//
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err)
//       }

//       resolve(stats)
//     })
//   })
// }