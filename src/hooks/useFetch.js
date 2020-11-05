import { useState, useEffect } from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:3000', {
    transports: ['websocket', 'polling']
});

const useFetch = (events) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            socket.emit(events.client, null)
            socket.on(events.server, data => {
                setLoading(false)
                setData(data)
            })
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }, [events])

    return { data, loading, error }
}

export default useFetch