const users = (req, res, next) => {
  console.log("Hello from the users route");
  res.send(`
    <html>
      <head><title>Users Route</title></head>
      <body>
        <h1>This is the Users route.</h1>
      </body>
    </html>
  `);
  // comment out next() to prevent passthrough to root when hitting "/users" route
  // next();
}

module.exports = users;