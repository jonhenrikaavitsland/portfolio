/* eslint-disable react/prop-types */

/**
 * Renders a tag element with preset styling for use as a badge or label.
 *
 * This component displays its children within a styled div that has a small font size,
 * specific padding, and a gray background with black text. It is useful for tagging items or
 * highlighting short pieces of information.
 *
 * @component
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to display inside the tag.
 *
 * @example
 * // Example usage:
 * <Tag>New</Tag>
 *
 * @returns {JSX.Element} The rendered tag element.
 */
export default function Tag({ children }) {
  return <div className='text-xs leading-4 py-0.5 px-1 rounded-xs capitalize bg-gray-400 text-black'>{children}</div>;
}
