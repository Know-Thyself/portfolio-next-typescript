import prisma from '@/lib/client'
import Project from '@/components/project'
import { playfairDisplay, playfairDisplayItalic, raleway } from '@/styles/fonts'
import styles from '@/styles/projects.module.css'

async function getProjects() {
	const projects = await prisma.project.findMany()
	return projects
}

export default async function Projects() {
	const projects = await getProjects()

	return (
		<main className={`${styles.main} ${raleway.className}`}>
			<h1 className={`${styles.title} ${playfairDisplay.className}`}>
				Projects Page
			</h1>
			<div className={styles.projects}>
				{projects.map(project => (
					<Project project={project} key={project.id} />
				))}
			</div>
		</main>
	)
}
