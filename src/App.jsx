import BioCard from './components/BioCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectsCard from './components/ProjectsCard';
import SkillsCard from './components/SkillsCard';

/**
 * The main App component that defines the overall layout of the application.
 *
 * This component structures the application into three primary sections:
 * - A header rendered by the `Header` component.
 * - A main content area rendered by the `main` element, which includes:
 *   - `BioCard`: Displays personal profile or biography information.
 *   - `SkillsCard`: Showcases skills and expertise.
 *   - `ProjectsCard`: Highlights a selection of projects.
 *   - `Contact`: Provides contact information and links for further engagement.
 * - A footer rendered by the `Footer` component.
 *
 * The layout is organized using a flex container that spans the full device viewport height,
 * ensuring a responsive and well-structured user interface.
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
