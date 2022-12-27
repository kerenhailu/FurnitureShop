import { createContext, useState } from 'react';
export const FurnitureContext = createContext();

export const FurnitureContextProvider = ({ children }) => {
    const [furniture, setFurniture] = useState([]);
    return (
        <FurnitureContext.Provider value={{furniture, setFurniture} }>
            {children}
        </FurnitureContext.Provider>
    )
};