import styles from '@/styles/services.module.css'
import { lora } from '@/styles/fonts'

export default function ServicesComponent() {
	return (
		<main className={styles.main}>
			<h1 className={`${styles.title} ${lora.className}`}>Services Page</h1>
		</main>
	)
}
