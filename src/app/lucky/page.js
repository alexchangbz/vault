"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const Lucky = () => {
    const [table, setTable] = useState([])

    const getLuckyNames = async () => {
        const response = await fetch('/api/lucky/get_lucky')
        const result = await response.json()

        setTable(result.luckydraws)
    }

    useEffect(() => {
      getLuckyNames()
    }, [table])
    
  return (
    <div className="p-24 bg-[#333] h-screen">
        {/* {JSON.stringify(table)} */}
        <div className="text-[0.8rem] text-[#fff] m-3">
            <Link className="text-blue-700" href="/">
                Home
            </Link>
            {` | LuckyDraw`}
        </div>
        <div className="text-center my-5">
            Slot Sekarang: {table.length} / 200
        </div>
        <div className="flex justify-center">
            <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((lucky, index) => 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className="text-center">{lucky.name}</td>
                            </tr>
                        )}
                    </tbody>    
            </table>
        </div>
    </div>
  )
}

export default Lucky