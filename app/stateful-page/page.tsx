"use client"
import { useState } from "react"

export default function StatefulPage() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Stateful Page</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Click Me!</button>
        </div>
    )
}