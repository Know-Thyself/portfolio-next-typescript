import { Playfair_Display, Montserrat, Oswald, Raleway } from 'next/font/google'

const playfairDisplay = Playfair_Display({
	subsets: ['cyrillic'],
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

const raleway = Raleway({
	subsets: ['cyrillic'],
	weight: 'variable',
	display: 'swap',
	preload: true,
})

const oswald = Oswald({ subsets: ['latin'], display: 'swap', preload: true })

export { playfairDisplay, playfairDisplayItalic, montserrat, oswald, raleway }
