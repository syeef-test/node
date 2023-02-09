const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    var fileData = fs.readFileSync("./message.txt").toString();
    //console.log(fileData.toString());

    res.write("<html>");
    res.write("<head>");
    res.write("<title>Enter Message</title>");
    res.write("</head>");
    res.write("<body>");
    res.write(`<h1>${fileData}</h1>`);
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      //console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Home</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>Hello from node js server</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
};


//module.exports = requestHandler;

// module.exports = {
//     handeler:requestHandler,
//     someText:'Some hard coded text'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
