import '@testing-library/jest-dom'
import { RenderResult, screen, render } from '@testing-library/react'
import { describe, test, vi, beforeEach } from 'vitest'
import userEvent from '@testing-library/user-event'
import Alert from './Alert'

describe('Alert', () => {
  let DOM: RenderResult
  beforeEach(() => {
    DOM = render(
      <Alert variant="info">
        <h2>Note error!</h2>
        <p>Error request</p>
      </Alert>
    )
  })

  test('It should render component Alert', () => {
    const result = screen.getByText(/Note error!/i)

    expect(result).toBeInTheDocument()
  })

  test('It should render component Alert with the variant "info"', () => {
    DOM.rerender(
      <Alert variant="info">
        <h2>Remember!</h2>
        <p>All is ok</p>
      </Alert>
    )
    const result = screen.getByRole('alert')

    expect(result).toBeInTheDocument()
    expect(result).toHaveClass('alert--info')
    expect(result).toHaveTextContent(/All is ok/i)
  })

  test('It should render component Alert with the variant "danger"', () => {
    DOM.rerender(
      <Alert variant="danger">
        <h2>Error!</h2>
        <p>All is ok</p>
      </Alert>
    )
    const result = screen.getByRole('alert')

    expect(result).toBeInTheDocument()
    expect(result).toHaveClass('alert--danger')
    expect(result).toHaveTextContent(/All is ok/i)
  })

  test('It should render component Alert with the variant "warning"', () => {
    DOM.rerender(
      <Alert variant="warning">
        <h2>Warning!</h2>
        <p>This is bad</p>
      </Alert>
    )
    const result = screen.getByRole('alert')

    expect(result).toBeInTheDocument()
    expect(result).toHaveClass('alert--warning')
    expect(result).toHaveTextContent(/This is bad/i)
  })

  test('It should only show button if property "onClose" exits', () => {
    DOM.rerender(
      <Alert variant="warning">
        <h2>Warning!</h2>
        <p>This is bad</p>
      </Alert>
    )
    const result = screen.queryByRole('button')

    expect(result).not.toBeInTheDocument()

    const closeAlert = vi.fn()

    DOM.rerender(
      <Alert variant="warning" onClose={closeAlert}>
        <h2>Warning!</h2>
        <p>This is bad</p>
      </Alert>
    )

    const resultButton = screen.queryByRole('button')

    expect(resultButton).toBeInTheDocument()
  })

  test('It should fire event the Alert when do click in the button', async () => {
    const closeAlert = vi.fn()

    DOM.rerender(
      <Alert variant="warning" onClose={closeAlert}>
        <h2>Warning!</h2>
        <p>This is bad</p>
      </Alert>
    )
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()

    const button = screen.getByRole('button')

    await userEvent.click(button)

    expect(closeAlert).toBeCalledTimes(1)
  })
})
