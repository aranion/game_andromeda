import { render, screen } from '@testing-library/react'
import Game from './pages/Game'

const appContent = 'Вот тут будет жить ваше приложение :)'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  render(<Game />)
  expect(screen.getByText(appContent)).toBeDefined()
})
