import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { Layout } from '../components';
import pic from '../assets/img/mc.jpg';
import styles from '../assets/css/index.module.css';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Matheus Calegaro</title>
      </Head>

      <Layout absoluteNavbar>
        <div className="flex h-screen">
          <div className="row m-auto">
            <div className="md:col-6 flex justify-center relative">
              <img
                src="/img/dots.svg"
                width={77}
                height={77}
                className="absolute -top-7 right-20"
              />

              <img
                src="/img/dots.svg"
                width={77}
                height={77}
                className="absolute -bottom-7 left-20"
              />

              <Image src={pic} width={520} height={520} placeholder="blur" className={styles.pic} />
            </div>

            <div className="md:col-5 flex flex-col justify-center">
              <h1 className="mb-16 text-xl text-white font-extrabold md:leading-relaxed md:text-6xl">
                I’m a full-stack Software Engineer from Brazil
              </h1>

              <ul className={styles.socials}>
                <li>
                  <a href="https://github.com/mathcale" title="Github">
                    <Image src="/img/github.svg" width={32} height={32} />
                  </a>
                </li>

                <li>
                  <a href="https://linkedin.com/in/mathcale" title="LinkedIn">
                    <Image src="/img/linkedin.svg" width={32} height={32} />
                  </a>
                </li>

                <li>
                  <a href="https://codepen.io/mathcale" title="Codepen">
                    <Image src="/img/codepen.svg" width={32} height={32} />
                  </a>
                </li>

                <li>
                  <Link href="/contact">
                    <a title="Contact">
                      <Image src="/img/email.svg" width={32} height={32} />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
