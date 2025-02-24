import BioCard from './components/BioCard';
import Header from './components/Header';
import SkillsCard from './components/SkillsCard';

export default function App() {
  return (
    <div className='flex flex-col h-dvh'>
      <Header />
      <main className='flex flex-col grow'>
        <BioCard />
        <SkillsCard />
      </main>
    </div>
  );
}
