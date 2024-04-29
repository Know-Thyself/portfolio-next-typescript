'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
	playfairDisplay,
	playfairDisplayItalic,
	montserrat,
	oswald,
	raleway,
} from '@/styles/fonts'
import { usePathname } from 'next/navigation'
import styles from '@/styles/navbar.module.css'
import 'bootswatch/dist/sandstone/bootstrap.min.css'

export default function Navbar() {
	const pathname = usePathname()
	const [toggleMenu, setToggleMenu] = useState(false)
	const [isChecked, setIsChecked] = useState(false)
	const [screenWidth, setScreenWidth] = useState(1348)
	const links = ['home', 'projects', 'about', 'contact']

	const toggleNav = () => {
		setToggleMenu(!toggleMenu)
		setIsChecked(!isChecked)
	}

	function screenTest() {
		if (window.innerWidth <= 767) {
			toggleNav()
		}
	}

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth)
		}
		window.addEventListener('resize', changeWidth)
		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	}, [])

	return (
		<header
			className={`${styles['custom-header']} navbar navbar-expand-md border-0 fixed-top`}
			data-bs-theme='dark'
		>
			<div className={`container-fluid ${styles['nav-container']}`}>
				<Link
					className={`navbar-brand border-0 ms-md-5 ${styles.brand} ${raleway.className}`}
					href='/'
				>
					<span>Web</span>
					<span className={`${styles.initials}`}>BK</span>
					<span>Developer</span>
				</Link>
				<input
					id='menu__toggle'
					className={styles['menu__toggle']}
					type='checkbox'
					checked={isChecked}
					onChange={toggleNav}
				/>
				<label className={styles['menu__btn']} htmlFor='menu__toggle'>
					<span></span>
				</label>
				{(toggleMenu || screenWidth > 767) && (
					<nav
						className={`text-center me-md-5 ${styles['menu__box']} ${raleway.className}`}
					>
						<ul className={`navbar-nav border-0 ${styles['menu__box__ul']}`}>
							{links.map((link, index) => (
								<li
									key={index}
									className={`nav-item me-1 ${styles['custom-nav-item']}`}
								>
									<Link
										href={link === 'home' ? '/' : `/${link}`}
										className={`nav-link px-2 text-light ${
											pathname === `/${link}` ||
											(pathname === '/' && link === 'home')
												? styles.active
												: styles['menu__item']
										}`}
										onClick={screenTest}
									>
										<span>{link}</span>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				)}
			</div>
		</header>
	)
}
