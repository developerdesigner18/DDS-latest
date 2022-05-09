import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ProductsDetailsContent from '../components/ProductsDetails/ProductsDetailsContent';

const ProductsDetails = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Products Details" 
            />  

            <ProductsDetailsContent />
            
			<Footer />
		</>
    )
}

export default ProductsDetails;