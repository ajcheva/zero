// server/index.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

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
  '/api/users',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (err) {
      console.error('Error en GET /api/users:', (err as Error).stack);
      next(err);
    }
  }
);

// 2) POST /api/users → crear un nuevo usuario
app.post(
  '/api/users',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const newUser = await prisma.user.create({
        data: { name, email, password },
      });
      res.status(201).json(newUser);
    } catch (err) {
      console.error('Error en POST /api/users:', (err as Error).stack);
      next(err);
    }
  }
);

// ─── HANDLER GLOBAL DE ERRORES ─────────────────────────────────────────
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('💥 STACK TRACE:', err.stack);
  res.status(500).json({ error: err.message || 'Error interno del servidor' });
});

// ─── LEVANTAR SERVIDOR ─────────────────────────────────────────────────
// Sólo escucha si este archivo se ejecuta directamente (node server/index.ts)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

// exportamos app y prisma para poder usarlos en Supertest y cerrar la conexión en los tests
export { app, prisma };
