import { Work_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import { AddToCartProvider } from '../context/addtocartcontext.js'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Soc Shop',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
    <Head>
    <link rel="icon" href="../public/logo-51c754388b198e5bbb0d08a971ebbfa2.png"/>
    </Head>
      <body className={workSans.className}>
      <AddToCartProvider>
      <Navbar/>
      {children}
      </AddToCartProvider>
      <Footer/>
      </body>
    </html>
    </>
  )
}
