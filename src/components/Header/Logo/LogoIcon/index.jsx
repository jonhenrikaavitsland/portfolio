/**
 * Renders the logo icon for the application.
 *
 * This component displays a circular black background with a centered image, representing a capital "J".
 * The image is styled to maintain a consistent size, and the layout is responsive, centering the icon on smaller screens.
 *
 * @component
 * @example
 * // Example usage:
 * <LogoIcon />
 *
 * @returns {JSX.Element} The rendered logo icon.
 */
export default function LogoIcon() {
  return (
    <div className='bg-black w-10 aspect-square flex justify-center items-center rounded-full mx-auto md:mx-0'>
      <img src='/j-sharp-solid.svg' alt='capital letter j on dark background' className='w-[19px]' />
    </div>
  );
}
