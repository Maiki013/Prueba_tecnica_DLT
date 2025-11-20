// app/api/test-db/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/lib/db";

// GET de prueba (sigue igual)
export async function GET() {
  try {
    const [rows]: any = await pool.query("SELECT NOW() as now");
    return NextResponse.json({
      success: true,
      time: rows[0].now,
    });
  } catch (error) {
    console.error("Error de BD:", error);
    return NextResponse.json(
      { success: false, error: "Error conectando a la BD" },
      { status: 500 }
    );
  }
}

// POST: según el body, hace LOGIN o REGISTRO
export async function POST(req: Request) {
  try {
    const data = await req.json();

    // ---------- LOGIN (email + password) ----------
    if (data.email && data.password && !data.nombre) {
      const { email, password } = data;

      const [rows]: any = await pool.query(
        "SELECT id, name, email, password_hash, role FROM users WHERE email = ? LIMIT 1",
        [email]
      );

      if (!rows || rows.length === 0) {
        return NextResponse.json(
          { ok: false, message: "Credenciales incorrectas" },
          { status: 401 }
        );
      }

      const user = rows[0];

      const passwordOk = await bcrypt.compare(password, user.password_hash);
      if (!passwordOk) {
        return NextResponse.json(
          { ok: false, message: "Credenciales incorrectas" },
          { status: 401 }
        );
      }

      const role = String(user.role || "").toUpperCase();

      return NextResponse.json(
        {
          ok: true,
          role,          // MAESTRO / CUIDADOR
          redirectTo: "/criaturas",
        },
        { status: 200 }
      );
    }

    // REGISTRO
    if (data.nombre && data.email && data.password && data.rol) {
      const { nombre, email, password, rol } = data;

      const passwordHash = await bcrypt.hash(password, 10);

      await pool.query(
        `INSERT INTO users (name, email, password_hash, role)
         VALUES (?, ?, ?, ?)`,
        [nombre, email, passwordHash, String(rol).toUpperCase()]
      );

      return NextResponse.json({ ok: true }, { status: 201 });
    }

    return NextResponse.json(
      { ok: false, message: "Datos insuficientes" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error en POST /api/test-db:", error);

    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { ok: false, message: "El correo ya está registrado" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { ok: false, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
