import { useState, useEffect } from 'react'
import io from 'socket.io-client';

const socket = io('http://10.119.221.216:3001', {
    transports: ['websocket', 'polling']
});

const useFetch = (server) => {
    const [gaugeInfo, setGInfo] = useState([])
    const [time, setTime] = useState([])
    const [accumulatedData, setAccumulatedData] = useState([])
    const [goodData, setGoodData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            socket.on(server, data => {
                setLoading(false)
                setGInfo(data.gaugeInfo)
                setTime(data.time)
                setGoodData(data.goodData)
                setAccumulatedData(accData => [...accData, data.accumulatedData])
            })
        } catch (error) {
            setLoading(false)
            setError(error)
        }

    }, [server])


    if (accumulatedData.length > 30) {
        accumulatedData.shift()
    }

    return { gaugeInfo, time, goodData, accumulatedData, loading, error }
}

export default useFetch