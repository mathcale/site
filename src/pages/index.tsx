import Image from 'next/image';
import { Navbar } from '../components';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Navbar />

      <main>
        <section>
          <Image src="/img/m.jpg" alt="Matheus" width={500} height={500} />
        </section>
      </main>
    </>
  )
};

export default IndexPage;
