import {
	playfairDisplay,
	montserrat,
	playfairDisplayItalic,
} from '@/styles/fonts'
import AnimateCharacters from '@/animations/animate-characters'
import Image from 'next/image'
import Link from 'next/link'
import uiUxImage from '@/public/images/hero/ui-ux-img.jpg'
import frontendImage from '@/public/images/hero/responsive.jpg'
import backendImage from '@/public/images/hero/backend.png'
import fullStackImage from '@/public/images/hero/full-stack.jpg'
import databaseImage from '@/public/images/hero/database.jpg'
import Carousel from './carousel'
import styles from '@/styles/home.module.css'

type HeroProps = {
	id: number
	image: string
	field: string
	highlight: string
	technologies: string[]
}

type IntroProps = {
	id: number
	name: string
	greeting: string
	image: string
	intro: string
}

type PortfolioProps = {
	id: number
	title: string
	image: string
	description: string
	logos: string[]
}

export default function Home({
	hero,
	intro,
	portfolio,
}: {
	hero: HeroProps[]
	intro: IntroProps
	portfolio: PortfolioProps[]
}) {
	return (
		<main className={styles.main}>
			<Carousel hero={hero} />
			<section className={styles['intro-section']}>
				<AnimateCharacters
					text={intro.greeting}
					el='h1'
					className={`${styles.title} ${playfairDisplay.className}`}
					delay={0.5}
					duration={1}
					rotateX={180}
					x={100}
					once
				/>
				<div>
					<p className={`${styles.intro} ${montserrat.className}`}>
						<span
							className={`${styles.name} ${playfairDisplayItalic.className}`}
						>
							{intro.name.split(' ')[0] + ' here'},{' '}
						</span>
						{intro.intro}
					</p>
				</div>
			</section>
			<section className={styles.overview}>
				{hero.map((item, index) => (
					<div
						key={item.id}
						className={
							index % 2
								? styles['grid-container-odd']
								: styles['grid-container-even']
						}
					>
						<div className={styles['text-wrapper']}>
							<h1 className={`${styles.field} ${playfairDisplay.className}`}>
								{item.field}
							</h1>
							<h2
								className={`${styles.highlight} ${playfairDisplayItalic.className}`}
							>
								{item.highlight}
							</h2>
						</div>
						<Image
							src={
								item.image.includes('black-pink')
									? uiUxImage
									: item.image.includes('frontend')
									? frontendImage
									: item.image.includes('backend')
									? backendImage
									: item.image.includes('database')
									? databaseImage
									: item.image.includes('full-stack')
									? fullStackImage
									: ''
							}
							alt={item.field}
							className={styles.image}
						/>
					</div>
				))}
			</section>
		</main>
	)
}
