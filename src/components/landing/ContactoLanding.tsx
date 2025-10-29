// src/components/ContactoLanding.tsx
import styles from './ContactoLanding.module.css';

export default function ContactoLanding() {
  return (
    <section className={styles.section} id="contacto-landing">
      <h2>Contacto directo</h2>
      <form className={styles.form}>
        <input type="text" name="nombre" placeholder="Nombre" required />
        <input type="tel" name="telefono" placeholder="Teléfono" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="mensaje" placeholder="¿Cómo podemos ayudarte?" required />
        <button type="submit">Enviar</button>
      </form>
      <div className={styles.info}>
        <p>WhatsApp/Teléfono: <strong>633 261 963</strong></p>
        <p>Servicio en Madrid y alrededores</p>
      </div>
    </section>
  );
}
