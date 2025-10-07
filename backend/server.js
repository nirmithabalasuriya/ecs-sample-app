const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express backend 🚀" });
});

// Example API route
app.get("/api/data", (req, res) => {
  res.json({ data: "This is some data from the backend API." });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
