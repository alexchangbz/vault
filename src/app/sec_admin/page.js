"use client"

import { useState } from "react"

const SecretAdmin = () => {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

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

    return (
        <>
            <div>{message}</div>
            <div className='flex justify-center p-24 gap-5'>
                <input 
                    className='p-2 rounded-md text-[#333]'
                    placeholder='Add name...'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button className='bg-emerald-500 px-4 py-2 rounded-md' onClick={addName}>Add</button>
            </div>
        </>
    )
}

export default SecretAdmin