import Image from 'next/image';
import Head from 'next/head';
import { Navbar } from '../components';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Matheus Calegaro</title>
      </Head>

      <Navbar />

      <main className="mx-auto max-w-7xl md:mt-24 sm:mt-10">
        <section className="flex items-center justify-center">
          <Image src="/img/m.jpg" alt="Matheus" width={500} height={500} className="rounded-xl" />

          <div className="ml-10">
            <h1 className="md:text-5xl sm:text-xl font-bold text-gray-700">
              Hello, world! My name is
              <span className="block font-cursive my-5">Matheus Calegaro</span>
              I'm a Full-Stack Software Engineer from Brazil
            </h1>

            <ul className="flex flex-col lg:flex-row list-none mt-10">
              <li className="mr-5 cursor-pointer border-b-4 hover:border-opacity-1 hover:border-gray-700 transition-all">LinkedIn</li>
              <li className="mr-5 cursor-pointer border-b-4 hover:border-opacity-1 hover:border-gray-700 transition-all">Github</li>
              <li className="mr-5 cursor-pointer border-b-4 hover:border-opacity-1 hover:border-gray-700 transition-all">Codepen</li>
              <li className="mr-5 cursor-pointer border-b-4 hover:border-opacity-1 hover:border-gray-700 transition-all">Speaker Deck</li>
              <li className="cursor-pointer border-b-4 hover:border-opacity-1 hover:border-gray-700 transition-all">Soundcloud</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
};

export default IndexPage;
