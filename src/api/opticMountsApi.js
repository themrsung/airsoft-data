import axios from "axios"
import { SERVER_URL } from "./apiSettings"

export const getOpticMounts = async () => {
    const res = await axios.get(`${SERVER_URL}/opticMounts`)
    if (!res) return

    return res.data
}

export const getOpticMount = async (id) => {
    const res = await axios.get(`${SERVER_URL}/opticMounts/${id}`)
    if (!res) return

    return res.data
}

export const addOpticMount = async (newOpticMount) => {
    const res = await axios.post(`${SERVER_URL}/opticMounts`, newOpticMount)
    if (!res) return

    return res.data
}

export const editOpticMount = async (id, newOpticMount) => {
    const res = await axios.put(
        `${SERVER_URL}/opticMounts/${id}`,
        newOpticMount
    )
    if (!res) return

    return res.data
}

export const deleteOpticMount = async (id) => {
    const res = await axios.delete(`${SERVER_URL}/opticMounts/${id}`)
    if (!res) return

    return res.data
}
