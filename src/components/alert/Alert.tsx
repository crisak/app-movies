import { ComponentPropsWithRef } from 'react'
import classnames from 'classnames'
import { Alert as AlertCustom } from './Alert.styles'

type AlertProps = {
  variant: 'info' | 'danger' | 'warning'
  visible?: boolean
  onClose?: () => void
} & ComponentPropsWithRef<'div'>

const Alert = ({
  variant,
  className,
  children,
  onClose,
  visible = true,
  ...props
}: AlertProps) => {
  const classNames = classnames(className, {
    [`alert--${variant}`]: true
  })

  const propsButton: Partial<ComponentPropsWithRef<'button'>> = {}

  if (!visible) {
    return null
  }

  if (onClose) {
    propsButton.onClick = onClose
  }

  return (
    <AlertCustom {...props} className={classNames} role="alert">
      {onClose && (
        <button className="close" {...propsButton}>
          &times;
        </button>
      )}

      {children}
    </AlertCustom>
  )
}

export default Alert
