import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PresentContext from '../context/PresentContext';
function MyApp({ Component, pageProps }: AppProps) {
      <PresentContext.Provider
      value={1}
    ></PresentContext.Provider>
  return <Component {...pageProps} />;
}

export default MyApp;
