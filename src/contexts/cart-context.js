import { createContext, useState } from "react";

export const CartContext = createContext([])

export default function CartProvider ({children}){

    const [cartItems, setCartItems] = useState([]);
    
    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
    }
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
            
    if (existingItem) {
        return prevItems.map((cartItem) => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1}
        :cartItem
    );
    }else {
        return [...prevItems, {...item, id: prevItems.length + 1, quantity: 1, price: item.price}
        ]
    }
})
}

    const clearCart = () => {
        setCartItems([])
    }
    
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, totalPrice, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}