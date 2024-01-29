import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../state/cart/cartSlice';

export default function ProductDetail(){

    const cart = useSelector((state) => state.cart);
    console.log("Current Cart State:", cart);

    const {id} = useParams();
    const dispatch = useDispatch();

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    const [productImage, setProductImage] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1);

    const handleProductImageChange = (id)=>{
        console.log(id);
        setProductImage(id);
    }

    const handleQuantityInputChange = (event) => {
        const inputValue = event.target.value;

        if (inputValue === '' || (parseInt(inputValue, 10) > 0 && !isNaN(parseInt(inputValue, 10))) ) {
            setProductQuantity(inputValue === '' ? '' : parseInt(inputValue, 10));
        }
    }

    const handleQuantityInputBlur = () => {
        if (productQuantity === '' || isNaN(productQuantity) || productQuantity <= 0) {
            setProductQuantity(1);
        }
    }


    const handleProductQuantityChange = (mode)=>{
        if(mode === 'increment'){
            setProductQuantity(productQuantity+1);
        }else{
            if(productQuantity === 1){
                return;
            }
            setProductQuantity(productQuantity-1);
        }
    }

    const handleAddToCart = (data)=>{
        dispatch(addToCart({product: data}))
    }

  
    const url = `https://api.escuelajs.co/api/v1/products/${id}`;

    const { data, error, isLoading } = useQuery(['data', url], () => fetchData(url), {
        staleTime: 5000,
        cacheTime: 5000,
    });

    if (error) return <p>Error</p>;
    if (!data) return <p>No data available</p>;

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
            
                <div className="flex mt-10">
                    <button onClick={()=>{handleProductQuantityChange()}} className=" text-black p-3 rounded border-2 ">-</button>
                    <input type="number" className="w-20 text-center" value={productQuantity} onChange={handleQuantityInputChange} onBlur={handleQuantityInputBlur}   />
                    <button onClick={()=>{handleProductQuantityChange('increment')}} className=" text-black p-3 rounded border-2">+</button>
                </div>

                <button onClick={()=>{handleAddToCart(data)}} className="bg-black text-white p-3 rounded mt-10">Add to cart</button>
               
            </div>
           
        </div>
        
    );

}