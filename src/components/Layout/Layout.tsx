import Head from 'next/head';
import { Navbar } from '../Navbar/Navbar';

interface LayoutProps {
  absoluteNavbar?: boolean;
  children: JSX.Element;
}

export function Layout({ absoluteNavbar, children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/img/logo.svg" />
      </Head>

      <div className="relative min-h-screen w-screen bg">
        <Navbar absolute={absoluteNavbar ?? false} />
        <main className="container pl-6 pr-6 md:pl-0 md:pr-0">{children}</main>
      </div>

      <style jsx>{`
        .bg {
          background-color: #1a1a2e;
        }
      `}</style>
    </>
  );
}
