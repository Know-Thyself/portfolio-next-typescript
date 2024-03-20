import styles from '@/styles/services.module.css'
import { playfairDisplay } from '@/styles/fonts'

export default function ServicesComponent() {
	return (
		<main className={styles.main}>
			<h1 className={`${styles.title} ${playfairDisplay.className}`}>Services Page</h1>
		</main>
	)
}
