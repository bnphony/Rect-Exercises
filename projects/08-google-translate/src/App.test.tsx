import { test, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import App from './App'

test('My App works as expected', async () => {
  // User debe estar antes que el render()
  const user = userEvent.setup()

  const app = render(<App />)
  const textareaFrom = app.getByPlaceholderText('Introducir texto')
  
  await user.type(textareaFrom, 'Hola mundo')

  const result = await app.findByDisplayValue(/Hello world/i, {}, { timeout: 2000 })

  expect(result).toBeTruthy()
})