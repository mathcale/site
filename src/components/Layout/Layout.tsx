import Head from 'next/head';
import { Navbar } from '../Navbar/Navbar';

interface LayoutProps {
  absoluteNavbar?: boolean;
  noBottomSpacing?: boolean;
  children: JSX.Element;
}

export function Layout({ absoluteNavbar, noBottomSpacing, children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I’m a full-stack Software Engineer from Brazil. Check out my page!"
        />
        <meta name="author" content="Matheus Calegaro <hello@matheus.me>" />
        <meta name="robots" content="index,follow" />

        <link rel="icon" type="image/svg+xml" href="/img/logo.svg" />
      </Head>

      <div className="relative min-h-screen bg">
        <Navbar absolute={absoluteNavbar ?? false} />
        <main
          className={['container pl-6 pr-6 md:pl-0 md:pr-0', !noBottomSpacing ? 'pb-24' : ''].join(
            ' ',
          )}
        >
          {children}
        </main>
      </div>

      <style jsx>{`
        .bg {
          background-color: #1a1a2e;
        }
      `}</style>
    </>
  );
}
