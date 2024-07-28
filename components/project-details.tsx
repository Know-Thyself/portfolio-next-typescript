'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import 'bootswatch/dist/sandstone/bootstrap.min.css'
import { playfairDisplayItalic } from '@/styles/fonts'
import styles from '@/styles/details.module.css'

type ProjectProps = {
	id: number
	title: string
	image: string
	summary: string
	demo: string
	repository: string
}

export default function ProjectDetails({ project }: { project: ProjectProps }) {
	const [showMore, setShowMore] = useState(false)
	const summaryLines = project.summary.split(/\n/)
	const lessText = summaryLines.join(' ').slice(0, 300)

	const toggleText = () => {
		setShowMore(!showMore)
	}

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<h1
					className={`${styles['project-title']} ${playfairDisplayItalic.className}`}
				>
					{project.title}
				</h1>
				{summaryLines && (
					<div className={styles['project-wrapper']}>
						<Image
							src={`/images/projects/${project.image}`}
							alt={project.title}
							priority={true}
							loading='eager'
							className={styles['project-img']}
							width={340}
							height={280}
							sizes='(min-width: 300px) 100vw'
						/>
						<div className={styles['read-more-read-less-wrapper']}>
							{summaryLines.join(' ').length >= lessText.length ? (
								<div key='read-more'>
									{!showMore ? (
										<p className={styles.description}>
											<b className={styles.bold}>{project.title}&nbsp;</b>
											{lessText.replace("''", "'")}
											<span key='span' onClick={toggleText}>
												{!showMore ? '...read more ▼' : 'read less ▲'}
											</span>
										</p>
									) : (
										summaryLines.map((line, idx) => (
											<div key={idx}>
												<p className={styles.description}>
													{idx === 0 && (
														<b className={styles.bold}>{project.title}&nbsp;</b>
													)}
													{line.replace("''", "'")}
													{idx === summaryLines.length - 1 && (
														<span key='span' onClick={toggleText}>
															{!showMore ? '...read more ▼' : ' read less ▲'}
														</span>
													)}
												</p>
											</div>
										))
									)}
								</div>
							) : (
								summaryLines.map((line, idx) => (
									<div key={project.title}>
										<p className={styles.description}>
											{line.replace("''", "'")}
										</p>
									</div>
								))
							)}
						</div>
						<div className={styles['project-links-wrapper']}>
							<motion.a
								href={project.demo}
								target='_blank'
								rel='noreferrer'
								className={`btn border-0 ${styles['live-demo-link']}`}
								whileHover={{
									scale: 1.1,
									backgroundColor: 'var(--brand-bg)',
									color: 'var(--overlay-text-color)',
								}}
								whileTap={{ scale: 0.9 }}
							>
								Live Demo
							</motion.a>
							<motion.a
								href={project.repository}
								target='_blank'
								rel='noreferrer'
								className={`btn border-0 ${styles['github-link']}`}
								whileHover={{
									scale: 1.1,
									backgroundColor: 'var(--brand-bg)',
									color: 'var(--overlay-text-color)',
								}}
								whileTap={{ scale: 0.9 }}
							>
								<FontAwesomeIcon
									icon={faGithub as IconProp}
									className={styles['fa-github']}
								/>
								&nbsp; GitHub
							</motion.a>
						</div>
					</div>
				)}
				<div>
					<Link
						href='/projects'
						className={`btn border-0 ${styles['back-btn']}`}
					>
						<FontAwesomeIcon className={styles['fa-left']} icon={faArrowLeft} />
						&nbsp; All Projects
					</Link>
				</div>
			</div>
		</div>
	)
}
