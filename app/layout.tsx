import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootswatch/dist/flatly/bootstrap.min.css'
import '../styles/globals.css'

export const metadata: Metadata = {
	title: 'BK Web Developer',
	description: 'Full-stack Web Developer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
