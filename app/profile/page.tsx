// app/profile/page.tsx
import Image from "next/image";
import Link from "next/link";
import "./profile.scss";

export default function ProfilePage() {
  return (
    <div className="profile-container">
      {/*Imagen*/}
      <div className="profile-image">
        <Image
          src="/caretaker.png"
          alt="Guardián del santuario"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="profile-content">
        {/* Header / navbar */}
        <header className="profile-header">
          <div className="profile-logo">El Santuario</div>

          <nav className="profile-nav">
            <Link href="/creatures" className="nav-link">
              Mis criaturas
            </Link>
            <span className="nav-link nav-link--active">Mi perfil</span>
            <Link href="/logout" className="nav-link">
              Cerrar sesión
            </Link>
          </nav>
        </header>

        {/*Contenido principal*/}
        <main className="profile-main">
          <h1 className="profile-title">Mi perfil</h1>
          <p className="profile-subtitle">
            Este es el lugar donde podrás gestionar, actualizar y personalizar
            la información de tu perfil.
          </p>

          <section className="profile-form">
            {/*Nombre mágico*/}
            <div className="profile-field">
              <label className="profile-label">Nombre mágico</label>
              <div className="profile-input read-only">Ejemplo</div>
            </div>

            {/*Correo mágico*/}
            <div className="profile-field">
              <label className="profile-label">Correo mágico</label>
              <div className="profile-input read-only">
                ejemplo@santuario.com
              </div>
            </div>

            {/*Rol*/}
            <div className="profile-field">
              <label className="profile-label">Rol</label>
              <div className="profile-input read-only">Ejemplo</div>
            </div>

            {/* Descripción */}
            <div className="profile-field">
              <label className="profile-label">Descripción</label>
              <div className="profile-textarea read-only">
                Ejemplo
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
