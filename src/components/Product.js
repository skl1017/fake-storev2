import {Link} from 'react-router-dom';

export default function Product({ data }) {
    // Vérifier si les images sont une chaîne JSON et les parser si nécessaire
   

    return (
        <li>
            <Link to={`/product/${data.id}`}>
            {/* Utiliser imageUrl au lieu de data.images */}
            <img src={data.images[0]} alt="" className="w-full rounded" />
            <div className="flex justify-between items-center mt-2">
                <p>{data.title}</p>
                <p className="font-bold text-lg">${data.price}</p>
            </div>
            </Link>
        </li>
    );
}
