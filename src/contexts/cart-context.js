import { createContext, useState } from "react";

export const CartContext = createContext([])

export default function CartProvider ({children}){
    const [cartItems, setCart] = useState([]);

    const addToCart = (item) => {
        setCart ((prevItems) => [...prevItems, {...item, price: Number(item.price) }])
    };
    return(
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}