import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://kds-task.vercel.app/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const addProduct = async (product) => {
        try {
            await axios.post('https://kds-task.vercel.app/api/products', product);
            fetchProducts();
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`https://kds-task.vercel.app/api/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
}    