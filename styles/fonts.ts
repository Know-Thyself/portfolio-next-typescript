import {
	Roboto,
	Raleway,
	Playfair_Display,
	Montserrat,
	Poppins,
	Alegreya,
	Open_Sans,
	Lora,
	Proza_Libre,
	Comfortaa,
	Abril_Fatface,
	Lato,
	Concert_One,
	Oswald,
} from 'next/font/google'

const roboto = Roboto({
	subsets: ['latin'],
	weight: '300',
})

const poppins = Poppins({ subsets: ['devanagari'], weight: '900' })

const alegreya = Alegreya({ subsets: ['latin'], weight: 'variable' })

const raleway = Raleway({ subsets: ['cyrillic'] })

const playfairDisplay = Playfair_Display({
	subsets: ['cyrillic'],
	weight: 'variable',
})

const montserrat = Montserrat({
	subsets: ['cyrillic'],
})

const openSans = Open_Sans({ subsets: ['latin'] })

const lora = Lora({ subsets: ['latin'] })

const prozaLibre = Proza_Libre({ subsets: ['latin'], weight: '800' })

const comfortaa = Comfortaa({ subsets: ['latin'] })

const fatface = Abril_Fatface({
	subsets: ['latin'],
	display: 'auto',
	weight: '400',
})

const lato = Lato({ subsets: ['latin'], weight: '900' })

const concert = Concert_One({
	subsets: ['latin'],
	weight: '400',
	display: 'block',
})

const oswald = Oswald({ subsets: ['latin'] })

export {
	roboto,
	raleway,
	playfairDisplay,
	montserrat,
	poppins,
	alegreya,
	openSans,
	lora,
	prozaLibre,
	comfortaa,
	fatface,
	lato,
	concert,
	oswald,
}
