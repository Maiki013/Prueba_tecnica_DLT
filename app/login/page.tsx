// app/login/page.tsx
import Image from "next/image";
import "./login.scss";

export default function LoginPage() {
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
      
      {/*Formulario de login*/}
      <div className="login-form-wrapper">
        <div className="login-form">
          <h1 className="title">Inicia sesión</h1>
          <p className="subtitle">
            Para acceder a la colección de criaturas mágicas. Solo los maestros
            y los cuidadores reconocidos pueden entrar.
          </p>

          <form>
            {/*Campos de Input*/}
            <label className="input-label" htmlFor="magic-email">Correo mágico</label>
            <input
              type="email"
              id="magic-email"
              placeholder="tunombre@santuario.com"
              className="input"
              required
            />

            <label className="input-label" htmlFor="magic-password">Palabra mágica</label>
            <input
              type="password"
              id="magic-password"
              placeholder="Introduce tu contraseña"
              className="input"
              required
            />

            <button type="submit" className="login-button">
              Acceder al santuario
            </button>
          </form>

          {/*REGISTRO CON ENLACE*/}
          <p className="register-text">
              ¿No tienes cuenta? 
            <a href="/register">
              Regístrate como maestro o cuidador
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}