import type { ComponentPropsWithRef } from 'react'
import { CenterLoading, Loading as LoadingCustom } from './Loading.styles'

export type LoadingProps = {
  loading: boolean
  position?: 'center' | 'start'
} & ComponentPropsWithRef<'div'>

const Loading = ({ loading, position, ...props }: LoadingProps) => {
  const displayLoading = (
    <LoadingCustom {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingCustom>
  )

  if (loading) {
    if (position === 'center') {
      return <CenterLoading>{displayLoading}</CenterLoading>
    }
    return displayLoading
  }
  return null
}

export default Loading
