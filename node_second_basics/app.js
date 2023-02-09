const http = require('http');




const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Enter Message</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url == '/home'){
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Home Page</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Welcome home</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url == '/about'){
        res.write('<html>');
        res.write('<head>');
        res.write('<title>About Page</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Welcome to About Us page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url == '/node'){
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Node</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Welcome to my Node Js project</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head>');
    // res.write('<title>Home</title>');
    // res.write('</head>');
    // res.write('<body>');
    // res.write('<h1>Hello from node js server</h1>');
    // res.write('</body>');
    // res.write('</html>');
    // res.end();
});

server.listen(4000);