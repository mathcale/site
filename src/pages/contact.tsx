import Head from 'next/head';
import { Layout } from '../components';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Matheus Calegaro</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <Layout>
        <>
          <h1 className="my-12 text-5xl md:text-6xl text-white font-extrabold">Contact</h1>

          <form
            name="contact"
            method="POST"
            action="/success"
            data-netlify="true"
            data-netlify-recaptcha="true"
            netlify-honeypot="pot"
            className="w-full max-w-lg"
          >
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="pot" />
              </label>
            </p>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Name
                </label>

                <input
                  className="appearance-none block w-full bg-gray-200 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  required
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>

                <input
                  className="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>

                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  required
                ></textarea>
              </div>
            </div>

            <div data-netlify-recaptcha="true"></div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send
                </button>
              </div>

              <div className="md:w-2/3"></div>
            </div>
          </form>
        </>
      </Layout>
    </>
  );
}
