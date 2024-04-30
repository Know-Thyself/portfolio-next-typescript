'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronCircleLeft,
	faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import { playfairDisplayItalic } from '@/styles/fonts'
import Image from 'next/image'
import Link from 'next/link'
import blackPinkImage from '@/public/images/hero/black-pink.png'
import frontendImage from '@/public/images/hero/frontend-two.jpg'
import backendImage from '@/public/images/hero/backend.png'
import fullStackImage from '@/public/images/hero/full-stack.jpg'
import databaseImage from '@/public/images/hero/database.jpg'
import AnimateContainer from '@/animations/animate-container'
import styles from '@/styles/carousel.module.css'

type HeroProps = {
	id: number
	image: string
	field: string
	highlight: string
	technologies: string[]
}

const Carousel = ({ hero }: { hero: HeroProps[] }) => {
	hero.sort((a, b) => a.id - b.id)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [pauseAutoPlay, setPauseAutoPlay] = useState(false)
	const timeoutRef = useRef<NodeJS.Timeout>()

	const slidersVariants = {
		hover: {
			scale: 1.1,
		},
	}

	const handleNext = () => {
		setCurrentIndex(prevIndex =>
			prevIndex + 1 === hero.length ? 0 : prevIndex + 1
		)
	}

	const handlePrevious = () => {
		setCurrentIndex(prevIndex =>
			prevIndex - 1 < 0 ? hero.length - 1 : prevIndex - 1
		)
	}

	const handleDotClick = (index: number) => {
		setCurrentIndex(index)
	}

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
	}

	useEffect(() => {
		if (!pauseAutoPlay) {
			timeoutRef.current = setTimeout(
				() =>
					setCurrentIndex(prevIndex =>
						prevIndex === hero.length - 1 ? 0 : prevIndex + 1
					),
				5000
			)

			return () => {
				resetTimeout()
			}
		}
	}, [currentIndex, pauseAutoPlay, hero.length])

	return (
		<div className={styles.carousel}>
			<div className={styles['carousel-images']}>
				<div className={styles['image-wrapper']}>
					<AnimateContainer
						el='div'
						onMouseEnter={() => setPauseAutoPlay(true)}
						onMouseLeave={() => setPauseAutoPlay(false)}
						duration={1}
						delay={0.5}
						once
						scale={0}
						className={styles['carousel-img-wrapper']}
						// transition={{ ease: 'easeOut', duration: 3 }}
					>
						<Image
							src={
								hero[currentIndex].image.includes('black-pink')
									? blackPinkImage
									: hero[currentIndex].image.includes('frontend')
									? frontendImage
									: hero[currentIndex].image.includes('backend')
									? backendImage
									: hero[currentIndex].image.includes('database')
									? databaseImage
									: hero[currentIndex].image.includes('full-stack')
									? fullStackImage
									: ''
							}
							alt={hero[currentIndex].field}
							className={styles['carousel-img']}
						/>
					</AnimateContainer>
					<AnimateContainer el='div' delay={2} duration={3} once>
						<div
							className={`${styles.overlay}`}
							onMouseEnter={() => setPauseAutoPlay(true)}
							onMouseLeave={() => setPauseAutoPlay(false)}
						>
							<div className={`${styles['overlay-inner-container']}`}>
								<div className={`${styles['overlay-text-wrapper']}`}>
									<h1
										className={`text-center ${playfairDisplayItalic.className} ${styles['hero-field']}`}
									>
										{hero[currentIndex].field}
									</h1>
									<h2 className={`text-center ${styles['hero-highlight']}`}>
										{hero[currentIndex].highlight}
									</h2>
								</div>
								<div className={styles.links}>
									<Link href='/services' className={`${styles.link}`}>
										My Services
									</Link>
									<Link href='/about' className={`${styles.link}`}>
										About Me
									</Link>
								</div>
							</div>
						</div>
					</AnimateContainer>
				</div>
				<div className={styles['slide_direction']}>
					<motion.div
						variants={slidersVariants}
						whileHover='hover'
						className={styles.left}
						onClick={handlePrevious}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: 'easeOut', duration: 0.5 }}
					>
						<FontAwesomeIcon
							icon={faChevronCircleLeft}
							className={styles['fa-chevron']}
						/>
					</motion.div>
					<motion.div
						variants={slidersVariants}
						whileHover='hover'
						className={styles.right}
						onClick={handleNext}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: 'easeOut', duration: 0.5 }}
					>
						<FontAwesomeIcon
							icon={faChevronCircleRight}
							className={styles['fa-chevron']}
						/>
					</motion.div>
				</div>
			</div>
			<div className={styles['carousel-indicator']}>
				{hero.map((item, index) => (
					<div
						key={item.id}
						className={`dot ${styles.dot} ${
							currentIndex === index ? styles.current : ''
						}`}
						onClick={() => handleDotClick(index)}
						// initial={{ opacity: 0 }}
						// animate={{ opacity: 1 }}
						// exit={{ opacity: 0 }}
						// transition={{ ease: 'easeOut', duration: 1 }}
					></div>
				))}
			</div>
		</div>
	)
}
export default Carousel
