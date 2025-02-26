import BioCard from './components/BioCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectsCard from './components/ProjectsCard';
import SkillsCard from './components/SkillsCard';

export default function App() {
  return (
    <div className='flex flex-col h-dvh'>
      <Header />
      <main className='flex flex-col grow'>
        <BioCard />
        <SkillsCard />
        <ProjectsCard />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
