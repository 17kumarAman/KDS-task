import React from 'react';
import { useProducts } from '../ProductContext';

function ProductList() {
    const { products, deleteProduct } = useProducts();

    return (
        <ul className="space-y-4">
            {products.map((product) => (
                <li
                    key={product._id}
                    className="border p-4 rounded-lg shadow-lg flex justify-between items-center bg-white hover:bg-gray-100 transition-all"
                >
                    <div>
                        <strong className="text-lg font-semibold text-gray-800">{product.name}</strong>
                        <p className="text-gray-600">{product.description}</p>
                        <span className="text-green-500 font-bold">${product.price}</span>
                    </div>
                    <button
                        onClick={() => deleteProduct(product._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ProductList;
