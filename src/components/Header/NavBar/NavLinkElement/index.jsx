/* eslint-disable react/prop-types */
/**
 * Renders a navigation link element as a button within a list item.
 *
 * This component displays a button styled with padding and hover underline effects.
 * It accepts children to display as the link text and an optional click handler.
 *
 * @component
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {Function} [props.handleClick] - Optional callback to be invoked when the button is clicked.
 *
 * @example
 * // Example usage:
 * <NavLinkElement handleClick={() => console.log("Clicked!")}>
 *   Home
 * </NavLinkElement>
 *
 * @returns {JSX.Element} The rendered navigation link element.
 */
export default function NavLinkElement({ children, handleClick }) {
  return (
    <li>
      <button className='py-2 capitalize cursor-pointer hover:underline hover:underline-offset-8' onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}
