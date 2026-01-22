import { useEffect, useState } from 'react';
import Product from './../product/Product';
import style from './home.module.css'

export default function Home() {
    const [products, setProducts] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
    const [error, setError] = useState('');

    const getProducts = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            setError("error, try again ...");
        } finally {
            setIsLoader(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    if (isLoader) return <h2>Loading ....</h2>
    if (error) return <h2>{error}</h2>

    return (
        <section className='products'>
            <div className='container'>
                <div className='row'>
                    {products.map(product => (
                        <div className='col-md-4 mb-4' key={product.id}>
                            <Product 
                                title={product.title}
                                price={product.price}
                                category={product.category}
                                rating={product.rating}
                                thumbnail={product.thumbnail}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
