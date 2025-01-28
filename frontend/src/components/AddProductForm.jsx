import React, { useState } from 'react';
import { useProducts } from '../ProductContext';

function AddProductForm() {
    const { addProduct } = useProducts();
    const [formData, setFormData] = useState({ name: '', price: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(formData);
        setFormData({ name: '', price: '', description: '' });
    };

    return (
        <form className="mb-6 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-between sm:flex-row sm:space-x-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                    className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Price"
                    className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                />
            </div>
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all w-full sm:w-auto"
                >
                    Add Product
                </button>
            </div>
        </form>
    );
}

export default AddProductForm;
