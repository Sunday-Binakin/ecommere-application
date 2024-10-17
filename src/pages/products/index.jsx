import React from 'react'
import { apiGetProducts } from '../../services/product'
import { toast } from 'react-toastify';
// import { apiClient } from "./config"

const Products = () => {
    const fetchData = async () => {
        try {
            const products = await apiGetProducts();
            console.log('products:', products);
            // toast.success()
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }}
        fetchData();
        return (
            <div>
                products
            </div>
        )
    
}
export default Products
