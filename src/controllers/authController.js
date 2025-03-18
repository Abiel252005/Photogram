const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log("📥 Datos recibidos en registro:", { username, email, password });

        // Verifica si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log("❌ Usuario ya registrado:", email);
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        // Hashea la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("🔑 Contraseña hasheada correctamente");

        // Crea el usuario
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        console.log("✅ Usuario registrado en la base de datos");

        res.status(201).json({ message: "Usuario registrado correctamente" });
    } catch (error) {
        console.error("❌ Error en el registro:", error.message);
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("📥 Datos recibidos en login:", { email, password });

        // Verifica si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            console.log("❌ Usuario no encontrado:", email);
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Compara la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("❌ Contraseña incorrecta para:", email);
            return res.status(400).json({ message: "Credenciales incorrectas" });
        }

        // Genera token JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        console.log("🔑 Token generado con éxito para:", email);

        res.json({ message: "Inicio de sesión exitoso", token });
    } catch (error) {
        console.error("❌ Error en el login:", error.message);
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
};
