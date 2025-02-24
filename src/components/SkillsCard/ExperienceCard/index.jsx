/* eslint-disable react/prop-types */
import Tag from '../../BioCard/Tag';

/**
 * Renders an Experience Card that displays an experience's details including an image, title, descriptive text, and tags.
 *
 * The component accepts the following props:
 * - **children**: The title of the experience, rendered as an h3 element.
 * - **text**: A description or additional content about the experience.
 * - **image**: A URL string for the image representing the experience.
 * - **tags**: An optional array of tag strings to be displayed below the experience details.
 *
 * The layout consists of a bordered card with padding that contains:
 * - An image section on the left, styled with a background and rounded corners.
 * - A text section on the right that displays the title and description.
 * Below the card, any provided tags are rendered using the `Tag` component.
 *
 * @component
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The title of the experience.
 * @param {React.ReactNode|string} props.text - Descriptive text about the experience.
 * @param {string} props.image - The URL of the image icon for the experience.
 * @param {string[]} [props.tags] - An array of tags to display with the experience.
 *
 * @example
 * // Example usage:
 * <ExperienceCard image="https://example.com/icon.png" tags={['creative', 'innovative']}>
 *   Graphic Design
 * </ExperienceCard>
 *
 * @returns {JSX.Element} The rendered Experience Card component.
 */
export default function ExperienceCard({ children, text, image, tags }) {
  return (
    <div className='flex flex-col flex-1 '>
      <div className='flex gap-4 border border-black/20 p-4'>
        <div className='flex justify-center items-center rounded-sm bg-black/20 h-25 aspect-square'>
          <img src={image} alt={`${children} icon`} className='h-20 aspect-square' />
        </div>
        <section className='flex flex-col gap-2'>
          <h3 className='capitalize text-xl/7 font-semibold'>{children}</h3>
          {text}
        </section>
      </div>
      <div className='flex flex-wrap gap-1 mt-1'>
        {tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
