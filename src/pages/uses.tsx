import Head from 'next/head';
import Image from 'next/image';

import { Layout } from '../components';

import styles from '../assets/css/uses.module.css';
import setupPic from '../assets/img/setup.jpg';

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
                    <li className="text-white">AMD Ryzen 7 3800x @ 4GHz all-cores</li>
                    <li className="text-white">32GB XPG Gammix D30 RAM @ 3000MHz (4x8GB)</li>
                    <li className="text-white">RX 5700XT Sapphire Nitro+</li>
                    <li className="text-white">Corsair MP500 480GB NVMe SSD</li>
                    <li className="text-white">1x 2TB Seagate Barracuda HDD</li>
                    <li className="text-white">1x 8TB Seagate Barracuda HDD</li>
                    <li className="text-white">1x 480GB Netac SSD</li>
                    <li className="text-white">Thermalright PA-120 Cooler</li>
                    <li className="text-white">750W XPG Core Reactor 80 Plus Gold Power Supply</li>
                  </ul>
                </div>

                <div className="mt-7 md:col-6 md:mt-0">
                  <h3 className="text-lg text-white font-bold mb-7">Laptop</h3>

                  <ul>
                    <li className="text-white">13" 2020 Macbook Pro:</li>
                    <ul className="list-disc ml-8">
                      <li className="text-white">Apple M1</li>
                      <li className="text-white">16GB RAM</li>
                      <li className="text-white">1TB SSD</li>
                      <li className="text-white">macOS Ventura</li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className="row mt-7">
                <div className="col-12">
                  <h3 className="text-lg text-white font-bold mb-7">Network</h3>

                  <ul className="list-disc list-inside">
                    <li className="text-white">TP-Link Deco M5 mesh APs</li>
                    <li className="text-white">
                      Deskpi Pro (Raspberry Pi 4 8GB, 1TB SSD) for self-hosted services
                    </li>
                    <div className="text-white">pfSense+ firewall/router appliance</div>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 md:col-6 md:mt-0">
              <h2 className="text-2xl text-white font-bold">Desk setup</h2>

              <div className="row mb-7">
                <div className="md:col-6">
                  <ul className="list-inside list-disc mt-7">
                    <li className="text-white">GenioDesk Plus 1,60mx70cm desk</li>
                    <li className="text-white">Comfy Ergofy Top</li>
                    <li className="text-white">LG 34GL750 34" Ultrawide Monitor</li>
                    <li className="text-white">LG 24ML600M 24" Monitor</li>
                    <li className="text-white">Vertical monitor stand</li>
                    <li className="text-white">Anma Setups StandPro 2 Black</li>
                    <li className="text-white">Aimos 2-in-1 KVM Switch</li>
                    <li className="text-white">Dell D6000S USB-C Docking Station</li>
                    <li className="text-white">
                      Modded SK68 Keyboard w/ Gateron Optical Yellow Swtiches
                    </li>
                    <li className="text-white">Logitech G402</li>
                    <li className="text-white">Logitech MX Master 2s</li>
                    <li className="text-white">Steelseries QcK+ Mousepad</li>
                  </ul>
                </div>

                <div className="mt-7 md:col-6">
                  <ul className="list-inside list-disc">
                    <li className="text-white">SMSL SU-6 DAC</li>
                    <li className="text-white">SMSL SH-6 Amp</li>
                    <li className="text-white">Edifier R1000t4 Speakers</li>
                    <li className="text-white">Hifiman Edition XS</li>
                    <li className="text-white">Kuba Disco 2</li>
                    <li className="text-white">Sony WH-1000XM4</li>
                    <li className="text-white">Airpods Pro</li>
                    <li className="text-white">Tin Hifi T2 DLC</li>
                    <li className="text-white">Moondrop Chu</li>
                    <li className="text-white">7Hz Salnotes Zero</li>
                    <li className="text-white">Simgot EA500</li>
                    <li className="text-white">Behringer U-Phoria UM2 Audio Interface</li>
                    <li className="text-white">BM800 Condenser Mic</li>
                  </ul>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <Image
                  src={setupPic}
                  width={400}
                  height={366}
                  placeholder="blur"
                  className={styles.pic}
                />
              </div>
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}
