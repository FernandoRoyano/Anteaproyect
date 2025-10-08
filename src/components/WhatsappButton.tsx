import Image from 'next/image';
import styles from './WhatsappButton.module.css';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/message/3DG5Q5JRABXJN1"
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
