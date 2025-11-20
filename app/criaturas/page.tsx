// app/criaturas/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./criaturas.scss";

export default function CreaturesPage() {
  const [imageSrc, setImageSrc] = useState("/master.png");
  const [profileHref, setProfileHref] = useState("/profile");

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "CUIDADOR") {
      setImageSrc("/caretaker.png");
      setProfileHref("/profile");
    } else if (role === "MAESTRO") {
      setImageSrc("/master.png");
      setProfileHref("/profile");
    }
  }, []);

  return (
    <div className="creatures-container">
      <div className="creatures-image">
        <Image
          src={imageSrc}
          alt="Usuario del santuario"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="creatures-content">
        <header className="creatures-header">
          <div className="creatures-logo">El santuario</div>

          <nav className="creatures-nav">
            <span className="nav-link nav-link--active">Mis criaturas</span>
            <a href={profileHref} className="nav-link">
              Mi perfil
            </a>
            <a href="/login" className="nav-link">
              Cerrar sesión
            </a>
          </nav>
        </header>

        <main className="creatures-main">
          <h1 className="creatures-title">Mis criaturas</h1>
          <p className="creatures-subtitle">
            Explora y gestiona todas las criaturas mágicas que has recolectado.
            Cada una tiene habilidades únicas y características especiales.
          </p>

          <section className="creatures-empty">
            <p className="empty-text">
              Aún no has añadido ninguna criatura al santuario <br />
              ¡Empieza tu colección ahora!
            </p>

            <button className="add-creature-button">
              Añadir nueva criatura
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
