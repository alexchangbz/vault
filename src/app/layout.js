import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Vault',
  description: 'Trading Card Game for Collectors. Latest products for Pokemon TCG and One Piece TCG available.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/cards.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
