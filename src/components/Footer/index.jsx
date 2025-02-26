/**
 * Renders the Footer component of the application.
 *
 * This component displays a footer with centered, capitalized text that includes copyright
 * information along with a link to the developer's LinkedIn profile. The link is styled with an underline,
 * bold font, and a blue color, providing visual emphasis. The footer text is responsive with defined font size and padding.
 *
 * @component
 * @example
 * // Example usage:
 * <Footer />
 *
 * @returns {JSX.Element} The rendered footer element.
 */
export default function Footer() {
  return (
    <footer className='capitalize text-center text-xl/7 py-15'>
      <p>
        © 2025{' '}
        <a href='https://www.linkedin.com/in/jon-henrik-aavitsland-abaa872b7/' target='blank' className='text-blue-950 font-semibold underline underline-offset-4'>
          jon henrik åvitsland
        </a>
        . all rights reserved
      </p>
    </footer>
  );
}
