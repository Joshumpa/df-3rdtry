import { useState, useEffect } from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:3000', {
    transports: ['websocket', 'polling']
});

const useFetch = (event) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            socket.on(event, data => {
                setData(data)
            })
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }, [event])

    return { data, loading, error }
}

export default useFetch