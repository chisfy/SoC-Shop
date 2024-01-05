"use client"
import { createContext, useContext, useState } from "react";

export const AddToCartContext = createContext();

export function AddToCartProvider({ children }) {
    const [basket, setBasket] = useState([]);
    
    return (
        <AddToCartContext.Provider value={{ basket, setBasket }}>
        {children}
        </AddToCartContext.Provider>
    );
    }