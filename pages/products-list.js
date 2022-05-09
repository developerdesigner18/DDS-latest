import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProductsCard from '../components/Products/ProductsCard';
import Footer from '../components/_App/Footer';

const ProductsList = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Products List" 
            />  
            
            <ProductsCard />
		  
			<Footer />
		</>
    )
}

export default ProductsList;