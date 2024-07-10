// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req, "req");
//   if (req.method === "GET" && req.url === "/books") {
//     res.end("books");
//   } else if (req.method === "GET" && req.url === "/welcome") {
//     res.end("Welcome");
//   } else if (req.method === "GET" && req.url === "/bye") {
//     res.end("bye");
//   }else if(req.method === "GET" && req.url === "/storage"){
//     res.end("storage");
//   }else {
//     res.end("url undefined.");
//   }
// });

// server.listen(3001, () => {
//   console.log("Server listening on port 3001;");
// });



const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Parse and process the result.
    resp.on('end', () => {
        // Parse the JSON data
        let jsonData = JSON.parse(data);

        // Function to clean the JSON object
        function cleanObject(obj) {
            let itemsRemovedCount = 0;

            function clean(obj) {
                for (let key in obj) {
                    if (obj[key] === 'N/A' || obj[key] === '-' || obj[key] === '') {
                        delete obj[key];
                        itemsRemovedCount++;
                    } else if (Array.isArray(obj[key])) {
                        obj[key] = obj[key].filter(item => item !== 'N/A' && item !== '-' && item !== '');
                        itemsRemovedCount += obj[key].length;
                    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                        clean(obj[key]);
                    }
                }
            }

            clean(obj);

            // Add items_removed key with the count of removed items
            obj.items_removed = itemsRemovedCount;

            return obj;
        }

        // Clean the JSON data
        let cleanedData = cleanObject(jsonData);

        // Log the modified object as a string
        console.log(JSON.stringify(cleanedData));
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
