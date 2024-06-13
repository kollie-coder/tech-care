import { Alert } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const useRequest = (fn) => {
    const [ data, setData ] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);
  
    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fn();

            setData(response);
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {

        fetchData()
    }, []);

    return { data, isLoading }
}

export default useRequest