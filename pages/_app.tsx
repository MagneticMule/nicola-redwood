import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PresentContext from '../context/PresentContext';
import { useState } from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  const [dayNum, setDayNum] = useState(1);
  return(<PresentContext.Provider value={{
    dayNum: dayNum,
    setDayNum: setDayNum
    }}>
    <Component {...pageProps} />;
    </PresentContext.Provider>
  )
}

export default MyApp;
