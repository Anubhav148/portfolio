import Head from 'next/head'
import About from '../components/About'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Namaste, This is my porfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <Brands />
      <About />
      <Footer />
    </div>
  )
}
