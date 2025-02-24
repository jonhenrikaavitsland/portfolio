import NavLinkElement from './NavLinkElement';

export default function NavBar() {
  return (
    <nav>
      <ul className='flex gap-10'>
        <NavLinkElement>projects</NavLinkElement>
        <NavLinkElement>skills</NavLinkElement>
        <NavLinkElement>contact</NavLinkElement>
      </ul>
    </nav>
  );
}
