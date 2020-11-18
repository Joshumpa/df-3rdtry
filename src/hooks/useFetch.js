import { useState, useEffect } from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:3001', {
    transports: ['websocket', 'polling']
});

const useFetch = ({ client, server }) => {
    const [gInfo, setGInfo] = useState([])
    const [time, setTime] = useState([])
    const [accumulatedData, setAccumulatedData] = useState([])
    const [goodData, setGoodData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            socket.emit(client, null)
            socket.on(server, data => {
                setLoading(false)
                setGInfo(data.info)
                setTime(data.time)
                setGoodData(data.good)
                setAccumulatedData(accData => [...accData, data.acc])
            })
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }, [client, server])

    
    if (accumulatedData.length>10) {
        accumulatedData.shift()
    }

    return { gInfo, time, goodData, accumulatedData, loading, error }
}

export default useFetch