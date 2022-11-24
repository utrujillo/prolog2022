import React from 'react'

const useAPI = () => {
  const getRequest = async (ENDPOINT) => {
    try {
      let response = await fetch( ENDPOINT )
      return response.json()
    } catch (error) {
      console.log('Error', error)
    }
  }

  // const postRequest = () => {}

  return { getRequest }
}

export default useAPI