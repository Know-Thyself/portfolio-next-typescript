'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronCircleLeft,
	faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import blackPinkImage from '@/public/images/hero/black-pink.png'
import frontendImage from '@/public/images/hero/responsive-five.jpg'
import backendImage from '@/public/images/hero/backend.png'
import fullStackImage from '@/public/images/hero/full-stack.jpg'
import databaseImage from '@/public/images/hero/database.jpg'
import { oswald } from '@/styles/fonts'
import styles from '@/styles/carousel.module.css'

type HeroProps = {
	id: number
	image: string
	field: string
	highlight: string
	technologies: string[]
}

const Carousel = ({ hero }: { hero: HeroProps[] }) => {
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
				4000
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
					{/* <motion.img
							key={currentIndex}
							src={`images/${images[currentIndex].img}`}
							onMouseEnter={() => setPauseAutoPlay(true)}
							onMouseLeave={() => setPauseAutoPlay(false)}
							className='carousel-img'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ ease: 'easeOut', duration: 2 }}
						/> */}
					<Image
						src={
							hero[currentIndex].image.includes('black-pink')
								? blackPinkImage
								: hero[currentIndex].image.includes('responsive')
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
					<div
						className={`${styles.overlay}`}
						onMouseEnter={() => setPauseAutoPlay(true)}
						onMouseLeave={() => setPauseAutoPlay(false)}
					>
						<div
							className={`bg-dark bg-opacity-25 ${styles['overlay-inner-container']}`}
						>
							<h1
								className={`text-center ${oswald.className} ${
									styles['hero-field']
								} ${currentIndex % 2 ? styles['bright-field'] : ''}`}
							>
								{hero[currentIndex].field}
							</h1>
							<h3
								className={`text-center ${oswald.className} ${
									styles['hero-highlight']
								} ${currentIndex % 2 ? styles['bright-highlight'] : ''}`}
							>
								{hero[currentIndex].highlight}
							</h3>
							<div className={styles.links}>
								<Link href='/services' className={styles.link}>
									My Services
								</Link>
								<Link href='/about' className={styles.link}>
									About me
								</Link>
							</div>
							{/* <div className=''>
								<h2 className='text-white fw-semibold display-6'>
									{hero[currentIndex].label}
								</h2>
							</div> */}
						</div>
					</div>
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
