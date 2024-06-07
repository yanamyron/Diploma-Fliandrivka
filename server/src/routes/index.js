import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/User.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import {
  Goncharstvo,
  Lipka,
  MainEnrole,
  masterclasses,
  Sertificates,
} from "../models/MainEnrole.js";

const router = express.Router();
router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.post("/mainenrole", async (req, res) => {
  try {
    const newTodo = await MainEnrole.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/goncharstvo", async (req, res) => {
  try {
    const newTodo = await Goncharstvo.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/lipka", async (req, res) => {
  try {
    const newTodo = await Lipka.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/masterclasses", async (req, res) => {
  try {
    const newTodo = await masterclasses.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/sertificates", async (req, res) => {
  try {
    const newTodo = await Sertificates.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/dashboard", async (req, res) => {
  try {
    const mainRole = await MainEnrole.findAll();
    const goncharstvo = await Goncharstvo.findAll();
    const lipka = await Lipka.findAll();
    const masterclassestable = await masterclasses.findAll();
    const sertificates = await Sertificates.findAll();

    res
      .status(201)
      .json({ mainRole, goncharstvo, lipka, masterclassestable, sertificates });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
