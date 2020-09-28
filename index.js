let moment = require('moment')

console.log(moment().format('MM/DD/YYYY hh:mm:ss'))

console.log(moment().format('MMMM Do YYYY, hh:mm:ss'))

/// contoh tarik date kebelakang
let m1 = moment('2020-08-01')
let m2 = moment('2020-09-09')

/*
// exculde end-date / gak masukin tanggal terakhir
for(let m = moment(m1); m.isBefore(m2); m.add(1, 'days'))
    console.log(m.format('YYYY-MM-DD'))

console.log('==========================')
// include end-date / masukin tanggal terakhir
for(let m = moment(m1); m.diff(m2, 'days') <= 0; m.add(1, 'days'))
    console.log(m.format('YYYY-MM-DD'))
*/