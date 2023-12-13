"use client"
import { useState, useEffect } from "react"

export default function StatefulPage() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/api/data")
        .then(res => res.json())
        .then(data => setData(data))
    })

    return (
        <div>
            <h1>Loading Page</h1>
            <p>Data: {data ? JSON.stringify(data) : "Loading..."}</p>
        </div>
    )
}