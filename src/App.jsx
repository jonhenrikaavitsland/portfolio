import BioCard from './components/BioCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectsCard from './components/ProjectsCard';
import SkillsCard from './components/SkillsCard';

/**
 * The main App component that renders the overall layout of the application.
 *
 * This component sets up the application's primary structure using a flex container that spans the full device viewport height.
 * It renders a Header component at the top, followed by a main content area that includes:
 * - BioCard: Displays the user's biography or profile details.
 * - SkillsCard: Showcases the user's skills and expertise.
 * - ProjectsCard: Displays a selection of the user's projects.
 * - Contact: Provides contact information and links for getting in touch.
 * - Footer: Renders the footer with copyright and legal information.
 *
 * @component
 * @example
 * // Example usage:
 * <App />
 *
 * @returns {JSX.Element} The rendered application layout.
 */
export default function App() {
  return (
    <div className='flex flex-col h-dvh'>
      <Header />
      <main className='flex flex-col grow'>
        <BioCard />
        <SkillsCard />
        <ProjectsCard />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
