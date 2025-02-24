import Logo from './Logo';
import NavBar from './NavBar';

/**
 * Renders the header component for the application.
 *
 * This component displays a header containing the logo (via the `Logo` component) on the left
 * and the navigation bar (via the `NavBar` component) on the right. It uses a flex layout
 * with spacing and padding, and centers its content on medium to large screens.
 *
 * @component
 * @example
 * // Example usage:
 * <Header />
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
  return (
    <header className='flex w-full p-5 lg:container md:mx-auto'>
      <Logo />
      <NavBar />
    </header>
  );
}
