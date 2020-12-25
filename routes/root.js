const root = (req, res, next) => {
  console.log("Hello from the root route");
  res.send(`
  <html>
    <head><title>Assignment 2</title></head>
    <body>
      <h1>Welcome to my second NodeJS assignment!</h1>
    </body>
  </html>
  `);
}

module.exports = root;