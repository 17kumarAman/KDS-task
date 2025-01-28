import React from 'react';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import { ProductProvider } from './ProductContext';

function App() {
  return (
    <ProductProvider>
      <div className="min-h-screen w-screen border bg-gray-50 flex flex-col items-center py-8">
        <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Product Management</h1>
          <AddProductForm />
          <ProductList />
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
