"use client"
import { createContext, useContext, useState } from "react";

const AddToCartContext = createContext();

export function AddToCartProvider({ children }) {
    const [basket, setBasket] = useState(null);
    
    return (
        <AddToCartContext.Provider value={{ basket, setBasket }}>
        {children}
        </AddToCartContext.Provider>
    );
    }