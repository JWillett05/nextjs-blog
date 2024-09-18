import { createContext } from "react";
import CartContainer from "./CartContainer";

export const CartContext = createContext([])


export default function layout({}){

  // const [cartItems, setCartItems] = useState([])

  const cartItems = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
    {id: 14},
    {id: 15},
    {id: 16},
    {id: 17},
    {id: 18},
    {id: 19},
    {id: 20}
  ]
  // const addToCart = (item) => {
  //   setCartItems((prevItems) => [...prevItems, item])
  // }

  return(
    <main className="layout">
      <CartContext.Provider value = {{cartItems}}>
        <CartContainer/>
      </CartContext.Provider>
    </main>
  )
}
