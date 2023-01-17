import axios from "axios"
import { SERVER_URL } from "./apiSettings"

export const getOuterBarrels = async () => {
    const res = await axios.get(`${SERVER_URL}/outerBarrels`)
    if (!res) return

    return res.data
}

export const getOuterBarrel = async (id) => {
    const res = await axios.get(`${SERVER_URL}/outerBarrels/${id}`)
    if (!res) return

    return res.data
}

export const addOuterBarrel = async (newOuterBarrel) => {
    const res = await axios.post(`${SERVER_URL}/outerBarrels`, newOuterBarrel)
    if (!res) return

    return res.data
}

export const editOuterBarrel = async (id, newOuterBarrel) => {
    const res = await axios.put(
        `${SERVER_URL}/outerBarrels/${id}`,
        newOuterBarrel
    )
    if (!res) return

    return res.data
}

export const deleteOuterBarrel = async (id) => {
    const res = await axios.delete(`${SERVER_URL}/outerBarrels/${id}`)
    if (!res) return

    return res.data
}
