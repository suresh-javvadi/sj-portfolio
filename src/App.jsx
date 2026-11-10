import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import GithubFeed from "./sections/GithubFeed";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GithubFeed />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
