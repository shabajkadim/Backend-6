// import express from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import cookieParser from 'cookie-parser'
// import axios  from 'axios'


// const app=express()
// dotenv.config()
// app.use(express.json())

// const corsOptions = {
//     origin: 'http://example.com', // Replace with your allowed origin(s)
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     preflightContinue: false,
//     optionsSuccessStatus: 204
// };
// app.use(cors())
// app.use(cookieParser())

// app.get('/',((req,res)=>{
    // return res.send("server is running...")
// }))

// const axios = require('axios');

// async function fetchData() {
//     try {
//         const response = await axios.get('https://coderbyte.com/api/challenges/json/json-cleaning');
//         console.log(response.data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// fetchData()






// app.listen(8000,(()=>{
//     console.log("port running on 8000");
// }))


// import axios from 'axios';
// import express from 'express'

// const app=express()

// // get('https://coderbyte.com/api/challenges/json/json-cleaning');


// async function fetchData(){
//     try{
//         const response=await axios.get('https://coderbyte.com/api/challenges/json/json-cleaning')
//        console.log(response.data);
//     }catch(error){
//         console.log(error);
//     }
// }
// fetchData()

// app.listen(8000,()=>{console.log("8000");})


// import axios from 'axios';
// import express from 'express';

// const app = express();

// async function fetchData() {
//   try {
//     const response = await axios.get('https://coderbyte.com/api/challenges/json/json-cleaning');
    
//     const cleanedData = response.data;
//     console.log(response.data);
//     return cleanedData;
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData()




// app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });



const fs = require('fs');

// The content you want to write to the file
const content = 'Hello, World!';

// Create a file named 'example.txt' and write the content to it
fs.writeFile('example.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been created');
});
