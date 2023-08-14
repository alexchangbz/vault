"use client"

import { useState } from "react"

const productInitialState = { product_name: "", description: "", price: "", affiliate_link: "", product_image: "" }

const SecretAdmin = () => {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [product, setProduct] = useState(productInitialState)

    const addName = async () => {
        setMessage("")
        const response = await fetch("/api/lucky/add_lucky", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name })
        })
        const result = await response.json()

        if(result.success) {
            setMessage("Add successfully")
        } else {
            setMessage("Fail to add name")
        }
        setName("")
    }

    const addProduct = async () => {
        setMessage("")
        const response = await fetch("/api/products/add_product", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        })
        const result = await response.json()

        if(result.success) {
            setMessage("Add successfully")
        } else {
            setMessage("Fail to add product")
        }
        setProduct(productInitialState)
    }

    return (
        <div className="h-screen bg-[#333] p-24">
            <div>
                <div className="text-[1.4rem] text-center">Lucky Draw</div>
                <div>{message}</div>
                <div className='flex justify-center my-4 gap-5'>
                    <input 
                        className='p-2 rounded-md text-[#333]'
                        placeholder='Add name...'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <button className='bg-emerald-500 px-4 py-2 rounded-md' onClick={addName}>Add</button>
                </div>
            </div>

            <div>
                <div className="text-[1.4rem] text-center">Add Product</div>
                <div>{message}</div>
                {/* <div>{JSON.stringify(product)}</div> */}
                <div className='flex flex-col justify-center my-4 gap-5'>
                    <input 
                        className='p-2 rounded-md text-[#333]'
                        placeholder='Add product name...'
                        onChange={(e) => setProduct(product => ({ ...product, product_name: e.target.value }))}
                        value={product.product_name}
                    />
                    <textarea 
                        className='p-2 rounded-md text-[#333]'
                        placeholder='Add product description...'
                        onChange={(e) => setProduct(product => ({ ...product, description: e.target.value }))}
                        value={product.description}
                    />
                    <input 
                        type="number"
                        className='p-2 rounded-md text-[#333]'
                        placeholder='Add price...'
                        onChange={(e) => setProduct(product => ({ ...product, price: e.target.value }))}
                        value={product.price}
                    />
                    <input 
                        className='p-2 rounded-md text-[#333]'
                        placeholder='Add affiliate link...'
                        onChange={(e) => setProduct(product => ({ ...product, affiliate_link: e.target.value }))}
                        value={product.affiliate_link}
                    />
                    <input 
                        className='p-2 rounded-md text-[#333]'
                        placeholder='Add image name...'
                        onChange={(e) => setProduct(product => ({...product, product_image: e.target.value }))} 
                        value={product.product_image}
                    />
                    <button className='bg-emerald-500 px-4 py-2 rounded-md' onClick={addProduct}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default SecretAdmin