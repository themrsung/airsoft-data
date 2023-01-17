import { useEffect } from "react"
import { useState } from "react"
import { getRifles } from "../api/riflesApi"

export default function Home() {
    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const res = await getRifles()
        if (!res) return

        setItems(res)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return <></>
}
