const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json()); // Permite recibir JSON en las peticiones
app.use(cors()); // Habilita CORS

app.use("/auth", authRoutes); // Usa las rutas de autenticación

module.exports = app;
