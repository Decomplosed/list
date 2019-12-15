#!/usr/bin/env node

const fs = require('fs')
const util = require('util')

// Method no2
// const lstat = util.promisify(fs.lstat)

//Method no.3 
// const { lstat } = fs.promises

fs.readdir(process.cwd(), async (err, filenames) => {

  if (err) {
    console.log(err)
  }


})

// Method no.1

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