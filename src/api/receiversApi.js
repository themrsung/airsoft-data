import axios from "axios"
import { SERVER_URL } from "./apiSettings"

export const getReceivers = async () => {
    const res = await axios.get(`${SERVER_URL}/receivers`)
    if (!res) return

    return res.data
}

export const getReceiver = async (id) => {
    const res = await axios.get(`${SERVER_URL}/receivers/${id}`)
    if (!res) return

    return res.data
}

export const addReceiver = async (newReceiver) => {
    const res = await axios.post(`${SERVER_URL}/receivers`, newReceiver)
    if (!res) return

    return res.data
}

export const editReceiver = async (id, newReceiver) => {
    const res = await axios.put(`${SERVER_URL}/receivers/${id}`, newReceiver)
    if (!res) return

    return res.data
}

export const deleteReceiver = async (id) => {
    const res = await axios.delete(`${SERVER_URL}/receivers/${id}`)
    if (!res) return

    return res.data
}
