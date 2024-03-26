import {
	playfairDisplay,
	montserrat,
	playfairDisplayItalic,
} from '@/styles/fonts'
import AnimateCharacters from '@/animations/animate-characters'
import AnimateContainer from '@/animations/animate-container'
import AnimateWords from '@/animations/animate-words'
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
	hero.sort((a, b) => a.id - b.id)
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
						<AnimateContainer
							el='div'
							x={index % 2 ? 200 : -200}
							delay={0.5 + index}
							duration={1.5}
							once
							className={styles['text-animation-container']}
						>
							<div className={styles['text-wrapper']}>
								<AnimateCharacters
									el='h1'
									text={item.field}
									className={`${styles.field} ${playfairDisplay.className}`}
									rotateY={180}
									rotateX={180}
									delay={2.5}
									once
									duration={1}
								/>
								<AnimateWords
									el='h2'
									text={item.highlight}
									y={20}
									delay={3.5}
									once
									duration={1}
									className={`${styles.highlight} ${playfairDisplayItalic.className}`}
								/>
							</div>
						</AnimateContainer>
						<AnimateContainer
							el='div'
							x={index % 2 ? -200 : 200}
							delay={0.5 + index}
							duration={1.5}
							once
						>
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
						</AnimateContainer>
					</div>
				))}
				<div className={styles['projects-link-wrapper']}>
					<Link href='/projects' className={`${styles['projects-link']}`}>
						<span className={montserrat.className}>Checkout My Services</span>
					</Link>
				</div>
			</section>
		</main>
	)
}
