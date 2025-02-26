import holidaze from '/holidaze.jpg';
import bidbliss from '/bidbliss.jpg';
import jsfw from '/jsfw.jpg';
import Project from './Project';

/**
 * Renders the ProjectsCard component which displays a selection of the latest projects.
 *
 * This component renders a section with a heading ("latest projects") and a project icon, followed by a collection of
 * project cards. Each project card is rendered using the `Project` component and displays:
 * - An image representing the project.
 * - A set of tags related to the project (e.g., technologies and tools used).
 * - A project label (e.g., "project exam 2" or "semester project 2").
 * - Links to the live site and the source code repository.
 *
 * The projects showcased include:
 * - "holidaze" with tags: ['HTML', 'tailwind', 'react / javascript', 'vite', 'figma', 'kanban', 'gantt'].
 * - "bidBliss" with tags: ['HTML', 'tailwind', 'javascript', 'vite', 'figma', 'kanban', 'gantt'].
 * - "online shop" (JSFW) with tags: ['HTML', 'tailwind', 'react / javascript', 'vite'].
 *
 * @component
 * @example
 * // Example usage:
 * <ProjectsCard />
 *
 * @returns {JSX.Element} The rendered ProjectsCard component.
 */
export default function ProjectsCard() {
  const tagsHolidaze = ['HTML', 'tailwind', 'react / javascript', 'vite', 'figma', 'kanban', 'gantt'];
  const tagsBidBliss = ['HTML', 'tailwind', 'javascript', 'vite', 'figma', 'kanban', 'gantt'];
  const tagsJsFw = ['HTML', 'tailwind', 'react / javascript', 'vite'];

  return (
    <div className='border-y border-black/20'>
      <div className='flex flex-col gap-15 lg:container mx-auto py-15 px-5'>
        <div className='flex gap-5 md:gap-15'>
          <section className='grow flex items-center'>
            <h2 className='font-bold text-xl md:text-[2.5rem]/12 capitalize'>latest projects</h2>
          </section>
          <div className='h-20 aspect-square md:h-45'>
            <img src='/chart-kanban-duotone-solid.svg' alt='projects icon' className='h-20 md:h-45 aspect-square' />
          </div>
        </div>
        <div className='flex flex-wrap gap-10'>
          <Project
            image={holidaze}
            tags={tagsHolidaze}
            project='project exam 2'
            liveUrl='https://holidaze-fuerteventura.netlify.app/'
            repoUrl='https://github.com/jonhenrikaavitsland/holidaze'
            description={
              <p>
                <span className='capitalize'>holidaze</span> is a modern, responsive accommodation booking web application developed as part of my final exam project in frontend development. This application serves both a customer-facing
                side—allowing users to browse and book holiday venues—and an admin-facing side—enabling venue managers to register, manage venues, and handle bookings.
              </p>
            }
          >
            holidaze
          </Project>
          <Project
            image={bidbliss}
            tags={tagsBidBliss}
            project='semester project 2'
            liveUrl='https://bidbliss.netlify.app/'
            repoUrl='https://github.com/jonhenrikaavitsland/bid-bliss'
            description={
              <p>
                <span className='capitalize'>the</span> online auction marketplace that makes bidding blissful! An auction marketplace that keeps the buyers and sellers anonymous while maintaining an elegant design and layout. Upon registering, users
                are given 1000 credits to use on the page.
              </p>
            }
          >
            bidBliss
          </Project>
          <Project
            image={jsfw}
            tags={tagsJsFw}
            project='frontend frameworks CA'
            liveUrl='https://my-jsfw-ca.netlify.app/'
            repoUrl='https://github.com/jonhenrikaavitsland/jsf-ca'
            description={
              <p>
                <span className='capitalize'>the</span> online shop was created as a first react project to demonstrate what I had learned about frontend frameworks. The app features a website that sells a variety of different products were the user
                can add to cart and complete the purchasing process.
              </p>
            }
          >
            online shop
          </Project>
        </div>
      </div>
    </div>
  );
}
