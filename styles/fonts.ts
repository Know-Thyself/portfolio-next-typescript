import { Playfair_Display, Montserrat } from 'next/font/google'

const playfairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: 'variable',
	display: 'swap',
	style: 'normal',
	preload: true,
})

const playfairDisplayItalic = Playfair_Display({
	subsets: ['latin'],
	weight: 'variable',
	display: 'swap',
	style: 'italic',
	preload: true,
})

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: 'variable',
	display: 'swap',
	preload: true,
})

export { playfairDisplay, playfairDisplayItalic, montserrat }
