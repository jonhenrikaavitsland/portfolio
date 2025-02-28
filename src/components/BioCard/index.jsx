import Tag from './Tag';

/**
 * Renders the BioCard component which displays personal profile information.
 *
 * This component displays a profile card with a semi-transparent dark background that includes:
 * - A profile image (using an SVG placeholder).
 * - The user's name as a prominent heading.
 * - Two tags indicating the user's roles (e.g., "frontend developer" and "UI/UX Designer") using the Tag component.
 * - A short descriptive text highlighting the user's passion for creating engaging web experiences.
 * - A call-to-action button ("view projects") for navigating to the user's projects.
 *
 * The layout is responsive, adjusting between column and row layouts based on screen size using Tailwind CSS utility classes.
 *
 * @component
 * @example
 * // Example usage:
 * <BioCard />
 *
 * @returns {JSX.Element} The rendered BioCard component.
 */
export default function BioCard() {
  return (
    <div className='bg-black/60'>
      <div className='px-5 pt-5 pb-10 md:py-15 flex flex-col md:flex-row gap-5 md:gap-10 justify-center text-white lg:container mx-auto'>
        <div>
          <img src='/circle-user-duotone-thin.svg' alt='my photo' className='h-25 aspect-square object-cover mx-auto md:mx-0' />
        </div>
        <section className='flex flex-col gap-3 text-center md:text-start'>
          <h1 className='font-bold text-2xl leading-8'>Jon Henrik Åvitsland</h1>
          <div className='flex gap-1.5 mx-auto md:mx-0'>
            <Tag>frontend developer</Tag>
            <Tag>
              <span className='uppercase'>ui/ux</span> designer
            </Tag>
          </div>
          <p>
            <span className='capitalize'>passionate</span> about creating engaging web experiences
          </p>
        </section>
        <div className='flex grow items-center justify-center md:justify-end'>
          <div>
            <a href='#projects' className='p-3 block rounded-lg capitalize bg-black hover:bg-black/20 text-white font-semibold cursor-pointer'>
              view projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
