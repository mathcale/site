import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { Layout } from '../components';

import pic from '../assets/img/mc.png';
import styles from '../assets/css/index.module.css';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Matheus Calegaro</title>
      </Head>

      <Layout absoluteNavbar noBottomSpacing>
        <div className="flex h-screen">
          <div className="row m-auto">
            <div className="col-12 flex justify-center relative -mt-20 md:col-6 md:mt-0">
              <img
                src="/img/dots.svg"
                width={77}
                height={77}
                className="absolute -top-7 -right-1 md:right-20"
              />

              <img
                src="/img/dots.svg"
                width={77}
                height={77}
                className="absolute -bottom-7 -left-1 md:left-20"
              />

              <Image src={pic} width={520} height={520} placeholder="blur" className={styles.pic} />
            </div>

            <div className="col-12 md:col-5 flex flex-col justify-center">
              <h1 className="mt-12 mb-8 text-3xl text-white font-extrabold md:leading-tight md:text-7xl md:mt-0 md:mb-16">
                I'm a full-stack Software Engineer from Brazil 👋
              </h1>

              <ul className={styles.socials}>
                <li>
                  <a href="https://github.com/mathcale" title="Github" target="_blank">
                    <Image src="/img/github.svg" width={32} height={32} />
                  </a>
                </li>

                <li>
                  <a href="https://linkedin.com/in/mathcale" title="LinkedIn" target="_blank">
                    <Image src="/img/linkedin.svg" width={32} height={32} />
                  </a>
                </li>

                <li>
                  <a href="https://codepen.io/mathcale" title="Codepen" target="_blank">
                    <Image src="/img/codepen.svg" width={32} height={32} />
                  </a>
                </li>

                <li>
                  <Link href="mailto:hello@matheus.me">
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
