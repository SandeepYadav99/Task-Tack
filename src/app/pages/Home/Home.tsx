import React, { useEffect, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

export const  Home = () => {
    const [productDatas, setProductData] = useState([]);
    const [filter, setFilter] = useState('All');
    const { addToCart } = useActions();
    const user = localStorage.getItem("user");
    console.log(user)
    const navigate = useNavigate()
    const fetchData = async () => {
        const responseData = await fetch("/constants.json")
        const data = await responseData.json();
        setProductData(data);

    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    useEffect(() => {
        fetchData()
    }, [])

    const filteredProducts = productDatas.filter((product: any) => {
        if (filter === 'Top') {
            return product.category === 'top'
        } else if (filter === 'Medium') {
            return product.category === 'medium'
        }
        return true;
    });

    const productDetail_page = (id: any) => {
        navigate(`/${id}`)
    }

    const addToCartHandler = (product: any) => {
        addToCart(product)
    }

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user]);
    
    return (
        <div >
            <div className='flex justify-center items-center'>
                <h1 className='text-xl mx-4'>Filter By:-</h1>
                <button
                    className={`bg-orange-500 rounded text-xl cursor-pointer text-white p-1 ${filter === 'Top' ? 'bg-opacity-100' : 'bg-opacity-50'
                        }`}
                    onClick={() => setFilter('Top')}
                >
                    Top
                </button>
                <button
                    className={`mx-2 bg-orange-500 rounded text-xl cursor-pointer p-1 text-white ${filter === 'Medium' ? 'bg-opacity-100' : 'bg-opacity-50'
                        }`}
                    onClick={() => setFilter('Medium')}
                >
                    Medium
                </button>
                <button
                    className={`mx-2 bg-orange-500 rounded text-xl cursor-pointer p-1 text-white ${filter === 'All' ? 'bg-opacity-100' : 'bg-opacity-50'
                        }`}
                    onClick={() => setFilter('All')}
                >
                    All
                </button>
            </div>
            <div className='grid grid-cols-4  gap-2 px-10 mt-10 '>
                {filteredProducts.map((product: any) => {
                    return (
                        <div className=' w-[13rem]  shadow-lg cursor-pointer' >
                            <div onClick={() => productDetail_page(product.id)}>
                                <div className='flex justify-center' >
                                    <img src={product.image} alt='shoping' className='' />
                                </div>
                                <div className='text-center'>
                                    <span className='text-center'>{product.title}</span> <br />
                                    <strong className='ml-4'>Rs. {product.price}</strong>
                                </div>
                            </div>
                            <div className='text-center my-2'>
                                <button className='bg-orange-500 rounded p-1 cursor-pointer text-white ' onClick={() => addToCartHandler(product)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


