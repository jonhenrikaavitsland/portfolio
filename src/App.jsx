import BioCard from './components/BioCard';
import Header from './components/Header';

export default function App() {
  return (
    <div className='flex flex-col'>
      <Header />
      <main>
        <BioCard />
      </main>
    </div>
  );
}
