import { Fira_Code } from 'next/font/google';

import type { Metadata } from 'next';

import './global.css';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Matheus Calegaro',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={firaCode.className}>
      <body>
        <main className="main-layout">{children}</main>
      </body>
    </html>
  );
}
