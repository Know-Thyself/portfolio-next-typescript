import styles from '@/styles/about.module.css'
import { playfairDisplay } from '@/styles/fonts'

export default function AboutComponent() {
	return (
		<main className={styles.main}>
			<h1 className={`${styles.title} ${playfairDisplay.className}`}>About Page</h1>
		</main>
	)
}
