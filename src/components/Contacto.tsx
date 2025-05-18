import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contacto.module.css';

export default function Contacto() {
  const form = useRef<HTMLFormElement>(null);
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<'ok' | 'error' | ''>('');

  const actualizarOpciones = () => {
    if (!form.current) return;
    const seleccionadas = Array.from(
      form.current.querySelectorAll<HTMLInputElement>('input[name="opciones"]:checked')
    ).map((input) => input.value);
    const campo = form.current.querySelector<HTMLInputElement>('input[name="opciones_resumen"]');
    if (campo) campo.value = seleccionadas.join(', ');
  };

  const enviarCorreo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    actualizarOpciones();

    setEnviando(true);
    setEstado('');

    emailjs
      .sendForm('service_zsg0e8k', 'template_dvfunnt', form.current, 'YqaBS775_UBQweZfz')
      .then(() => {
        setEnviando(false);
        setEstado('ok');
        form.current?.reset();
      })
      .catch(() => {
        setEnviando(false);
        setEstado('error');
      });
  };

  return (
    <section id="contacto" className={styles.contacto}>
      <h2 className={styles.titulo}>Contáctanos</h2>

      <form ref={form} onSubmit={enviarCorreo} className={styles.formulario}>
        <input
          type="text"
          name="user_name"
          placeholder="Tu nombre"
          required
          className={styles.campo}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Tu email"
          required
          className={styles.campo}
        />
        <textarea
          name="message"
          placeholder="¿En qué podemos ayudarte?"
          required
          className={styles.campo}
          rows={5}
        ></textarea>

        <label>

          <label className={styles.label}>
  ¿Qué necesitas? (puedes marcar varias)
</label>
<div className={styles.checkCards}>
  <label className={styles.card}>
    <input type="checkbox" name="opciones" value="Evaluación inicial" onChange={actualizarOpciones} />
    <span>✅ Evaluación inicial</span>
  </label>
  <label className={styles.card}>
    <input type="checkbox" name="opciones" value="Plan de entrenamiento" onChange={actualizarOpciones} />
    <span>🏋️‍♂️ Plan de entrenamiento</span>
  </label>
  <label className={styles.card}>
    <input type="checkbox" name="opciones" value="Rehabilitación en casa" onChange={actualizarOpciones} />
    <span>🏠 Rehabilitación en casa</span>
  </label>
  <label className={styles.card}>
    <input type="checkbox" name="opciones" value="Videollamada informativa" onChange={actualizarOpciones} />
    <span>📞 Videollamada informativa</span>
  </label>
  <label className={styles.card}>
    <input type="checkbox" name="opciones" value="No estoy seguro/a, necesito orientación" onChange={actualizarOpciones} />
    <span>❓ Necesito orientación</span>
  </label>
</div>

        </label>

        {/* Campo oculto para EmailJS */}
        <input type="hidden" name="opciones_resumen" />

        <button type="submit" className={styles.boton} disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {estado === 'ok' && <p className={styles.ok}>✅ ¡Mensaje enviado correctamente!</p>}
        {estado === 'error' && <p className={styles.error}>❌ Hubo un error al enviar. Inténtalo de nuevo.</p>}
      </form>
    </section>
  );
}
