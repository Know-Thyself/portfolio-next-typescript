import styles from '@/styles/home.module.css'
import { playfairDisplay, montserrat } from '@/styles/fonts'
import AnimateCharacters from '@/animations/animate-characters'
import Carousel from './carousel'

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
					// rotateY={180}
					rotateX={180}
					x={100}
					once
				/>
				<div>
					<p className={`${styles.intro} ${montserrat.className}`}>
						<span className={styles.name}>
							{intro.name.split(' ')[0] + ' here'},
						</span>
						{intro.intro}
					</p>
				</div>
			</section>
		</main>
	)
}
