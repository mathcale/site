import Link from 'next/link';
import { useRef } from 'react';

export const Navbar = (): JSX.Element => {
  const mobileMenuRef = useRef();

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">

          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>

                <span className="font-bold">Matheus Calegaro</span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/blog">
              <a className="py-2 px-3">blog</a>
            </Link>

            <Link href="/uses">
              <a className="py-2 px-3">uses</a>
            </Link>

            <Link href="/contact">
              <a className="py-2 px-3">contact</a>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            {/* @ts-ignore */}
            <button className="mobile-menu-button" onClick={() => mobileMenuRef.current.classList.toggle('hidden')}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu hidden md:hidden" ref={mobileMenuRef}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">blog</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">uses</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">contact</a>
      </div>
    </nav>
  )
};
