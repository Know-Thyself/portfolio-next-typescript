import styles from '@/styles/projects.module.css'
import { poppins, prozaLibre, lora } from '@/styles/fonts'

export default function ProjectsComponent() {
	return (
		<main className={styles.main}>
			<h1 className={`${styles.title} ${lora.className}`}>Projects Page</h1>
		</main>
	)
}
