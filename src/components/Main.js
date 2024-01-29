import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import Product from './Product';
import ProductDetail from './ProductDetail';

function Main() {
    
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    

    return (
        <>
            <Header setSelectedCategoryId={setSelectedCategoryId} selectedCategoryId={selectedCategoryId} />

            <Routes>
                <Route path="/" element={<ProductList endpoint='https://api.escuelajs.co/api/v1/products' />} />
                <Route path ='/category/:categoryId' element={<ProductList endpoint='https://api.escuelajs.co/api/v1/products?categoryId='/>} />
                <Route path='/product/:id' element={<ProductDetail />} />
                
            </Routes>

            
        </>
    );
}

// Exemple de fonction fetchData (à adapter selon vos besoins)
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default Main;
