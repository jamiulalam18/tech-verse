
import { useLoaderData } from 'react-router-dom';
import ProductDetailsCard from '../Components/ProductDetailsCard/ProductDetailsCard';
const ProductDetails = () => {
    const product_details= useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto pt-28'>
            <ProductDetailsCard product_details={product_details}></ProductDetailsCard>
        </div>
    );
};

export default ProductDetails;