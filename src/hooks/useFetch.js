import { useState, useEffect } from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:3001', {
    transports: ['websocket', 'polling']
});

const useFetch = ({ client, server, machine }) => {
    const [gaugeInfo, setGInfo] = useState([])
    const [time, setTime] = useState([])
    const [accumulatedData, setAccumulatedData] = useState([])
    const [goodData, setGoodData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            var delay = ( function() {
                var timer = 0;
                return function(callback, ms) {
                    clearTimeout (timer);
                    timer = setInterval(callback, ms);
                };
            })();
            delay(function(){
                socket.emit(client, { machine })
            }, 10000 );
            //setInterval(() => {
            //}, 10000);
            socket.on(server, data => {
                setLoading(false)
                setGInfo(data.gaugeInfo)
                setTime(data.time)
                setGoodData(data.goodData)
                setAccumulatedData(accData => [...accData, data.accumulatedData])
                //socket.emit(client, {machine})
            })
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }, [client, server, machine])


    if (accumulatedData.length > 50) {
        accumulatedData.shift()
    }

    return { gaugeInfo, time, goodData, accumulatedData, loading, error }
}

export default useFetch