import { createContext, useState } from "react";

export const CartContext = createContext([])

export default function CartProvider ({children}){
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems ((prevItems) => [...prevItems, {...item, price: Number(item.price) }])
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId))
    }
    
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}