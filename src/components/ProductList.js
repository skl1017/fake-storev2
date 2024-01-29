import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';
import { useParams } from 'react-router-dom';


export default function ProductList({endpoint}) {

    const { categoryId } = useParams();

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    const url = categoryId
        ? endpoint+categoryId
        : endpoint;
    

    const { data, error, isLoading } = useQuery(['data', url], () => fetchData(url), {
        staleTime: 5000,
        cacheTime: 5000,
    });

    
    if (error) return <p>Error</p>;
    if (!data) return <p>No data available</p>;

    console.log(data);

    return (
        <ul className="grid grid-cols-4 gap-10 p-10">
            {data.map((productData) => (
                <Product key={productData.id} data={productData} />
            ))}
        </ul>
    );
}
