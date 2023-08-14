"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const Shop = () => {
    const [product, setProduct] = useState([])

    const getProducts = async () => {
        const response = await fetch('/api/products/get_products')
        const result = await response.json()

        setProduct(result.products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    if(product.length === 0) return <div className="bg-gray-800 h-screen flex justify-center items-center">
            <span className="animate-pulse text-center">Loading page, please wait...</span>
        </div>

    return (
        <div className='bg-[url("/images/shop_bg.png")] h-screen'>
            <div className="text-center py-5 bg-[#33333380]">
                <h1 className="text-[2rem] font-[600]">DegenKingMy TCG Shop</h1>
                <p>{`Price not inclusive of shipping. Minimum shipping fee for West Malaysia is RM8.00 & East Malaysia is RM15.00`}</p>
            </div>

            <div className="text-[0.8rem] text-[#333] m-3">
                <Link className="text-blue-700" href="/">
                    Home
                </Link>
                {` | Shop`}
            </div>

            <div className='flex justify-center gap-5 flex-wrap'>
                {product.map((product, index) => (
                    <div key={index} className="bg-gradient-to-br from-emerald-500 via-blue-500 to-indigo-500 border-4 border-slate-200 flex flex-col items-center justify-center h-[400px] max-w-[90%] rounded-md my-5">
                        <h2 className="text-[1rem] w-[75%] text-center">{product.product_name}</h2>
                        <Image 
                            src={`/images/${product.product_image}.jpg`}
                            width={300}
                            height={300}
                            alt={product.product_name}
                            className="w-[200px] rounded-lg my-2"
                        />
                        <p className="text-[1.1rem] mt-3">Price: RM {Number(product.price).toFixed(2)}</p>
                        <Link 
                            href={`https://api.whatsapp.com/send?phone=60162019881&text=Hi, I want to buy ${product.product_name}, RM${product.price}`}
                            legacyBehavior
                        >
                            <a  className="bg-gray-800 px-5 py-2 rounded-md my-2" target="_blank" rel="noopener noreferrer">
                                Buy Product
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop