import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { EmailCollector } from '@/components/EmailCollector'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Lara AI - 2D art made simple for mobile games</title>
        <meta
          name="description"
          content="Generate stunning 2D game art in your own style with ease, quickly and automatically with our powerful tool!"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <EmailCollector />
      </main>
      <Footer />
    </>
  )
}
