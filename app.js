// //              HTTP

// const http = require('http');
// http.createServer(function (req,res) {
//  res.write("WELCOME TO HTTP SERVER");
//  res.end();
// }).listen(4040); // print direct on client-side.

//              EXPRESS

// const express = require('express');
// const app = express();

// app.get('/',(req,res) => {
//     res.send("WELCOME LEKEDAMUS APP.");
// });

// app.get('/home',(req,res) => {
//     res.send("WELCOME  HOME APP.");
// });

// app.listen(4000, () => {
//     console.log("THIS IS PORT 4000");
// });

//              EXPRESS MIDDLEWARE

// const express = require('express');
// const app = express();

// app.get('/',(req,res) => {
//     res.send("WELCOME LEKEDAMUS APP.");
// });

// app.get('/home',(req,res) => {
//     res.send("WELCOME  HOME APP.");
// });

// app.listen(4000, () => {
//     console.log("THIS IS PORT 4000");
// });

// FACEBOOK USER LOGIN WITH EXPRESS.

// const express = require('express');

// const port = process.env.PORT || 3000;

// const app = express();

// app.get('/', (req,res) => {
//     res.sendFile(__dirname +'/public/index.html');
// })

// app.listen(port, () => {
//     console.log(`the port is ${port}`);
// });


// // FACEBOOK USER LOGIN WITH EXPRESS{WITH API}

// const express = require('express');

// const port = process.env.PORT || 3000;

// const app = express();

// //              API

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static('public'));

// app.get('/', (req,res) => {
//     res.sendFile(__dirname +'/public/index.html');
// });

// app.listen(port, () => {
//     console.log(`the port is ${port}`);
// });



// // FACEBOOK USER LOGIN WITH EXPRESS{WITH API AND GET METHOD}

const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

// //              API

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// //              GET METHOD

app.get('/', (req,res) => {
    res.sendFile(__dirname +'/public/index.html');
});

// //              POST METHOD

app.post('/', (req,res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`the port is http://localhost:${port}`);
});
 







