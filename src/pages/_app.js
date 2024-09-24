import './../globals.css';
import Head from 'next/head';
import CartProvider from '@/contexts/cart-context';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/
        css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=
        Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link> */}
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
