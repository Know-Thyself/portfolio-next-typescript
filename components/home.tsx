import styles from '@/styles/home.module.css'
import { lato, lora } from '@/styles/fonts'

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className={`${styles.title} ${lora.className}`}>Home Page</h1>
		</main>
	)
}
