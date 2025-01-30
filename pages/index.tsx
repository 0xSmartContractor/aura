import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Aura AI - Cannabis Business Solutions</title>
        <meta name="description" content="AI-powered solutions for cannabis businesses" />
      </Head>

      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
