import axios from "axios"
import { SERVER_URL } from "./apiSettings"

export const getInnerBarrels = async () => {
    const res = await axios.get(`${SERVER_URL}/innerBarrels`)
    if (!res) return

    return res.data
}

export const getInnerBarrel = async (id) => {
    const res = await axios.get(`${SERVER_URL}/innerBarrels/${id}`)
    if (!res) return

    return res.data
}

export const addInnerBarrel = async (newInnerBarrel) => {
    const res = await axios.post(`${SERVER_URL}/innerBarrels", newInnerBarrel`)
    if (!res) return

    return res.data
}

export const editInnerBarrel = async (id, newInnerBarrel) => {
    const res = await axios.put(
        `${SERVER_URL}/innerBarrels/${id}`,
        newInnerBarrel
    )
    if (!res) return

    return res.data
}

export const deleteInnerBarrel = async (id) => {
    const res = await axios.delete(`${SERVER_URL}/innerBarrels/${id}`)
    if (!res) return

    return res.data
}
