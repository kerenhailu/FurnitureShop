import { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    let [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{cart, setCart} }>
            {children}
        </CartContext.Provider>
    )
};