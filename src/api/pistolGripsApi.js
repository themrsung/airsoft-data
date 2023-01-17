import axios from "axios"
import { SERVER_URL } from "./apiSettings"

export const getPistolGrips = async () => {
    const res = await axios.get(`${SERVER_URL}/pistolGrips`)
    if (!res) return

    return res.data
}

export const getPistolGrip = async (id) => {
    const res = await axios.get(`${SERVER_URL}/pistolGrips/${id}`)
    if (!res) return

    return res.data
}

export const addPistolGrip = async (newPistolGrip) => {
    const res = await axios.post(`${SERVER_URL}/pistolGrips`, newPistolGrip)
    if (!res) return

    return res.data
}

export const editPistolGrip = async (id, newPistolGrip) => {
    const res = await axios.put(
        `${SERVER_URL}/pistolGrips/${id}`,
        newPistolGrip
    )
    if (!res) return

    return res.data
}

export const deletePistolGrip = async (id) => {
    const res = await axios.delete(`${SERVER_URL}/pistolGrips/${id}`)
    if (!res) return

    return res.data
}
