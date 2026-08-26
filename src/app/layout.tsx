import { Fira_Code } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata } from 'next';

import './global.css';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Matheus Calegaro',
};

const GA_TRACKING_ID = 'G-GLF02KY1PX';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={firaCode.className}>
      <body>
        <main className="main-layout">{children}</main>
      </body>

      <GoogleAnalytics gaId={GA_TRACKING_ID} />
    </html>
  );
}
