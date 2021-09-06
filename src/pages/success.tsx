import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '../components';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Message sent! - Matheus Calegaro</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <Layout>
        <>
          <h1 className="my-12 text-5xl md:text-6xl text-white font-extrabold">Success!</h1>
          <p className="text-white mb-5">Message successfully sent!</p>

          <Link href="/">
            <a className="text-white text-sm">Go back</a>
          </Link>
        </>
      </Layout>
    </>
  );
}
