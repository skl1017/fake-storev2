import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {useState} from 'react';

export default function ProductDetail(){

    const {id} = useParams();

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    const [productImage, setProductImage] = useState(0);

    const handleProductImageChange = (id)=>{
        console.log(id);
        setProductImage(id);
    }

    const url = `https://api.escuelajs.co/api/v1/products/${id}`;

    const { data, error, isLoading } = useQuery(['data', url], () => fetchData(url), {
        staleTime: 5000,
        cacheTime: 5000,
    });

    if (error) return <p>Error</p>;
    if (!data) return <p>No data available</p>;

    console.log(data);

    return (
        <div className="p-12 px-40 flex gap-10">

            <div className="flex w-1/2 items-start justify-start gap-10">
                <div className="flex w-1/4 flex-col gap-2 items-end">
                    {data.images.map((image, i) => (
                        <figure className="w-full cursor-pointer" onClick={()=>{handleProductImageChange(i)}}>
                            <img src={image} alt="" className={`w-full rounded${productImage === i ? ' border-black border-4':'' } `}  />
                            </figure>
                    ))}
                </div>
                <img src={data.images[productImage]} alt="" className=" w-4/6 rounded" />
            </div>

            <div className="p-1 w-1/2">
                <p className="text-4xl">{data.title}</p>
                <p className="mt-20">{data.description}</p>
                <p className="font-bold text-3xl mt-10">${data.price}</p>
            </div>
        </div>
    );

}