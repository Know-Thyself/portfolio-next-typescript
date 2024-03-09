import styles from '@/styles/contact.module.css'
import { alegreya, lora } from '@/styles/fonts'

export default function ContactComponent() {
	return (
		<main className={styles.main}>
			<h1 className={`${styles.title} ${lora.className}`}>Contact Page</h1>
		</main>
	)
}
