import type { ComponentPropsWithRef } from 'react'
import { Select as SelectCustom } from './Select.styles'

export type SelectProps = {
  options: Array<{ label: string; value: string }>
} & ComponentPropsWithRef<'select'>
const Select = ({ options, ...props }: SelectProps) => {
  return (
    <SelectCustom {...props}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </SelectCustom>
  )
}

export default Select
