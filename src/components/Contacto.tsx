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

  const enviarCorreo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    actualizarOpciones();
    setEnviando(true);
    setEstado('');

    try {
      const result = await emailjs.sendForm(
        'service_antea_contacto',
        'Antea Salud',
        form.current,
        'GkuifuSj9iMoXN9fw'
      );

      console.log('✅ Correo enviado:', result);
      setEnviando(false);
      setEstado('ok');
      form.current?.reset();

      setTimeout(() => setEstado(''), 5000);
    } catch (error: any) {
      console.error('❌ Error al enviar:', error);
      setEnviando(false);
      setEstado('error');

      setTimeout(() => setEstado(''), 5000);
    }
  };

  return (
    <section id="contacto" className={styles.contacto}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>
          Solicita tu Evaluación Gratuita de Ejercicio para Mayores en Madrid
        </h2>
        <p className={styles.subtitulo}>
          Primera valoración sin compromiso. Solo 5 nuevas familias al mes.
        </p>

        <div className={styles.contactoGrid}>
          {/* Contacto Directo */}
          <div className={styles.contactoDirecto}>
            <h3>📞 Contacto Inmediato</h3>
            <a
              href="https://wa.me/34633261963?text=Hola,%20quiero%20información%20sobre%20ejercicio%20para%20personas%20mayores%20a%20domicilio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              📱 WhatsApp: 633 261 963
            </a>
            <a href="tel:+34633261963" className={styles.telefono}>
              📞 Llamar ahora: 633 261 963
            </a>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <h4>⏰ Horario</h4>
                <p>
                  <strong>L-V:</strong> 9:00-13:00 | 16:00-19:00
                </p>
                <p>
                  <strong>Sáb:</strong> 9:00-13:00
                </p>
              </div>

              <div className={styles.infoItem}>
                <h4>📍 Zona Servicio</h4>
                <p>Madrid Capital y alrededores</p>
                <small>Pozuelo • Las Rozas • Majadahonda • Alcobendas</small>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className={styles.formularioContainer}>
            <h3>✍️ O escríbenos aquí</h3>

            <form ref={form} onSubmit={enviarCorreo} className={styles.formulario}>
              <input
                type="text"
                name="user_name"
                placeholder="Tu nombre completo"
                required
                className={styles.campo}
                disabled={enviando}
              />

              <input
                type="email"
                name="user_email"
                placeholder="Tu email"
                required
                className={styles.campo}
                disabled={enviando}
              />

              <input
                type="tel"
                name="user_phone"
                placeholder="Teléfono de contacto"
                className={styles.campo}
                disabled={enviando}
              />

              <select
                name="ubicacion"
                className={styles.campo}
                required
                disabled={enviando}
              >
                <option value="">¿En qué zona necesitas el servicio?</option>
                <option value="Madrid Centro">Madrid Centro</option>
                <option value="Madrid Norte">Madrid Norte</option>
                <option value="Madrid Sur">Madrid Sur</option>
                <option value="Madrid Este">Madrid Este</option>
                <option value="Madrid Oeste">Madrid Oeste</option>
                <option value="Pozuelo">Pozuelo de Alarcón</option>
                <option value="Las Rozas">Las Rozas</option>
                <option value="Majadahonda">Majadahonda</option>
                <option value="Alcobendas">Alcobendas</option>
                <option value="Otra">Otra zona</option>
              </select>

              <textarea
                name="message"
                placeholder="Cuéntanos: ¿edad?, ¿situación actual?, ¿objetivos?..."
                required
                className={styles.campo}
                rows={4}
                disabled={enviando}
              />

              <div className={styles.opciones}>
                <label className={styles.label}>¿Qué te interesa?</label>
                <div className={styles.checkboxes}>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="opciones"
                      value="Evaluación gratuita"
                      onChange={actualizarOpciones}
                      disabled={enviando}
                    />
                    <span>🔍 Evaluación gratuita</span>
                  </label>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="opciones"
                      value="Programa básico"
                      onChange={actualizarOpciones}
                      disabled={enviando}
                    />
                    <span>💪 Programa básico (4 sesiones)</span>
                  </label>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="opciones"
                      value="Programa integral"
                      onChange={actualizarOpciones}
                      disabled={enviando}
                    />
                    <span>🎯 Programa integral (8 sesiones)</span>
                  </label>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="opciones"
                      value="Solo información"
                      onChange={actualizarOpciones}
                      disabled={enviando}
                    />
                    <span>ℹ️ Solo información y precios</span>
                  </label>
                </div>
              </div>

              <input type="hidden" name="opciones_resumen" />

              <button type="submit" className={styles.boton} disabled={enviando}>
                {enviando ? '⏳ Enviando...' : '📧 Solicitar información'}
              </button>

              {estado === 'ok' && (
                <div className={styles.exito}>
                  <h4>✅ ¡Mensaje enviado!</h4>
                  <p>Te contactaremos en menos de 24h para programar tu evaluación gratuita.</p>
                </div>
              )}

              {estado === 'error' && (
                <div className={styles.error}>
                  <h4>❌ Error al enviar</h4>
                  <p>Por favor, inténtalo de nuevo o contáctanos por WhatsApp.</p>
                  <small>Revisa la consola del navegador (F12) para ver detalles del error.</small>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Garantías */}
        <div className={styles.garantias}>
          <h3>🛡️ Tu Tranquilidad es Nuestra Prioridad</h3>
          <div className={styles.garantiasGrid}>
            <div className={styles.garantia}>
              <span className={styles.garantiaIcon}>🆓</span>
              <h4>Primera Sesión Gratis</h4>
              <p>Sin compromiso ni letra pequeña</p>
            </div>
            <div className={styles.garantia}>
              <span className={styles.garantiaIcon}>👨‍⚕️</span>
              <h4>Profesional Titulado</h4>
              <p>Especializado en personas mayores</p>
            </div>
            <div className={styles.garantia}>
              <span className={styles.garantiaIcon}>📊</span>
              <h4>Resultados Medibles</h4>
              <p>Progreso documentado cada semana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
