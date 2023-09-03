import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const trackingId = 'G-GLF02KY1PX';

  useEffect(() => {
    const onRouteChange = (url: string): void => {
      // @ts-ignore
      window.gtag('config', trackingId, {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', onRouteChange);

    return () => {
      router.events.off('routeChangeComplete', onRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}');
        `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}
