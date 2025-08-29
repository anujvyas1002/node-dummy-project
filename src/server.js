require("dotenv").config();
const connectDB = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

// Connect DB & start server
connectDB();
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
