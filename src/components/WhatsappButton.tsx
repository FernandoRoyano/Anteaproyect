import Image from 'next/image';
import styles from './WhatsappButton.module.css';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/34666666666?text=Hola%20quiero%20más%20info%20sobre%20ANTEA"
      className={styles.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Habla con nosotros por WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={48}
        height={48}
      />
    </a>
  );
}
