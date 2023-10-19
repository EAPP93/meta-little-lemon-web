import { useEffect, useState } from 'react'
import PropTypes from 'propTypes'

export default function useSesionStorage ({ key, initalData }) {
  const [data, setData] = useState(initalData)
  useEffect(() => {
    const getSessionData = async () => {
      try {
        await sessionStorage.getItem(key)
      } catch (error) {
        console.log(`Failed to get session data: ${error}`)
      }
    }
    getSessionData()
  }, [data])

  return [data, setData]
}

useSesionStorage.propTypes = {
  key: PropTypes.string.isRequired,
  initalData: PropTypes.object
}
