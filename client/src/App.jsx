import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageRouting from './Components/Routing/routing';
import { ClothingContextProvider } from './Components/Context/Clothing/clothing-context';
import { UsersContextProvider } from './Components/Context/Users/users-context';
import { LoadingContextProvider } from './Components/Context/loading/loading-context';
import { CartContextProvider } from './Components/Context/Cart/cart-context';
import { FurnitureContextProvider } from './Components/Context/Furniture/furniture-context';
function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <ClothingContextProvider>
        <UsersContextProvider>
          <FurnitureContextProvider>
            <LoadingContextProvider>
     <PageRouting/>
</LoadingContextProvider>
          </FurnitureContextProvider>
        </UsersContextProvider>
      </ClothingContextProvider>
      </CartContextProvider>
      {/* <PageRouting/> */}
    </div>
  );
}

export default App;
