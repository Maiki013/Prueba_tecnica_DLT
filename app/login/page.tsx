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
      {/* Formulario de login */}
      <div className="login-form-wrapper">
        <div className="login-form">
          <h1 className="title">Inicia sesión</h1>
          <p className="subtitle">
            Para acceder a la colección de criaturas mágicas. Solo los maestros
            y los cuidadores reconocidos pueden entrar.
          </p>

          <div>
            <label className="input-label">Correo mágico</label>
            <input
              type="email"
              placeholder="tunombre@santuario.com"
              className="input"
            />

            <label className="input-label">Palabra mágica</label>
            <input
              type="password"
              placeholder="Introduce tu contraseña"
              className="input"
            />

            <button className="login-button">
              Acceder al santuario
            </button>
          </div>

          <p className="register-text">
            ¿No tienes cuenta? Regístrate como maestro o cuidador
          </p>
        </div>
      </div>
    </div>
  );
}
