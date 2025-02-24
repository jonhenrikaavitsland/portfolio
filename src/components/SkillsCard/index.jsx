import ExperienceCard from './ExperienceCard';

/**
 * Renders the SkillsCard component which showcases various skills and expertise.
 *
 * This component displays a section with a header that includes an icon and title, followed by several experience cards,
 * each highlighting a different skill category:
 * - Frontend Development: Lists technologies like HTML, CSS, JavaScript, React, Bootstrap, and Tailwind.
 * - UI/UX Design: Emphasizes design tools and principles including Figma, Accessibility, and design principles.
 * - Problem Solving: Highlights skills in project management, agile methodology, testing, and other problem-solving techniques.
 *
 * The component leverages the `ExperienceCard` subcomponent to render each skill category with:
 * - An icon (provided via the `image` prop),
 * - A descriptive text (provided via the `text` prop),
 * - And a set of tags (provided via the `tags` prop).
 *
 * The layout is responsive, adjusting between column and row formats based on screen size.
 *
 * @component
 * @example
 * // Example usage:
 * <SkillsCard />
 *
 * @returns {JSX.Element} The rendered SkillsCard component.
 */
export default function SkillsCard() {
  const tagsFrontend = ['HTML', 'CSS', 'JavaScript', 'react', 'bootstrap', 'tailwind'];
  const tagsUiUx = ['figma', 'Accessibility', 'design principles'];
  const tagsProblemSolving = ['project management', 'agile methodology', 'kanban', 'gantt', 'user testing', 'unit-testing', 'E2E testing', 'jest', 'vitest', 'cypress', 'playwright'];

  return (
    <div className='flex flex-col gap-15 px-5 py-15 lg:container md:mx-auto'>
      <div className='flex gap-5 md:gap-15'>
        <div className='h-20 aspect-square md:h-45'>
          <img src='/maximize-duotone-solid.svg' alt='skills and expertise icon' className='h-20 md:h-45 aspect-square' />
        </div>
        <section className='flex flex-col justify-center gap-2 md:gap-6'>
          <h2 className='font-bold capitalize text-xl md:text-[2.5rem]/12'>skills & expertise</h2>
          <p>
            <span className='capitalize'>highlighting</span> my technical skills and experience.
          </p>
        </section>
      </div>
      <div className='flex flex-col md:flex-row gap-10'>
        <ExperienceCard
          text={
            <p>
              <span className='capitalize'>proficient</span> in building responsive and interactive web interfaces.
            </p>
          }
          image='/code-solid.svg'
          tags={tagsFrontend}
        >
          frontend development
        </ExperienceCard>
        <ExperienceCard
          text={
            <p>
              <span className='capitalize'>passionate</span> about creating visually appealing designs with a focus on user experience.
            </p>
          }
          image='/sidebar-solid.svg'
          tags={tagsUiUx}
        >
          <span className='uppercase'>ui/ux</span> design
        </ExperienceCard>
      </div>
      <ExperienceCard
        text={
          <p>
            <span className='capitalize'>strong</span> problem-solving skills to tackle complex challenges efficiently.
          </p>
        }
        image='/hexagon-exclamation-solid.svg'
        tags={tagsProblemSolving}
      >
        problem solving
      </ExperienceCard>
    </div>
  );
}
