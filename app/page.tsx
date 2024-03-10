import Home from '@/components/home'
import prisma from '@/lib/client'

async function getHeroContent() {
	const hero = await prisma.hero.findMany()
	return hero
}

export default async function Index() {
	const heroContent = await getHeroContent()
	return <Home hero={heroContent} />
}
