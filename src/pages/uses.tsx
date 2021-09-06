import Head from 'next/head';
import { Layout } from '../components';

export default function UsesPage() {
  return (
    <>
      <Head>
        <title>Uses - Matheus Calegaro</title>
      </Head>

      <Layout>
        <>
          <h1 className="my-12 text-5xl md:text-6xl text-white font-extrabold">Uses</h1>

          <div className="row">
            <div className="md:col-6">
              <h2 className="text-2xl text-white font-bold mb-7">Computers</h2>

              <div className="row">
                <div className="md:col-6">
                  <h3 className="text-lg text-white font-bold mb-7">Desktop</h3>

                  <ul className="list-disc list-inside">
                    <li className="text-white">ASRock B450M Steel Legend</li>
                    <li className="text-white">AMD Ryzen 7 3800x</li>
                    <li className="text-white">32GB XPG Gammix D30 RAM @ 3000MHz (4x8GB)</li>
                    <li className="text-white">RX 5700XT Sapphire Nitro+</li>
                    <li className="text-white">Corsair MP500 480GB NVMe SSD</li>
                    <li className="text-white">Crucial BX500 240GB SSD</li>
                    <li className="text-white">2x 2TB Seagate Barracuda HDDs</li>
                    <li className="text-white">Lian Li Galahad 360mm Watercooler</li>
                    <li className="text-white">750W XPG Core Reactor 80 Plus Gold Power Supply</li>
                    <li className="text-white">Windows 10</li>
                    <li className="text-white">Ubuntu 20.04</li>
                    <li className="text-white">macOS Big Sur (OpenCore)</li>
                  </ul>
                </div>

                <div className="mt-7 md:col-6 md:mt-0">
                  <h3 className="text-lg text-white font-bold mb-7">Laptop</h3>

                  <ul>
                    <li className="text-white">15" 2019 Macbook Pro (from my current employer):</li>
                    <ul className="list-disc ml-8">
                      <li className="text-white">Intel Core i7 six-core</li>
                      <li className="text-white">16GB RAM</li>
                      <li className="text-white">240GB SSD</li>
                      <li className="text-white">Radeon Pro 555X</li>
                      <li className="text-white">macOS Big Sur</li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className="row mt-7">
                <div className="col-12">
                  <h3 className="text-lg text-white font-bold mb-7">Network</h3>

                  <ul className="list-disc list-inside">
                    <li className="text-white">TP-Link Archer C6</li>
                    <li className="text-white">
                      Pi-hole ad-blocker/DNS (running on Raspberry Pi Zero W)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 md:col-6 md:mt-0">
              <h2 className="text-2xl text-white font-bold mb-7">Desk setup/accessories</h2>

              <ul className="list-inside list-disc">
                <li className="text-white">GenioDesk Plus 1,60mx70cm desk</li>
                <li className="text-white">THUNDERX3 EC3 chair</li>
                <li className="text-white">LG 34GL750 34" Ultrawide Monitor</li>
                <li className="text-white">ELG F80n monitor arm</li>
                <li className="text-white">Edifier R1000t4 Speakers</li>
                <li className="text-white">Behringer U-Phoria UM2 Audio Interface</li>
                <li className="text-white">FJGEAR KVM Switch</li>
                <li className="text-white">BM800 Condenser Mic</li>
                <li className="text-white">
                  Modded SK68 Keyboard w/ Gateron Optical Yellow Swtiches
                </li>
                <li className="text-white">Logitech G402</li>
                <li className="text-white">Logitech MX Master 2s</li>
                <li className="text-white">HP 90cm x 40cm Deskpad</li>
              </ul>
            </div>
          </div>

          <div className="row mt-10">
            <div className="md:col-12">
              <h2 className="text-2xl text-white font-bold mb-7">Programming software</h2>

              <ul className="list-inside list-disc">
                <li className="text-white">VS Code</li>
                <li className="text-white">IntelliJ IDEA</li>
                <li className="text-white">NeoVim</li>
                <li className="text-white">Sublime Text (quick edits)</li>
                <li className="text-white">Insomnia REST Client</li>
                <li className="text-white">Postman</li>
              </ul>
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}
