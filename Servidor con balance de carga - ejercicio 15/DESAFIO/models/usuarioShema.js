//import mongoose from "mongoose";
const mongoose = require("mongoose");
const UsuarioSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },

  {
    versionKey: false,
  }
);

//export default mongoose.model("Usuarios", UsuarioSchema);
module.exports = mongoose.model("Usuarios", UsuarioSchema);