'use client'

import { useRouter, usePathname } from 'next/navigation'
import { playfairDisplay, playfairDisplayItalic, raleway } from '@/styles/fonts'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
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
	const router = useRouter()
	const pathname = usePathname()

	return (
		<div
			className={styles['project-wrapper']}
			onClick={() => {
				const newPath =
					pathname +
					`/${project.title.toLowerCase().split(' ').join('-')}/${project.id}`
				router.push(newPath)
			}}
		>
			<h4 className={styles['project-title']}>{project.title}</h4>
			<div className={styles['image-tooltip-container']}>
				<Image
					src={`/images/projects/${project.image}`}
					alt={project.title}
					loading='eager'
					className={styles['project-img']}
					width={340}
					height={240}
					priority={true}
					sizes='(min-width: 300px) 100vw'
					placeholder='blur'
					blurDataURL={`/images/projects/${project.image}`}
				/>
				<span className={styles.tooltip}>Click to view project details</span>
			</div>
			<div className={styles['project-links-wrapper']}>
				<a
					href={project.repository}
					target='_blank'
					rel='noreferrer'
					className={styles['github-link']}
				>
					<FontAwesomeIcon
						icon={faGithub as IconProp}
						className={styles['fa-github']}
					/>
					&nbsp; GitHub
				</a>
				<a
					href={project.demo}
					target='_blank'
					rel='noreferrer'
					className={styles['live-demo-link']}
				>
					Live Demo
				</a>
			</div>
		</div>
	)
}
