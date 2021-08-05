import { Navbar } from '../Navbar/Navbar';

interface LayoutProps {
  absoluteNavbar?: boolean;
  children: JSX.Element;
}

export function Layout({ absoluteNavbar, children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="relative min-h-screen w-screen bg">
        <Navbar absolute={absoluteNavbar ?? false} />
        <main className="container">{children}</main>
      </div>

      <style jsx>{`
        .bg {
          background: rgb(25, 31, 38);
          background: radial-gradient(circle, rgba(25, 31, 38, 0.95) 0%, rgba(25, 31, 38, 1) 100%);
        }
      `}</style>
    </>
  );
}
