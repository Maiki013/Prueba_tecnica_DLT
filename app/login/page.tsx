// app/login/page.tsx
"use client";

import Image from "next/image";
import "./login.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();          
  //Evita que el formulario recargue la página por defecto            

  const form = e.currentTarget; 
  // Obtiene la referencia al formulario que lanzó el evento

  const formData = new FormData(form);
  // Extrae los valores del formulario

    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
     const res = await fetch("/api/auth", {
      method: "POST",                       // Envia datos al servidor
      headers: { "Content-Type": "application/json" },  //envía JSON
      body: JSON.stringify(body),           // Convierte a JSON
    });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setErrorMsg(data.message || "Credenciales incorrectas");
        setLoading(false);
        return;
      }

      // Guardar rol
      if (data.role) {
        localStorage.setItem("role", String(data.role).toUpperCase());
      }

      // Mandamos a /criaturas
      router.push("/criaturas");
    } catch (err) {
      console.error(err);
      setErrorMsg("Error de conexión");
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-image">
        <Image
          src="/login.png"
          alt="Imagen de login"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="login-form-wrapper">
        <div className="login-form">
          <h1 className="title">Inicia sesión</h1>
          <p className="subtitle">
            Para acceder a la colección de criaturas mágicas. Solo los maestros
            y los cuidadores reconocidos pueden entrar.
          </p>

          <form onSubmit={handleSubmit}>
            <label className="input-label" htmlFor="magic-email">
              Correo mágico
            </label>
            <input
              type="email"
              id="magic-email"
              name="email"
              placeholder="tunombre@santuario.com"
              className="input"
              required
            />

            <label className="input-label" htmlFor="magic-password">
              Palabra mágica
            </label>
            <input
              type="password"
              id="magic-password"
              name="password"
              placeholder="Introduce tu contraseña"
              className="input"
              required
            />

            {errorMsg && (
              <p style={{ color: "red", marginTop: "0.8rem" }}>{errorMsg}</p>
            )}

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Accediendo..." : "Acceder al santuario"}
            </button>
          </form>

          <p className="register-text">
            ¿No tienes cuenta?{" "}
            <a href="/register">Regístrate como maestro o cuidador</a>
          </p>
        </div>
      </div>
    </div>
  );
}
