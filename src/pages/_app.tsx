import { AppProps } from 'next/app';
import '../styles/tailwind.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
