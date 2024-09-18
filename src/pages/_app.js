
import './../globals.css';
import { CartContext } from '@/contexts/cart-context';

function MyApp({ Component, pageProps }) {

    const cartItems = [
        { id: 2,
          name: "Iphone",
          price: 5.66
      },
        { id: 3,
          name: "Iphone 54",
          price: 45.66
        },
        { id: 4,
          name: "Alexa",
          price: 56.30
        },
        { id: 5,
          name: "Alexa",
          price: 56.30
        },
      ]

  return (
    <CartContext.Provider value={cartItems}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp;
