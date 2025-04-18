// server/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// ─── RUTAS ────────────────────────────────────────────────────────────

// 1) GET /api/users → listar todos los usuarios
app.get(
  "/api/users",
  async (_req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error al listar usuarios" });
    }
  }
);

// 2) POST /api/users → crear un nuevo usuario
app.post(
  "/api/users",
  async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      // Aquí creamos el newUser en la base de datos
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });

      // Devolvemos el usuario creado con código 201 (Created)
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Algo falló al crear el usuario" });
    }
  }
);

// ─── LEVANTAR SERVIDOR ────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
