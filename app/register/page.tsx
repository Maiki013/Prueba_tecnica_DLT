// app/register/page.tsx
import Image from "next/image";
import Link from "next/link";
import "./register.scss";

export default function RegisterPage() {
  return (
    <div className="register-container">
      {/* Imagen del Registro*/}
      <div className="register-image">
        <Image
          src="/register.png" 
          alt="Imagen de criatura mágica"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/*Formulario de Registro*/}
      <div className="register-form-wrapper">
        <div className="register-form">
          <h1 className="title">Únete al santuario</h1>
          <p className="subtitle">
            Elige si serás un cuidador o maestro de criaturas.
            Completa los detalles para comenzar
          </p>

          <form>
            {/*Campo Nombre Mágico*/}
            <label htmlFor="nombre" className="input-label">
              Nombre mágico
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Introduce tu nombre mágico"
              className="input"
              required
            />

            {/*Campo Correo Mágico*/}
            <label htmlFor="email" className="input-label">
              Correo mágico
            </label>
            <input
              type="email"
              id="email"
              placeholder="tunombre@bestiario.com"
              className="input"
              required
            />

            {/*Campo Rol (Select)*/}
            <label htmlFor="rol" className="input-label">
              Rol
            </label>
            <select id="rol" className="select" required>
              <option value="cuidador">Cuidador</option>
              <option value="maestro">Maestro</option>
            </select>

            {/*Campo Palabra Mágica*/}
            <label htmlFor="password" className="input-label">
              Palabra mágica
            </label>
            <input
              type="password"
              id="password"
              placeholder="Introduce tu palabra mágica"
              className="input"
              required
            />

            <button type="submit" className="register-button">
              Registrarme en el santuario
            </button>
          </form>

          {/*Texto de Login*/}
          <p className="login-text">
            ¿Tienes cuenta?{" "}
            <Link href="/login">Inicia sesión en el refugio</Link>
          </p>
        </div>
      </div>
    </div>
  );
}