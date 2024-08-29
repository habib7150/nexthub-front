import React,{ useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import ProductCard from "../components/ProductCard";
import ProductService from "../Services/ProductService";

function ProductDetailsPage(){
    const {productId } = useParams();
    const [product, setProduct] = useState({});
    const fetchProductById = async()=>{
        try {
            const response = await ProductService.fetchProductById(productId);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(()=>{
        fetchProductById();
    },[]);

    return (
        <>
        <h2>
            Product Details for ID: {productId}
        </h2>
        <div>
        <h3 className="p-1">Produit:{product.name} </h3>
        <p className="p-1">Description:{product.description} </p>
        <p className="p-1">Prix: {product.price}</p>
        </div>
        </>
    );

}

export default ProductDetailsPage;