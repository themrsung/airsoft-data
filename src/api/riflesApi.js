import axios from "axios"

const SERVER_URL = "http://localhost:5000"

export const getRifles = async () => {
    const res = await axios.get(`${SERVER_URL}/rifles`)
    if (!res) return

    return res.data
}

export const getRifle = async (id) => {
    const res = await axios.get(`${SERVER_URL}/rifles/${id}`)
    if (!res) return

    return res.data
}

export const addRifle = async (newRifle) => {
    const res = await axios.post(`${SERVER_URL}/rifles`, newRifle)
    if (!res) return

    return res.data
}

export const editRifle = async (id, newRifle) => {
    const res = await axios.put(`${SERVER_URL}/rifles/${id}`, newRifle)
    if (!res) return

    return res.data
}

export const deleteRifle = async (id) => {
    const res = await axios.delete(`${SERVER_URL}/rifles/${id}`)
    if (!res) return

    return res.data
}
