// app/register/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import "./register.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      password: formData.get("password"),
      rol: formData.get("rol"),
    };

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setErrorMsg(data.message || "Error al registrar");
        setLoading(false);
        return;
      }

      // Registro correcto a login
      router.push("/login");
    } catch (err) {
      console.error(err);
      setErrorMsg("Error de conexión con el servidor");
      setLoading(false);
    }
  }

  return (
    <div className="register-container">
      <div className="register-image">
        <Image
          src="/register.png"
          alt="Imagen de criatura mágica"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="register-form-wrapper">
        <div className="register-form">
          <h1 className="title">Únete al santuario</h1>
          <p className="subtitle">
            Elige si serás un cuidador o maestro de criaturas.
            Completa los detalles para comenzar.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre" className="input-label">
              Nombre mágico
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Introduce tu nombre mágico"
              className="input"
              required
            />

            <label htmlFor="email" className="input-label">
              Correo mágico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tunombre@bestiario.com"
              className="input"
              required
            />

            <label htmlFor="rol" className="input-label">
              Rol
            </label>
            <select id="rol" name="rol" className="select" required>
              <option value="CUIDADOR">Cuidador</option>
              <option value="MAESTRO">Maestro</option>
            </select>

            <label htmlFor="password" className="input-label">
              Palabra mágica
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Introduce tu palabra mágica"
              className="input"
              required
            />

            {errorMsg && (
              <p style={{ color: "red", marginTop: "0.8rem", fontSize: "0.9rem" }}>
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              {loading ? "Registrando..." : "Registrarme en el santuario"}
            </button>
          </form>

          <p className="login-text">
            ¿Tienes cuenta? <Link href="/login">Inicia sesión en el refugio</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
