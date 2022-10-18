import { useContext } from 'react'
import { ScrollContext } from './ScrollProvider'

export const useScrollProvider = () => useContext(ScrollContext)

export default useScrollProvider
