import { render, screen } from '@testing-library/react'
import { Title } from '.'

describe('Title', () => {
  it('should render Title', () => {
    render(<Title />)

    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })
})
