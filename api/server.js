const express = require("express");
const app = express();
const port = 3000;
const apiRoutes = require("./routes");
const qs = require("qs");
const allowedOrigins = ['http://localhost:5175','http://localhost:5174','http://localhost:5173'];

// Root route

app.use((req, res, next) =>{
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Aunthorization');
  next();
});


app.get('http://localhost:3000/api/data/search', (req, res) => {
  res.json({message: 'Data fetched successfully'});
});

app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to the api",
  });
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
