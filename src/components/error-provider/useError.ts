import { useContext } from 'react'
import { ErrorContext } from './ErrorProvider'

const useError = () => {
  return useContext(ErrorContext)
}

export default useError
