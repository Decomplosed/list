#!/usr/bin/env node

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')

// Method no2
// const lstat = util.promisify(fs.lstat)

//Method no.3 
const { lstat } = fs.promises

fs.readdir(process.cwd(), async (err, filenames) => {

  if (err) {
    console.log(err)
  }

  const statPromises = filenames.map(filename => {
    return lstat(filename)
  })

  const allStats = await Promise.all(statPromises)

  for (let stats of allStats) {
    const index = allStats.indexOf(stats)

    if (stats.isFile()) {
      console.log(filenames[index])
    } else {
      console.log(chalk.bold(filenames[index]))
    }
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