import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';

export default function HomePage() {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}