import prisma from '@/lib/client'
import Project from '@/components/project'
import { playfairDisplay, playfairDisplayItalic } from '@/styles/fonts'
import styles from '@/styles/projects.module.css'

async function getProjects() {
	const projects = await prisma.project.findMany()
	return projects
}

export default async function Projects() {
	const projects = await getProjects()

	return (
		<main className={styles.main}>
			<h2 className={`${styles.title} ${playfairDisplay.className}`}>
				Checkout My Projects
			</h2>
			<div className={styles.projects}>
				{projects.map(project => (
					<Project project={project} key={project.id} />
				))}
			</div>
		</main>
	)
}
