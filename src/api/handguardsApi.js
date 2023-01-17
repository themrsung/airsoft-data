import axios from "axios"
import { SERVER_URL } from "./apiSettings"

export const getHandguards = async () => {
    const res = await axios.get(`${SERVER_URL}/handguards`)
    if (!res) return

    return res.data
}

export const getHandguard = async (id) => {
    const res = await axios.get(`${SERVER_URL}/handguards/${id}`)
    if (!res) return

    return res.data
}

export const addHandguard = async (newHandguard) => {
    const res = await axios.post(`${SERVER_URL}/handguards`, newHandguard)
    if (!res) return

    return res.data
}

export const editHandguard = async (id, newHandguard) => {
    const res = await axios.put(`${SERVER_URL}/handguards/${id}`, newHandguard)
    if (!res) return

    return res.data
}

export const deleteHandguard = async (id) => {
    const res = await axios.delete(`${SERVER_URL}/handguards/${id}`)
    if (!res) return

    return res.data
}
