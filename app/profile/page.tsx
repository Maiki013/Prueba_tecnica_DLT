// app/profile/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import "./profile.scss";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [imageSrc, setImageSrc] = useState("/master.png");
  const [roleLabel, setRoleLabel] = useState("Ejemplo");

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "CUIDADOR") {
      setImageSrc("/caretaker.png");
      setRoleLabel("Cuidador");
    } else if (role === "MAESTRO") {
      setImageSrc("/master.png");
      setRoleLabel("Maestro");
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-image">
        <Image
          src={imageSrc}
          alt="Guardián del santuario"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="profile-content">
        <header className="profile-header">
          <div className="profile-logo">El Santuario</div>

          <nav className="profile-nav">
            <Link href="/criaturas" className="nav-link">
              Mis criaturas
            </Link>
            <span className="nav-link nav-link--active">Mi perfil</span>
            <a href="/login" className="nav-link">
              Cerrar sesión
            </a>
          </nav>
        </header>

        <main className="profile-main">
          <h1 className="profile-title">Mi perfil</h1>
          <p className="profile-subtitle">
            Este es el lugar donde podrás gestionar, actualizar y personalizar
            la información de tu perfil.
          </p>

          <section className="profile-form">
            <div className="profile-field">
              <label className="profile-label">Nombre mágico</label>
              <div className="profile-input read-only">Ejemplo</div>
            </div>

            <div className="profile-field">
              <label className="profile-label">Correo mágico</label>
              <div className="profile-input read-only">
                ejemplo@santuario.com
              </div>
            </div>

            <div className="profile-field">
              <label className="profile-label">Rol</label>
              <div className="profile-input read-only">{roleLabel}</div>
            </div>

            <div className="profile-field">
              <label className="profile-label">Descripción</label>
              <div className="profile-textarea read-only">Ejemplo</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
