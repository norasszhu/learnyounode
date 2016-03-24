'use strict'

var clc = require('cli-color')

var sum = 0
var cnt = 0

calSum (process.argv.slice(2))

function calSum(arr) {
  var l = arr.length
  if (!l) return
  for (var i = 0; i < l; i++) {
    if (!isNaN(arr[i])) {
      ++ cnt
      sum += parseFloat(arr[i])
      log(clc.green(arr[i]) + " 是一个可以转换成数值的输入\n")
    } else {
      log(clc.red(arr[i]) + " 是一个不可以转换成数值的输入\n")
    }
  }
  log("总共有 " + cnt + " 个可以转换成数值的输入,总和是 : " + sum)
}

function log(str) {
  console.log(str)
}
