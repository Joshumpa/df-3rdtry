import { useState, useEffect } from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:3000', {
    transports: ['websocket', 'polling']
});

const useFetch = ({ client, server }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                await socket.emit(client, null)
                await socket.on(server, data => {
                    setLoading(false)
                    setData(data)
                })
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    }, [client, server])

    return { data, loading, error }
}

export default useFetch