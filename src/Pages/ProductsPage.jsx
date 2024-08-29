import React,{useEffect,useState} from "react";
import ProductService from "../Services/ProductService";
import  Stack  from "react-bootstrap/Stack";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const fetchPorducts = async() =>{
        try {
            const response = await ProductService.fetchProducts();
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        fetchPorducts();
    },[]);
    return <>
    <Stack direction="horizontal" spacing={2}>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </Stack>
    </>
}

export default ProductsPage;
