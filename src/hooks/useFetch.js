import { useState, useEffect } from 'react'
import openSocket from 'socket.io-client'

const socket = openSocket("http://localhost:3000/")

const useFetch = (event) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                socket.on(event, data => {
                    setData(data)
                })
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    })

    return { data, loading, error }
}


export default useFetch