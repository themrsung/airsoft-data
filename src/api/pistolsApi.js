import axios from "axios"
import { SERVER_URL } from "./apiSettings"

export const getPistols = async () => {
    const res = await axios.get(`${SERVER_URL}/pistols`)
    if (!res) return

    return res.data
}

export const getPistol = async (id) => {
    const res = await axios.get(`${SERVER_URL}/pistols/${id}`)
    if (!res) return

    return res.data
}

export const addPistol = async (newPistol) => {
    const res = await axios.post(`${SERVER_URL}/pistols`, newPistol)
    if (!res) return

    return res.data
}

export const editPistol = async (id, newPistol) => {
    const res = await axios.put(`${SERVER_URL}/pitsols/${id}`, newPistol)
    if (!res) return

    return res.data
}

export const deletePistol = async (id) => {
    const res = await axios.delete(`${SERVER_URL}/pitsols/${id}`)
    if (!res) return

    return res.data
}
