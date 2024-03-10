import styles from '@/styles/home.module.css'
import { lato, lora, oswald } from '@/styles/fonts'
import Carousel from './carousel'

type HeroProps = {
	id: number
	image: string
	field: string
	highlight: string
	technologies: string[]
}

export default function Home({ hero }: { hero: HeroProps[] }) {
	return (
		<main className={styles.main}>
			<Carousel hero={hero} />
			<h1 className={`${styles.title} ${oswald.className}`}>Home Page</h1>
		</main>
	)
}
