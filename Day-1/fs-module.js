// const fs =require("fs")

// fs.writeFile("welcome.text","welcome 3 ",(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("file succefully writen");
//     }
// })


// const fs = require("fs");

// fs.writeFile("welcome.txt", "Welcome again.", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File successfully written.");
//   }
// });

// fs.readFile("hello.text" ,"utf8",(error,data)=>{
//     if(error)throw error;
//     console.log(data);
// })

const fs=require('fs')

fs.writeFile("create.text","welcome",(error)=>{
  if(error){
    console.log(error);
  }else{
    console.log("file succefully created")
  }
})