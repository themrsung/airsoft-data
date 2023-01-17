import axios from "axios"
import { SERVER_URL } from "./apiSettings"

export const getOptics = async () => {
    const res = await axios.get(`${SERVER_URL}/optics`)
    if (!res) return

    return res.data
}

export const getOptic = async (id) => {
    const res = await axios.get(`${SERVER_URL}/optics/${id}`)
    if (!res) return

    return res.data
}

export const addOptic = async (newOptic) => {
    const res = await axios.post(`${SERVER_URL}/optics`, newOptic)
    if (!res) return

    return res.data
}

export const editOptic = async (id, newOptic) => {
    const res = await axios.put(`${SERVER_URL}/optics/${id}`, newOptic)
    if (!res) return

    return res.data
}

export const deleteOptic = async (id) => {
    const res = await axios.delete(`${SERVER_URL}/optics/${id}`)
    if (!res) return

    return res.data
}
