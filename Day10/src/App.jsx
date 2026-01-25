import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Testing React heading', () => {
  render(<App />)
  expect(screen.getByText(/Testing React/i)).toBeInTheDocument()
})
