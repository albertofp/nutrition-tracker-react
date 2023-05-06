import { fireEvent, render, screen } from '@testing-library/react'
import Button from '../components/Button'

describe('Button', () => {
  it('Calls onClick function', () => {
    const onclickfn = vi.fn()
    render(<Button onClick={onclickfn} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onclickfn).toBeCalled()
  })
})
