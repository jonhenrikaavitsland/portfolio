import Tag from '../../BioCard/Tag';

/* eslint-disable react/prop-types */

/**
 * Renders a project card component displaying a project's details.
 *
 * This component displays a project card that includes:
 * - An image of the project with an overlaid tag (using the `Tag` component) to indicate the project's label.
 * - A title for the project, passed as children, rendered as a heading.
 * - A list of tags that describe the project, rendered as individual `Tag` components.
 * - Two call-to-action links: one linking to the live site and one linking to the project's source code.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.image - The URL of the project's image.
 * @param {React.ReactNode} props.children - The title of the project.
 * @param {string[]} props.tags - An array of tags related to the project.
 * @param {string} props.project - A label for the project, displayed over the image.
 * @param {string} props.liveUrl - The URL linking to the live version of the project.
 * @param {string} props.repoUrl - The URL linking to the project's repository (source code).
 *
 * @example
 * // Example usage:
 * <Project
 *   image="https://example.com/project-image.jpg"
 *   tags={['React', 'Tailwind', 'API']}
 *   project="Web App"
 *   liveUrl="https://example.com/live"
 *   repoUrl="https://github.com/example/repo"
 * >
 *   My Awesome Project
 * </Project>
 *
 * @returns {JSX.Element} The rendered project card component.
 */
export default function Project({ image, children, tags, project, liveUrl, repoUrl, description }) {
  return (
    <div className='flex flex-col rounded-md border flex-5/6 md:flex-1 border-black/20 w-min shadow-md shadow-black/20'>
      <div className='relative'>
        <img src={image} alt={`${children} screenshot`} className='h-74 w-full object-contain object-top' />
        <div className='absolute top-0 left-0'>
          <Tag>{project}</Tag>
        </div>
      </div>
      <section className='flex flex-col gap-2 p-3 grow justify-between'>
        <div className='flex flex-col gap-2 pb-5'>
          <h3 className='capitalize font-bold'>{children}</h3>
          <div className='flex flex-wrap gap-1'>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          {description}
        </div>
        <div className='flex flex-wrap gap-2'>
          <div className='flex-1'>
            <a href={liveUrl} target='blank' className='whitespace-nowrap p-3 block w-full text-center rounded-lg capitalize bg-black hover:bg-black/60 text-white font-semibold cursor-pointer'>
              live site
            </a>
          </div>
          <div className='flex-1'>
            <a href={repoUrl} target='blank' className='whitespace-nowrap p-2.75 block w-full text-center rounded-lg capitalize border border-black hover:bg-black/20 text-black font-semibold cursor-pointer'>
              view code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
