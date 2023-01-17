import axios from "axios"
import { SERVER_URL } from "./apiSettings"

export const getMuzzleDevices = async () => {
    const res = await axios.get(`${SERVER_URL}/muzzleDevices`)
    if (!res) return

    return res.data
}

export const getMuzzleDevice = async (id) => {
    const res = await axios.get(`${SERVER_URL}/muzzleDevices/${id}`)
    if (!res) return

    return res.data
}

export const addMuzzleDevice = async (newMuzzleDevice) => {
    const res = await axios.post(`${SERVER_URL}/muzzleDevices`, newMuzzleDevice)
    if (!res) return

    return res.data
}

export const editMuzzleDevice = async (id, newMuzzleDevice) => {
    const res = await axios.put(
        `${SERVER_URL}/muzzleDevices/${id}`,
        newMuzzleDevice
    )
    if (!res) return

    return res.data
}

export const deleteMuzzleDevice = async (id) => {
    const res = await axios.delete(`${SERVER_URL}/muzzleDevices/${id}`)
    if (!res) return

    return res.data
}
