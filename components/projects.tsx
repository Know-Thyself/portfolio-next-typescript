import styles from '@/styles/projects.module.css'
import { playfairDisplay, playfairDisplayItalic, raleway } from '@/styles/fonts'

export default function ProjectsComponent() {
	return (
		<main className={styles.main}>
			<h1 className={`${styles.title} ${playfairDisplay.className}`}>Projects Page</h1>
		</main>
	)
}
