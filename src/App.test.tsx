import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import {
  beforeEach,
  describe,
  test,
  expect,
  vi,
  afterEach,
  type Mock
} from 'vitest'
import {
  cleanup,
  render,
  screen,
  act,
  waitForElementToBeRemoved
} from '@testing-library/react'
import App from './App'
import { moviesService } from '@/services'

vi.mock('@/services', async () => {
  const modules = await vi.importActual<{}>('@/__mocks__/services')
  return {
    __esModule: true,
    ...modules
  }
})

const clearTest = () => {
  cleanup()
  ;(moviesService.getAll as Mock).mockClear()
}

describe('App', async () => {
  const mockMovies = await moviesService.getAll('2020')
  const mockMovies2021 = await moviesService.getAll('2021')
  const defaultYear = '2020'

  beforeEach(async () => {
    await act(() => {
      render(<App />)
    })
  })

  afterEach(() => {
    clearTest()
  })

  test('Should render application', () => {
    const text = screen.getByText(/NatiApps Movies/i)
    expect(text).toBeInTheDocument()
    expect(text).toBeTruthy()
  })

  test('Should render all elements of list', () => {
    /** Years */
    const textNames = screen.getAllByText(new RegExp(defaultYear))
    const filterValueOptions = 1
    expect(textNames).toHaveLength(mockMovies.length + filterValueOptions)

    mockMovies.forEach(({ name }) => {
      const nameRegex = new RegExp(name)

      /** Names */
      const textNames = screen.getByText(nameRegex)
      expect(textNames).toBeInTheDocument()

      /** Images */
      const textImages = screen.getByAltText(nameRegex)
      expect(textImages).toBeInTheDocument()
    })
  })

  test('It should render the filter component with a default value of 2020', () => {
    const select = screen.getByLabelText('Año')
    const valueDefault = '2020'
    expect(select).toHaveValue(valueDefault)
  })

  test.only('It should show all the records when filter change to 2021', async () => {
    const selectElement = screen.getByLabelText('Año')
    await userEvent.selectOptions(selectElement, '2021')
    expect(selectElement).toHaveValue('2021')

    const [{ year }] = mockMovies2021

    const allResults = screen.getAllByText(new RegExp(year))
    const valueOption2021 = 1
    expect(allResults).toHaveLength(mockMovies2021.length + valueOption2021)
  })

  test('Should show loading when load the data and hide when finished', async () => {
    clearTest()
    render(<App />)

    const loadingElement = screen.getByTestId('test-loading')
    expect(loadingElement).toBeInTheDocument()

    const valueApi = new RegExp('Love and Monsters', 'i')

    expect(screen.queryByText(valueApi)).not.toBeInTheDocument()

    expect(moviesService.getAll).toHaveBeenCalledTimes(1)
    expect(moviesService.getAll).toHaveBeenCalledWith('2020')

    expect(await screen.findByText(valueApi))
  })

  test('Should wait for loading message to remove when posts arrive', async () => {
    clearTest()
    render(<App />)

    await waitForElementToBeRemoved(() => {
      return screen.queryByTestId('test-loading')
    })
  })

  test('Should show a alert message when not load the data and close alert with a button', async () => {
    clearTest()
    ;(moviesService.getAll as Mock).mockRejectedValue({
      error: 'Invalid query string',
      message: 'Bad request'
    })

    const errorElementFalsy = screen.queryByText(
      'Error al obtener listado. Intente nuevamente'
    )
    expect(errorElementFalsy).not.toBeInTheDocument()

    render(<App />)

    /** Show alert error */
    const element = await screen.findByText(
      'Error al obtener listado. Intente nuevamente'
    )
    expect(element).toBeInTheDocument()

    /** Show button error */
    const buttonElementError = screen.getByRole('button', { name: 'Aceptar' })
    expect(buttonElementError).toBeInTheDocument()

    await userEvent.click(buttonElementError)

    const errorMessage = screen.queryByText(
      'Error al obtener listado. Intente nuevamente'
    )
    expect(errorMessage).not.toBeInTheDocument()
  })
})
