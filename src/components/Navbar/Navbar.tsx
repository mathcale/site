import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface NavbarProps {
  absolute: boolean;
}

export function Navbar({ absolute }: NavbarProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = [
    { title: '/index', href: '/' },
    { title: '/about', href: '/about' },
    { title: '/uses', href: '/uses' },
    { title: '/blog', href: '/blog' },
    { title: '/contact', href: '/contact' },
  ];

  const renderNavLinks = (): JSX.Element[] =>
    navLinks.map((navLink, i) => (
      <Link href={navLink.href} key={i}>
        <a
          className={
            router.pathname === navLink.href
              ? 'text-white px-3 py-2 rounded-md text-sm font-bold'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors'
          }
        >
          {navLink.title}
        </a>
      </Link>
    ));

  return (
    <nav className={['bg-transparent z-10', absolute ? 'md:absolute w-full' : ''].join(' ')}>
      <div className="container">
        <div className="flex flex-col md:items-center md:justify-between md:flex-row">
          <div className="flex flex-row items-center justify-between h-20">
            <Link href="/">
              <a className="flex items-center ml-3 md:ml-0">
                <Image src="/img/logo.svg" alt="Logo" width={32} height={32} />
                <h1 className="text-white font-bold text-xl ml-4">Matheus Calegaro</h1>
              </a>
            </Link>

            <button
              className="md:hidden focus:shadow-outline inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                )}
              </svg>
            </button>
          </div>

          <div
            className={[
              isOpen ? 'flex' : 'hidden',
              'flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row',
            ].join(' ')}
          >
            {renderNavLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
}
