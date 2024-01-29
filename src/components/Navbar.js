import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ setSelectedCategoryId, selectedCategoryId }) {
    
    const navigate = useNavigate();

    const handleCategoryChange = (categoryId) => {
        setSelectedCategoryId(categoryId);
        navigate(`/category/${categoryId}`);
    }

    return (
        <nav className="bg-black flex justify-center">
            <ul className="text-white flex gap-20 p-3">
                <li
                    className={`cursor-pointer ${selectedCategoryId === 1 ? 'logo-orange' : ''}`}
                    onClick={() => { handleCategoryChange(1) }}
                >
                    Clothes
                </li>
                <li
                    className={`cursor-pointer ${selectedCategoryId === 2 ? 'logo-orange' : ''}`}
                    onClick={() => { handleCategoryChange(2) }}
                >
                    Electronics
                </li>
                <li
                    className={`cursor-pointer ${selectedCategoryId === 3 ? 'logo-orange' : ''}`}
                    onClick={() => { handleCategoryChange(3) }}
                >
                    Furniture
                </li>
                <li
                    className={`cursor-pointer ${selectedCategoryId === 4 ? 'logo-orange' : ''}`}
                    onClick={() => { handleCategoryChange(4) }}
                >
                    Shoes
                </li>
                <li
                    className={`cursor-pointer ${selectedCategoryId === 5 ? 'logo-orange' : ''}`}
                    onClick={() => { handleCategoryChange(5) }}
                >
                    Miscellaneous
                </li>
            </ul>
        </nav>
    )
}
