import LogoIcon from './LogoIcon';

/**
 * Renders the logo for the application, combining an icon with descriptive text.
 *
 * This component displays a logo icon (via the `LogoIcon` component) alongside text that describes the brand.
 * The text is styled with different casing and font sizes for responsiveness:
 * - The first part ("SEO") is rendered in uppercase.
 * - The ampersand (" & ") is rendered in standard case.
 * - The remaining text ("digital marketing services") is capitalized.
 *
 * The layout adjusts for different screen sizes by stacking the elements in a column on smaller screens and in a row on extra-large screens.
 *
 * @component
 * @example
 * // Example usage:
 * <Logo />
 *
 * @returns {JSX.Element} The rendered logo component.
 */
export default function Logo() {
  return (
    <div className='flex flex-col md:flex-row gap-2.5 md:gap-5 items-center mx-auto md:mx-0'>
      <LogoIcon />
      <span className='font-semibold text-xl md:text-2.5xl text-center md:text-start capitalize'>frontend developer portfolio</span>
    </div>
  );
}
