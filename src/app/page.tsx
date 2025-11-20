import Header from '../components/Header';
import WarpBackground from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#020617] min-h-screen text-white">
      <Header />
      <WarpBackground />
      <Services />
      <Process />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
