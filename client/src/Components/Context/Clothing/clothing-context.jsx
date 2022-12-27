import { createContext, useState } from 'react';
export const ClothingContext = createContext();

export const ClothingContextProvider = ({ children }) => {
    const [clothing, setClothing] = useState([]);
    const [oneProduct, setOneProduct] = useState([]);
    return (
        <ClothingContext.Provider value={{clothing, setClothing,oneProduct, setOneProduct} }>
            {children}
        </ClothingContext.Provider>
    )
};