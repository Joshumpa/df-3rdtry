import React from 'react'
import Loading from '../Components/Loading'
import FatalError from './500'
import Graphics from './Graphics'
import useFetch from '../hooks/useFetch'

const GraphicsContainer = () => {
    const { data, loading, error } = useFetch("getInfo")

    if(loading)
        return <Loading />
            
    if(error)
        return <FatalError />

    return <Graphics
        data={data}            
    />
}

export default GraphicsContainer