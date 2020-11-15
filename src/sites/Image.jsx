import React from 'react'
import { useQuery } from 'react-query'
import { fetchCurrentImage } from '../api'

const Image = ({ match : { params : { id }}}) => {
    const {data, isLoading, isError } = useQuery(['fetchCurrentImage', id], fetchCurrentImage)

    return (
        <div>
            {isLoading && <p>Loading...</p> }
            {isError && <p>Error</p> }
            {data && <img src={data.image} alt="Database Error"/> }     
        </div>
    )
}

export default Image