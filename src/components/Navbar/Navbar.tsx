import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export function Navbar() {
  const router = useRouter();

  const navLinks = [
    { title: '/index', href: '/' },
    { title: '/about', href: '/about' },
    { title: '/uses', href: '/uses' },
    { title: '/contact', href: '/contact' },
  ];

  const renderNavLinks = (): JSX.Element[] =>
    navLinks.map((navLink, i) => (
      <Link href={navLink.href} key={i}>
        <a
          className={
            router.pathname === navLink.href
              ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
          }
        >
          {navLink.title}
        </a>
      </Link>
    ));

  const renderMobileNavLinks = (): JSX.Element[] =>
    navLinks.map((navLink, i) => (
      <Link href={navLink.href} key={i}>
        <a
          className={
            router.pathname === navLink.href
              ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          }
        >
          {navLink.title}
        </a>
      </Link>
    ));

  return (
    <nav className="bg-transparent absolute w-full">
      <div className="container">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a className="flex items-center">
                  <Image src="/img/logo.svg" alt="Logo" width={32} height={32} />
                  <h1 className="text-white font-bold text-xl ml-4">Matheus Calegaro</h1>
                </a>
              </Link>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
            <div className="flex space-x-4">{renderNavLinks()}</div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">{renderMobileNavLinks()}</div>
      </div>
    </nav>
  );
}
