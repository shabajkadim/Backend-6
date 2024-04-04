const fs =require("fs")

fs.writeFile("welcome.text","welcome 3 ",(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("file succefully writen");
    }
})


// fs.readFile("hello.text" ,"utf8",(error,data)=>{
//     if(error)throw error;
//     console.log(data);
// })