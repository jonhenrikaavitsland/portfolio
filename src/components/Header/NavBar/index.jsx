import NavLinkElement from './NavLinkElement';

/**
 * Renders the navigation bar for the website.
 *
 * This component displays a list of navigation links ("projects", "skills", "contact")
 * using the `NavLinkElement` component. The navigation list is hidden on small screens
 * and displayed as a flex container on medium screens and larger.
 *
 * @component
 * @example
 * // Example usage:
 * <NavBar />
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */
export default function NavBar() {
  return (
    <nav>
      <ul className='hidden md:flex gap-10'>
        <NavLinkElement>projects</NavLinkElement>
        <NavLinkElement>skills</NavLinkElement>
        <NavLinkElement>contact</NavLinkElement>
      </ul>
    </nav>
  );
}
