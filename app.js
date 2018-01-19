//Start
console.log(`Starting aap`)

// //File Module
// const fs=require('fs')
// fs.appendFile("greeting.txt","Hello World...",(err) => {
//     if(err){
//         console.log("Unable to write in the file..");
//     }
// })

//OS Module
 const os = require('os');
 const user = os.userInfo();
 // console.log(user);
 console.log(`Hello ${user.username}! `)

//  // Requiring own file
//  const notes=require('./notes.js')
//  fs.appendFile(`greeting.txt`,`I m  ${notes.age}  Sum = ${notes.sum(2,3)}`,(err) => {
//      if(err){
//          console.log(err)
//      }
//  })

 //thrd party module (lodash)
 const _  = require('lodash');
 console.log(_.isString('shgn'))
 console.log(_.isString(4))

 let a1 = _.uniq(['shgn','shgn',1,2,3,4,5,'shrma','shrma'])
 console.log(a1)