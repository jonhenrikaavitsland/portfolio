// eslint-disable-next-line react/prop-types
export default function NavLinkElement({ children, handleClick }) {
  return (
    <li>
      <button className='py-2 capitalize cursor-pointer hover:underline hover:underline-offset-8' onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}
