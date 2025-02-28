/**
 * Renders the Contact section for the website.
 *
 * This component displays a "get in touch" section with a heading and a brief message inviting collaboration.
 * It also provides two call-to-action buttons linking to external profiles (LinkedIn and GitHub).
 * The layout is responsive, adapting between a column layout on small screens and a row layout on medium screens.
 *
 * @component
 * @example
 * // Example usage:
 * <Contact />
 *
 * @returns {JSX.Element} The rendered contact section.
 */
export default function Contact() {
  return (
    <div className='border-b border-black/20' id='contact'>
      <div className='lg:container flex flex-col md:flex-row gap-10 md:gap-0 mx-auto px-5 py-15 '>
        <section className='flex-1 flex flex-col gap-6 md:justify-center text-center md:text-start'>
          <h2 className='font-bold text-xl md:text-[2.5rem]/12 capitalize'>get in touch</h2>
          <p>
            <span className='capitalize'>interested</span> in collaborating? <span className='capitalize'>drop</span> me a message!
          </p>
        </section>
        <div className='flex-1 flex md:flex-col gap-5 mx-auto md:mx-0'>
          <div>
            <a href='https://www.linkedin.com/in/jon-henrik-aavitsland-abaa872b7/' target='blank' className='block text-center p-3 rounded-lg capitalize w-40 bg-black hover:bg-black/60 text-white font-semibold cursor-pointer'>
              linkedIn
            </a>
          </div>
          <div>
            <a href='https://github.com/jonhenrikaavitsland' target='blank' className='block text-center p-2.75 rounded-lg capitalize w-40 bg-white hover:bg-black/20 border border-black font-semibold cursor-pointer'>
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
