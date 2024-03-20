import styles from '@/styles/contact.module.css'
import { playfairDisplay } from '@/styles/fonts'

export default function ContactComponent() {
	return (
		<main className={styles.main}>
			<h1 className={`${styles.title} ${playfairDisplay.className}`}>Contact Page</h1>
		</main>
	)
}
