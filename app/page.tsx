import Home from '@/components/home'
import prisma from '@/lib/client'

async function getHero() {
	const hero = await prisma.hero.findMany()
	return hero
}

async function getIntro() {
	const intro = await prisma.intro.findMany()
	return intro
}

async function getPortfolio() {
	const portfolio = await prisma.portfolio.findMany()
	return portfolio
}

export default async function Index() {
	const hero = await getHero()
	const portfolio = await getPortfolio()
	const intro = await getIntro()
	return <Home hero={hero} portfolio={portfolio} intro={intro[0]} />
}
