import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Coverage from '@/components/Coverage';
import Deals from '@/components/Deals';
import Testimonials from '@/components/Testimonials';
import Partner from '@/components/Partner';
import FAQ from '@/components/FAQ';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Coverage />
      <Deals />
      <Testimonials />
      <Partner />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
