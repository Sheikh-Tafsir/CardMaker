import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/Header">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;