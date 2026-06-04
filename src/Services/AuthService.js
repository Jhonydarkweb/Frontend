import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export const client = axios.create({
    baseURL: 'https://backendinvestigacion.runasp.net',
})

export async function login({ email, password }) {
    const { data } = await client.post('/api/auth/login', { email, password })
    return data.token
}

export function decodeToken(token) {
    return jwtDecode(token)
}