import { playfairDisplay, playfairDisplayItalic, raleway } from '@/styles/fonts'
import Image from 'next/image'
import styles from '@/styles/projects.module.css'

type ProjectProps = {
	id: number
	title: string
	image: string
	summary: string
	demo: string
	repository: string
}

export default function Project({ project }: { project: ProjectProps }) {
	return (
		<div>
			<h4 className={styles['project-title']}>{project.title}</h4>
			<Image
				src={`/images/projects/${project.image}`}
				alt={project.title}
				width={400}
				height={250}
			/>
			<p className={styles.summary}>{project.summary}</p>
		</div>
	)
}
