import React from 'react'
import { useParams } from 'react-router-dom'
import productDatas from "../../../../public/constants.json"
const HomeDetail = () => {
    const params = useParams();

    const productDetailPage = productDatas?.find((product) => {
        return product.id === parseInt(params.productDetail ?? '')
    })

    const deleteHandler = () => {
        console.log("Hi")

    }

    return (
        <div className='border-2 flex justify-between items-center p-4 m-11 '>
            <img src={productDetailPage?.image} alt="shoping" />
            <div>
                <h3 className='text-xl'>Name</h3>
                <span className='text-orange-500'>{productDetailPage?.title}</span>
            </div>
            <div className='ml-11'>
                <h3 className='text-xl '>SubTotal</h3>
                <strong>Rs. {productDetailPage?.price}</strong>
            </div>
            <p className='truncate ml-11'>{productDetailPage?.description}</p>
        </div>
    )
}

export default HomeDetail