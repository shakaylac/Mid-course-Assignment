const express = require("express");
const app = express();
const port = 3000;
const apiRoutes = require("./routes");
const qs = require("qs");
const cors = require('cors');

// Root route

app.use(cors({
  origin: 'http://localhost:5173',
}));

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
